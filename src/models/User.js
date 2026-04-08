import bcrypt from 'bcryptjs'
import mongoose from 'mongoose'

const ROLES = ['admin', 'monitoring', 'tuzilmalar', 'sotib_oluvchi']
const SALT_ROUNDS = 10

const buildDisplayName = ({
	username,
	organizationName,
	firstName,
	lastName,
}) => {
	const fullName = [firstName, lastName].filter(Boolean).join(' ').trim()
	return [organizationName, username ? `@${username}` : '', fullName]
		.filter(Boolean)
		.join(' — ')
}

const userSchema = new mongoose.Schema(
	{
		username: {
			type: String,
			required: true,
			unique: true,
			trim: true,
		},
		password: {
			type: String,
			required: true,
			minlength: 6,
		},
		organizationName: {
			type: String,
			required: true,
			trim: true,
		},
		firstName: {
			type: String,
			required: true,
			trim: true,
		},
		lastName: {
			type: String,
			required: true,
			trim: true,
		},
		displayName: {
			type: String,
			trim: true,
		},
		phoneNumber: {
			type: String,
			required: true,
			trim: true,
		},
		role: {
			type: String,
			enum: ROLES,
			required: true,
			default: 'sotib_oluvchi',
		},
	},
	{
		timestamps: true,
	},
)

async function hashPasswordIfNeeded(rawPassword) {
	if (
		!rawPassword ||
		rawPassword.startsWith('$2a$') ||
		rawPassword.startsWith('$2b$')
	) {
		return rawPassword
	}

	return bcrypt.hash(rawPassword, SALT_ROUNDS)
}

userSchema.pre('save', async function saveHook() {
	this.displayName = buildDisplayName(this)

	if (!this.isModified('password')) {
		return
	}

	this.password = await hashPasswordIfNeeded(this.password)
})

async function syncDisplayNameOnUpdate(query) {
	const update = query.getUpdate() || {}
	const currentDoc = await query.model.findOne(query.getQuery()).lean()

	if (!currentDoc) {
		return update
	}

	const nextValues = {
		username: update.username ?? update.$set?.username ?? currentDoc.username,
		organizationName:
			update.organizationName ??
			update.$set?.organizationName ??
			currentDoc.organizationName,
		firstName:
			update.firstName ?? update.$set?.firstName ?? currentDoc.firstName,
		lastName: update.lastName ?? update.$set?.lastName ?? currentDoc.lastName,
	}

	update.$set = {
		...(update.$set || {}),
		displayName: buildDisplayName(nextValues),
	}

	return update
}

userSchema.pre('findOneAndUpdate', async function updateHook() {
	const update = await syncDisplayNameOnUpdate(this)

	if (update.password) {
		update.password = await hashPasswordIfNeeded(update.password)
	}

	if (update.$set?.password) {
		update.$set.password = await hashPasswordIfNeeded(update.$set.password)
	}
})

userSchema.pre('updateOne', async function updateOneHook() {
	const update = await syncDisplayNameOnUpdate(this)

	if (update.password) {
		update.password = await hashPasswordIfNeeded(update.password)
	}

	if (update.$set?.password) {
		update.$set.password = await hashPasswordIfNeeded(update.$set.password)
	}
})

userSchema.methods.comparePassword = function comparePassword(password) {
	return bcrypt.compare(password, this.password)
}

const User = mongoose.models.User || mongoose.model('User', userSchema)

export { ROLES }
export default User

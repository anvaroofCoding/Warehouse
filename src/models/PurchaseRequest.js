import mongoose from 'mongoose'

const REQUEST_STATUSES = [
	'ko‘rilmoqda',
	'tasdiqlanmoqda',
	'tasdiqlangan',
	'qisman tasdiqlandi',
	'rad etildi',
	'sotib olish kerak',
	'sotib olinmoqda',
	'tuzilmalar tasdig‘ida',
	'boshliq tasdig‘ida',
	'tasdiqlandi',
]
const APPROVAL_STAGES = [
	'tuzilmalar',
	'monitoring',
	'sotib_olish',
	'yakunlandi',
]
const DECISION_STATUSES = ['tasdiqlandi', 'qisman tasdiqlandi', 'rad etildi']
const ITEM_UNITS = [
	'dona',
	'kg',
	'litr',
	'metr',
	'quti',
	'komplekt',
	'juft',
	'paket',
]

const purchaseItemSchema = new mongoose.Schema(
	{
		productName: {
			type: String,
			required: true,
			trim: true,
		},
		features: {
			type: String,
			default: '',
			trim: true,
		},
		unit: {
			type: String,
			enum: ITEM_UNITS,
			required: true,
			default: 'dona',
		},
		quantity: {
			type: Number,
			required: true,
			min: 1,
		},
	},
	{ _id: false },
)

const buildRequestNumber = () => {
	const now = new Date()
	const stamp = now.toISOString().replace(/\D/g, '').slice(0, 14)
	const random = Math.floor(100 + Math.random() * 900)
	return `XR-${stamp}-${random}`
}

const purchaseRequestSchema = new mongoose.Schema(
	{
		requestNumber: {
			type: String,
			required: true,
			trim: true,
			default: buildRequestNumber,
		},
		selectedUsers: {
			type: String,
			required: true,
			default: '[]',
		},
		selectedUserNames: {
			type: String,
			required: true,
			trim: true,
		},
		comment: {
			type: String,
			required: true,
			trim: true,
		},
		items: {
			type: String,
			required: true,
			default: '[]',
		},
		itemsSummary: {
			type: String,
			required: true,
			trim: true,
		},
		status: {
			type: String,
			enum: REQUEST_STATUSES,
			default: 'ko‘rilmoqda',
			required: true,
		},
		currentStage: {
			type: String,
			enum: APPROVAL_STAGES,
			default: 'tuzilmalar',
			required: true,
		},
		structureApprovals: {
			type: String,
			required: true,
			default: '[]',
		},
		approvalHistory: {
			type: String,
			required: true,
			default: '[]',
		},
		approvalSummary: {
			type: String,
			default: '',
			trim: true,
		},
		lastComment: {
			type: String,
			default: '',
			trim: true,
		},
		approver: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
			default: null,
		},
		approverName: {
			type: String,
			default: '',
			trim: true,
		},
		buyerOrderData: {
			type: String,
			required: true,
			default: '{}',
		},
		buyerOrderSummary: {
			type: String,
			default: '',
			trim: true,
		},
		warehouseDispatchData: {
			type: String,
			required: true,
			default: '{}',
		},
		warehouseDispatchSummary: {
			type: String,
			default: '',
			trim: true,
		},
		stockOutHistoryRecords: {
			type: String,
			required: true,
			default: '[]',
		},
		createdBy: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
			required: true,
		},
	},
	{
		timestamps: true,
	},
)

purchaseRequestSchema.pre('validate', function setDefaultStatus() {
	if (!this.requestNumber) {
		this.requestNumber = buildRequestNumber()
	}

	if (!this.status) {
		this.status = 'ko‘rilmoqda'
	}

	if (!this.currentStage) {
		this.currentStage = 'tuzilmalar'
	}

	if (!this.selectedUsers) {
		this.selectedUsers = '[]'
	}

	if (!this.items) {
		this.items = '[]'
	}

	if (!this.structureApprovals) {
		this.structureApprovals = '[]'
	}

	if (!this.approvalHistory) {
		this.approvalHistory = '[]'
	}

	if (!this.buyerOrderData) {
		this.buyerOrderData = '{}'
	}

	if (!this.warehouseDispatchData) {
		this.warehouseDispatchData = '{}'
	}

	if (!this.stockOutHistoryRecords) {
		this.stockOutHistoryRecords = '[]'
	}
})

const PurchaseRequest =
	mongoose.models.PurchaseRequest ||
	mongoose.model('PurchaseRequest', purchaseRequestSchema)

export { APPROVAL_STAGES, DECISION_STATUSES, ITEM_UNITS, REQUEST_STATUSES }
export default PurchaseRequest

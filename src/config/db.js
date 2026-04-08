import { MongoMemoryServer } from 'mongodb-memory-server'
import mongoose from 'mongoose'

const DEFAULT_LOCAL_MONGODB_URI = 'mongodb://127.0.0.1:27017/zaxira_test'

let memoryServer

async function connectWithMongo(uri) {
	await mongoose.connect(uri, {
		serverSelectionTimeoutMS: 5000,
	})

	return { uri, memory: false }
}

async function connectDatabase() {
	const externalUri = process.env.MONGODB_URI?.trim()

	if (externalUri) {
		const connection = await connectWithMongo(externalUri)
		console.log(`MongoDB ulandi: ${externalUri}`)
		return connection
	}

	try {
		const connection = await connectWithMongo(DEFAULT_LOCAL_MONGODB_URI)
		console.log(`Mahalliy MongoDB ulandi: ${DEFAULT_LOCAL_MONGODB_URI}`)
		return connection
	} catch {
		console.log(
			'Mahalliy MongoDB topilmadi, vaqtinchalik MongoDB ishga tushirilmoqda.',
		)
	}

	memoryServer = await MongoMemoryServer.create({
		instance: {
			dbName: 'zaxira_test',
		},
	})

	const uri = memoryServer.getUri()
	await mongoose.connect(uri)
	console.log('Vaqtinchalik MongoDB ishga tushdi.')

	return { uri, memory: true }
}

async function disconnectDatabase() {
	await mongoose.disconnect()

	if (memoryServer) {
		await memoryServer.stop()
	}
}

export { connectDatabase, disconnectDatabase }

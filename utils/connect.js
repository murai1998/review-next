import mongoose from 'mongoose'
const connection = {}

async function connect() {
if(connection.isConnected) {
    return 
}
const db = await mongoose.connect(process.env.MONGODB_URI, 
    {useNewUrlParser: true, useUnifiedTopology: true})
connection.isConnected = db.connection[0].readyState
console.log('connection', connection.isConnected)
}

export default connect
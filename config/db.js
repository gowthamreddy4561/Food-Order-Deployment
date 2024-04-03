import mongoose from "mongoose"
const uri = "mongodb+srv://f20202349:jA76HChtWSnWjXpV@cluster0.71663qu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

async function connectDB(){
    try {
   
        const conn= await mongoose.connect(uri,{ useNewUrlParser: true, useUnifiedTopology: true })
        console.log(`connected to mongo db ${conn.connection.host}`)
    } catch (error) {
        console.log(`my error gow ${error}`)
    }
}

export default connectDB;

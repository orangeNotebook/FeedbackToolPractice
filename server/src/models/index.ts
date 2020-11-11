import mongoose from "mongoose"
import Behaviours from "./behaviours"

const connectDb = () => {
    return mongoose.connect("mongodb://localhost:27017/feedback-tool",{
        useNewUrlParser: true,
        useUnifiedTopology: true,        
    })
}

const models = { Behaviours }

export { connectDb }

export default models
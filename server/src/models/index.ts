import mongoose from "mongoose"
import Behaviours from "./behaviours"
import BehaviourFeedback from "./behaviourFeedback"

const connectDb = () => {
    return mongoose.connect("mongodb://localhost:27017/feedback-tool",{
        useNewUrlParser: true,
        useUnifiedTopology: true,        
    })
}

const models = { Behaviours, BehaviourFeedback }

export { connectDb }

export default models
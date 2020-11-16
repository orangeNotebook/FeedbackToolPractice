import mongoose, { Document } from "mongoose"

export interface IBehaviourFeedback extends Document {
  behaviour: number;
  userFrom: string;
  userTo: string;
  date: string;
  feedback: string;
}

const behaviourFeedbackSchema = new mongoose.Schema(
  {
    behaviour: {
      type: Number,
      unique: false,
      require: true
    },
    userFrom: {
      type: String,
      unique: false,
      require: true
    },
    userTo: {
      type: String,
      unique: false,
      require: true
    },
    date: {
      type: String,
      unique: false,
      require: true
    },
    feedback: {
      type: String,
      unique: false,
      require: true
    },

  },
  {
    timestamps: true
  }
)

const BehaviourFeedback = mongoose.model<IBehaviourFeedback>("BehaviourFeedback", behaviourFeedbackSchema)

export default BehaviourFeedback
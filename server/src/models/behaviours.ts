import mongoose, { Document } from "mongoose"

export interface IBehaviour extends Document {
  withinTeam1: string;
  withinTeam2: string;
  withinTeam3: string;
  withinTD1: string;
  withinTD2: string;
  withinTD3: string;
  outsideTD1: string;
  outsideTD2: string;
  outsideTD3: string;
}

const behaviourSchema = new mongoose.Schema(
  {
    withinTeam1: {
      type: String,
      unique: false,
      require: true
    },
    withinTeam2: {
      type: String,
      unique: false,
      require: true
    },
    withinTeam3: {
      type: String,
      unique: false,
      require: true
    },
    withinTD1: {
      type: String,
      unique: false,
      require: true
    },
    withinTD2: {
      type: String,
      unique: false,
      require: true
    },
    withinTD3: {
      type: String,
      unique: false,
      require: true
    },
    outsideTD1: {
      type: String,
      unique: false,
      require: true
    },
    outsideTD2: {
      type: String,
      unique: false,
      require: true
    },
    outsideTD3: {
      type: String,
      unique: false,
      require: true
    },

  },
  {
    timestamps: true
  }
)

const Behaviour = mongoose.model<IBehaviour>("Behaviour", behaviourSchema)

export default Behaviour
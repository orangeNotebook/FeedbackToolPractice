// export default class Behaviours {
//     id: number
//     withinTeam1: string
//     withinTeam2: string
//     withinTeam3: string
//     withinTD1: string
//     withinTD2: string
//     withinTD3: string
//     outsideTD1: string
//     outsideTD2: string
//     outsideTD3: string

//   constructor(
//     id: number,
//     withinTeam1: string,
//     withinTeam2: string,
//     withinTeam3: string,
//     withinTD1: string,
//     withinTD2: string,
//     withinTD3: string,
//     outsideTD1: string,
//     outsideTD2: string,
//     outsideTD3: string
//   ) {
//     this.id = id
//     this.withinTeam1 = withinTeam1
//     this.withinTeam2 = withinTeam2
//     this.withinTeam3 = withinTeam3
//     this.withinTD1 = withinTD1
//     this.withinTD2 = withinTD2
//     this.withinTD3 = withinTD3
//     this.outsideTD1 = outsideTD1
//     this.outsideTD2 = outsideTD2
//     this.outsideTD3 = outsideTD3
//   }

//   returnString() :string {
//     return `
//     Team Behaviour 1: ${this.withinTeam1}
//     Team Behaviour 2: ${this.withinTeam2}
//     Team Behaviour 3: ${this.withinTeam3}
//     TD Behaviour 1: ${this.withinTD1}
//     TD Behaviour 2: ${this.withinTD2}
//     TD Behaviour 3: ${this.withinTD3}
//     Outside TD Behaviour 1: ${this.outsideTD1}
//     Outside TD Behaviour 2: ${this.outsideTD2}
//     Outside TD Behaviour 3: ${this.outsideTD3}
//     `
//   }

//   returnObject() :object {
//     return {id: this.id, 
//       withinTeam1: this.withinTeam1, 
//       withinTeam2: this.withinTeam2, 
//       withinTeam3: this.withinTeam3,
//       withinTD1: this.withinTD1,
//       withinTD2: this.withinTD2,
//       withinTD3: this.withinTD3,
//       outsideTD1: this.outsideTD1,
//       outsideTD2: this.outsideTD2,
//       outsideTD3: this.outsideTD3
//      }
//   }
// }

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
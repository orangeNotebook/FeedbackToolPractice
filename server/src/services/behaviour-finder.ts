import models from "../models"
import { IBehaviour } from "../models/behaviours"

export default class BehaviourFinder {
  team: IBehaviour[]

  constructor() {
    models.Behaviours.find({}, (err, behaviourItems) => {
      // console.log(behaviourItems)
      this.team = behaviourItems
    })
  }

}
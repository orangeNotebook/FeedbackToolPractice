import models from "../models"
import { IBehaviourFeedback } from "../models/behaviourFeedback"

export default class BehaviourFeedbackFinder {
  team: IBehaviourFeedback[]

  constructor() {
    models.BehaviourFeedback.find({}, (err, behaviourFeedbackItems) => {
      // console.log(behaviourItems)
      this.team = behaviourFeedbackItems
    })
  }

}
import Behaviours from "../models/behaviours"

export default function getData() :object {
  const deliveryGroup = new Behaviours(1,
    "Proactively monitor CM capacity through transparent planning of our work and horizon scanning to anticipate demand so that we can flag up resourcing concerns before they arise and ensure change roles are sufficiently provided on projects", 
    "Support my team members with empathy, building an environment of psychological safety where it is safe to speak out and to be challenged so that we build a team of trusted colleagues where we can experiment with new ideas and grow both as individuals and a team", 
    "Intentionally nurture a growth mindset within our team to improve our decision making ability, willingness to risk failure and enthusiasm for new experience so that we engender more creativity in our approach to resolving customer issues", 
    "Seek regular, structured feedback from all TD teams on their understanding and integration of good CM practice in their day to day work so that we can adjust our promotion of CM practice appropriately", 
    "Drive the establishment of a 'golden thread' for TD showing how each team contributes to change projects so that the sense of belonging and involvement is shared through all of TD and a better understanding of how we all fit together is established", 
    "Promote the benefits of growth versus fixed mindset within TD to encourage better inclusion, listening, reflectivness and more optimism so that the division has a greater understanding of and belief in their worth, and performance improves as a result", 
    "Have a Continuous Improvement approach to the CM framework by utilising lessons learned data and holding timely interviews with stakeholders to evaluate our change practies so that we ensure feedback influences best practice when it comes to change management throughout the agency", 
    "Ensure we speak positvely and knowledgeably about the TD team outside of the division and be ready to explain this simply to anyone who asks so that we become efficient advocates for the TD division", 
    "Ensure that the benefits of having a growth mindset as opposed to a fixed mindset are understood in the agency so that staff are more open and flexible and change is received better")
  
//   const teamBehaviours = [
//     deliveryGroup
//   ];

//   let BehaviourObjects = {};
//   for (let i = 0; i < teamBehaviours.length; i++) {
//     let BehaviourObjects = teamBehaviours[i];
//     BehaviourObjects[BehaviourObjects.id] = Behaviours;
//   }

  return deliveryGroup.returnObject();
}

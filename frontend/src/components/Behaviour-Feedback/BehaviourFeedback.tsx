import React, { Component } from "react";
import Behaviours from "../Behaviours/Behaviours"
import { BrowserRouter, Route, Switch } from 'react-router-dom';


/////////////////////////////////This shit no work bro///////////////////////////

// class BehaviourFeedback extends Component {
//   state = {
//     behaviour: this.props
//     }





//   render() {
//     return (
//       <div>
//         <p>
//             Behaviour: {this.state.behaviour}
//         </p>
//       </div>
//     );
//   }
// }


////////////////////////////////////////////////////////////////////////////////

interface IBehaviour {
  behaviour: string
}


const BehaviourFeedback: React.FC<IBehaviour> = (props) => {
    return (
       <div>
        <p>
            Behaviour: {props.behaviour}
        </p>
      </div>
    );
}
 
export default BehaviourFeedback;
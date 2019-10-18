import React from 'react';

class BoilingVerdict extends Component() {
   constructor (props) {
      super (props)
   }

   render () {
      if (props.celsius >= 100) {
         return <p>The water would boil.</p>;
       }
       return <p>The water would not boil.</p>;
     }
    
   }
   
 export default BoilingVerdict
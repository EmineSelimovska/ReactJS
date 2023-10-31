import { useState } from "react";

export default function Timer(props){
   const [state, setState] = useState();
  
   
    let time = 0;
     
   
    return(
        <div>
            <h3>Timer</h3>

            <p>{time}</p>
        </div>

    )
}
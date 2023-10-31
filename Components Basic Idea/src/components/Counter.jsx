import { useState } from "react"

export default function Counter(props){
    const [count, setCount] = useState(0);

    const onIncrementClick = () => {
        setCount(count + 1)
    }


    const clearCounter = () => {
        setCount(0);
    }

   // if(count < 0){
    //    return (
      //    <p>Invalid count!</p>
      //  )
  //  }
   
  let message = null;

  switch(count) {
    case 1:
        message = 'First blood';
        break;
    case 2:
        message = 'Double kill';
         break;
     case 3:
        message = 'Tripple kill';
        break;
    case 4:
        message = 'Multi kill';
         break;
     case 5:
         message = 'Good like';
         break;

     default:
        message = 'M-m-m-onster kill';
        
  }

  
    return(
        <div>
            <h1>Counter</h1>
            {count < 0 
            ? <p>Ivalid count!</p> 
            : <p>Valid count!</p>}

            {count == 0 && <p>Please start incrementing!</p>} 
                
                <h4>{message}</h4>
           
            <p>Count: {count}</p>
            <button onClick={onIncrementClick}> + </button>
            <button onClick={clearCounter}> clear </button>
            <button disabled={count < 0} onClick={() => setCount(count - 1)}> - </button>

        </div>
    )
}
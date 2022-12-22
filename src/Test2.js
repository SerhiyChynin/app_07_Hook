import React, {useState, useEffect} from "react";



function Test2(props) {
    console.log('setState');
    const [s1, setS1] = useState(props.arg); 
      const buttonHandler = () => {
        console.log('Handler');
        let val = s1;
        val++;
        setS1(val);
        
    }
    useEffect(() => {
        console.log('Effect');
    }) 
    console.log('render_1');
    
    return (

        <>
            {console.log('render_2')}
            <div>
                <button onClick = {buttonHandler}>Push</button>
                <div>
                      {s1}    
                </div>
            </div>
            </>
    )
}

export default Test2;
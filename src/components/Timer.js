import React from "react";
import "../styles/Timer.css";

const Timer = () => { 
    const [counter, setCounter] = React.useState(60);

    React.useEffect(() => {
        counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
      }, [counter]);

      if (counter === 0) {
          alert("Temps écoulé")
      }

    return (
        <div className="holder-timer">
            <div className="timer">{counter}</div>
        </div>
    );
}

export default Timer


import React  from "react";
import "../App.css"

export  class Timer extends React.Component{
//    constructor (props)
//    super(props)
    state ={
        minutes: 15,
        seconds: 0,
    }
    componentDidMount(){
        this.myInterval = setInterval(()=> {
            const { seconds, minutes} = this.state

            if (seconds  < 10) {
                this.setState(({seconds}) => ({
                    seconds:"0" + seconds -1
                }))
            }
            if (seconds ===0) {
                if (minutes === 0) {
                    clearInterval(this.myInterval)
                }
                else{
                    this.setState(({minutes}) => ({
                        minutes: minutes  -1,
                        seconds: 59
                    }))
                }
            }           
        }, 1000)
    }
   
render (){
   const {minutes, seconds} = this.state
    return(
        <div>
        <div className="timer">{minutes}:{seconds}</div>
        <div>
            <button>Start</button>
            <button>reset</button>
        </div>
        </div>
    )
}
}

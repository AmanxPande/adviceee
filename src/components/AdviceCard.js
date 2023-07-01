import React  from 'react'
import divDesk from "../images/pattern-divider-desktop.svg"
import divMob from "../images/pattern-divider-mobile.svg"

import diceIcon from "../images/icon-dice.svg"
import axios from 'axios'



const AdviceCard = () => {

    const [advice, setAdvice] = React.useState("")
    const getAdvice = async() => {
        const response = await axios.get("https://api.adviceslip.com/advice")
        const advice = await response.data.slip;
        setAdvice(advice)
    }

    React.useEffect(()=> {
        getAdvice()
    },[])

  return (
    
    <div className='adviceCard'>
      
     <p>Advice #{advice.id}</p>
     <h1>"{advice.advice}"</h1>
     <img src={divDesk} alt='img1' className='divider-desktop' />
     <img src={divMob} alt='img1' className='divider-mobile' />
     <div className='diceImg' onClick={getAdvice} >
        <img src={diceIcon} alt='img2' />
     </div>
   

    </div>
  )
}

export default AdviceCard

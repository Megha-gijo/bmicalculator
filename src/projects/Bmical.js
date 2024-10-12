import React, {useState} from 'react'

const Bmical = () => {
 const [weight, setweight] = useState()
 const [height, setheight] = useState()
 const [bmi, setbmi] = useState('')
 const [msg, setmsg] = useState('')

 let calBmi = (e)=>{
  e.preventDefault()
 
 if(weight==0 || height ==0){
  alert("Please enter your details")
 } else{
  let formula = (weight /( height * height) * 703)
  setbmi(formula.toFixed(1))

  if(formula < 25){
    setmsg('You are Under Weight')
  } else if(formula >= 25 && formula < 30){

  
    setmsg('You are Healthy Weight')
  }else{
    setmsg('You are Over Weight')
  }
 }

 }
 let reload = ()=>{
  window.location.reload()
 }
  return (
    <>
    <div className='app'>
    <div className='container'>
      <h2 className='center'>BODY MASS INDEX(kg/m)</h2>

     <form onSubmit={calBmi}>
      <div>
        <label>Enter Weight (lb)</label>
      <input className='bmi-input' type='number' placeholder='0' value={weight} onChange={(e)=>setweight(e.target.value)}/>
      </div>
      <div>
        <label>Enter Height (in)</label>
      <input className='bmi-input' type='number' placeholder='0' value={height} onChange={(e)=>setheight(e.target.value)}/>
      </div>

      <div>
        <button className='btn' type='submit'>Submit</button>
        <button className='btn btn-reload' type='submit' onClick={reload}>Reload</button>
      </div>
      </form> 
      <div>
        <h3>Your BMI Is:{bmi} </h3>
        <p className='p-msg'>{msg}</p>
      </div>

    </div>
    </div>
    

   
    </>
  )
}

export default Bmical

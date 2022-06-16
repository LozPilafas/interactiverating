
import star from './images/icon-star.svg'
import {useState} from 'react'
import {SubmitedPage} from './Submited'


function App() {
  const [rating,setRating]=useState(0);
  const [submited,setSubmited]=useState(false);

  if(submited )
  {
    return(
      <SubmitedPage rating={rating}/>
    )
  }

  return (
    <div className="container-box">
    <img src={star} alt="star" className="star"/>
    <h1>How did we do?</h1>
    <p>
      Please let us know how we did with your support request. All feedback is appreciated
      to help us improve our offering!</p>
      <div className="rating-button-group
      ">
    <div className={rating===1?"rating-button-selected":"rating-button"} onClick={()=>setRating(1)}>
      <span>1</span></div> 
      <div className={rating===2?"rating-button-selected":"rating-button"}  onClick={()=>setRating(2)}>
        <span>2</span></div> 
        <div className={rating===3?"rating-button-selected":"rating-button"}  onClick={()=>setRating(3)}>
          <span>3</span></div> 
          <div className={rating===4?"rating-button-selected":"rating-button"}  onClick={()=>setRating(4)}>
            <span>4</span></div> 
            <div className={rating===5?"rating-button-selected":"rating-button"}  onClick={()=>setRating(5)}>
              <span>5</span></div> 
</div>
              <button onClick={()=>setSubmited(true)} disabled={rating?false:true} >SUBMIT</button>
              </div>


  );
}

export default App;

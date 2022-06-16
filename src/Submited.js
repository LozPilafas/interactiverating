
import thankyouimage from './images/illustration-thank-you.svg';

export function SubmitedPage(props)
{



    return(
        <>
        <div className="container-box-thankyou">
        <img src={thankyouimage} alt="star" />

    <div className="final-rating">You selected {props.rating} out of 5</div>
    <h1>Thank you!</h1>
    <p>
    We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
     </div>
    
        </>
    )
}
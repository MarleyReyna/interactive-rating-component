import React from 'react';
import './Thanks.scss';
import thanks from './illustration-thank-you.svg';

const Thanks = (props) => {

    const ratingValue = props.ratingValue;

    return (
        <main className='thanks-page'>
            <img src={thanks} alt='' aria-hidden='true'/>
            <p className='rating'>
                You selected {ratingValue} out of 5
            </p>
            <h1>
                Thank you!
            </h1>
            <p>
                We appreciate you taking the 
                time to give a rating. If you ever 
                need more support, don’t hesitate 
                to get in touch!
            </p>
        </main>
    );
}
 
export default Thanks;
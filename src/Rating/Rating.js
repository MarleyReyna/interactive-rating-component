import React from 'react';
import './Rating.scss';
import star from './icon-star.svg';
import {Link} from 'react-router-dom';

const Rating = (props) => {

    const ratingValue = props.ratingValue;
    const setRatingValue = props.setRatingValue;

    const buttonValues = [
        '1', '2', '3', '4', '5'
    ]

    const handleCLick = (item) =>{
        var element = document.getElementById(item);
        const listItems = document.getElementsByClassName('list-item')
        for (let i = 0; i < listItems.length; i++){
            if(listItems[i].classList.contains('active')){
                listItems[i].classList.remove('active');
            }
        };
        element.classList.add("active");
        setRatingValue(item);
        console.log(ratingValue);
    }

    const handleSubmit = () =>{
        const errorMessage = document.getElementById('error')
        if(ratingValue === ''){
            errorMessage.classList.add('live');
        }
    }

    return (
        <main className='rating-page'>
            <div>
                <img src={star} alt='' aria-hidden='true'/>
            </div>
            <h1>How did we do?</h1>
            <p>
                Please let us know how we 
                did with your support request. 
                All feedback is appreciated to 
                help us improve our offering!
            </p>
            <ul className='rating-container'>
                {buttonValues.map((item, index) =>{
                    return(
                    <li key={index} className='list-item' id={item}>
                        <button onClick={() => handleCLick(item)}>{item}</button>
                    </li>
                    )
                })}
            </ul>
            <Link to={ratingValue==='' ? '/' : '/thanks'} onClick={handleSubmit} className='submit-button'>
                Submit
            </Link>
            <p className='error' id='error'>
                You did not select a rating
            </p>
        </main>
    );
}
 
export default Rating;
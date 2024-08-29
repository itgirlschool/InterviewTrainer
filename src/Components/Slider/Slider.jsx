import './Slider.scss';
import Card from '../Card/Card.jsx';
import { useState,useEffect } from 'react';
import { tests } from './tests.js';

export default function Slider() {

    
    const [count, setCount] = useState(0);
    
    
   




   
    return (
        <div className='slider-container'>
            <div className='slider-wrapper'>
                <div className='inner-wrapper'>
                    <div className='amount'>
                        <div className='amounts'>{count + 1}/{tests.length}</div>
                    </div>
                </div>
            </div>
                    <Card
                        item={tests[count]}
                        count={count}
                        setCount={setCount}
                        tests={tests}  
                    />
        </div>
    )
}

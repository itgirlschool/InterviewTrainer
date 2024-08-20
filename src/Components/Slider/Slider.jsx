import './Slider.scss';
import Card from '../Card/Card.jsx';
import { useState,useEffect } from 'react';
import { tests } from './tests.js';

export default function Slider() {

    
    const [count, setCount] = useState(0);
    const [testEnd, setTestEnd] = useState(false);
    
   
   
    return (
        <div className='slider-container'>
            <div className='slider-wrapper'>
                <div className='inner-wrapper'>
                    <div className='amount'>
                        <div className='amounts'>{count + 1}/{tests.length}</div>
                    </div>
                    <div className='themes'>
                        <select name="select" className='select-variants'>
                            <option
                                value="HTML"
                                defaultValue={0}
                                className='option-variant'>HTML</option>
                            <option
                                value="CSS"
                                className='option-variant'>CSS</option>
                            <option
                                value="JavaScript"
                                className='option-variant'>JavaScript</option>
                            <option
                                value="React"
                                className='option-variant'>React</option>
                        </select>

                    </div>
                </div>
            </div>
            { testEnd ?
                    <div className='endTest'>Вы молодцы!!!!</div>
                    :
                    <Card
                        item={tests[count]}
                        count={count}
                        setCount={setCount}
                        setTestEnd={setTestEnd}
                        tests={tests}
                        
                    />


            }

        </div>
    )
}

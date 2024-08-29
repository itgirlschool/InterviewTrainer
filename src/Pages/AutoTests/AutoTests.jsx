
import Slider from '../../Components/Slider/Slider.jsx'
import { NavLink } from "react-router-dom";
import './AutoTests.scss'

export default function AutoTests() {

    return (
        <div className='container-autotests'>
           <div className='title-autotests'>
            <NavLink to="#" >Вернуться к градации</NavLink>
            </div>
            <Slider />
        </div>
    )
}
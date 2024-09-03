
import Slider from '../../Components/Slider/Slider.jsx'
import { NavLink } from "react-router-dom";
import './AutoTests.scss'

export default function AutoTests() {

  return (
    <div className='autotests'>
      <NavLink className='autotests__title' to="#" >Вернуться к градации</NavLink>
      <Slider />
    </div>
  )
}
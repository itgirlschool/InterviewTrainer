import Card from '../../Components/Card/Card'
import './AutoTests.scss'

export default function AutoTests(){

    return(
        <div className='container-autotests'>
             <div className='title-autotests'>Градация 1 &gt;
                <span className='title-tests'>Тесты</span></div>

            {/*Обертка для карточки*/}
            <div className='card-wrapper'>
              
              <Card/>    
            
            </div>
        
        </div>
    )
}
import './Card.scss'

export default function Card() {

    return (
        <div className='card__container'>
            <div className='card-wrapper'>
                <div className='card-question'>
                    <h3 className='question'>Lorem ipsum dolor, repudiandae sit veritatis aliquam ccusamus?</h3>
                </div>
                <form className='card-form'>
                    <div className='answers-list'>
                        {/*Ответ один*/}
                        <div className='answer'>
                            <input type="radio" name="first-answer" id="first-answer" hidden />
                            <label for="first-answer" className="radio-style"></label>
                            <label for="first-answer" className='answer-text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</label>
                        </div>
                        {/*Ответ два*/}
                        <div className='answer'>
                            <input type="radio" name="first-answer" id="second-answer" hidden/>
                            <label for="second-answer" className="radio-style"></label>
                            <label for="first-answer" className='answer-text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</label>
                        </div>
                        {/*Ответ три*/}
                        <div className='answer'>
                            <input type="radio" name="first-answer" id="third-answer" hidden/>
                            <label for="third-answer" className="radio-style"></label>
                            <label for="first-answer" className='answer-text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.loremLorem </label>
                        </div>
                        {/*Ответ четыре*/}
                        <div className='answer'>
                            <input type="radio" name="first-answer" id="fourth-answer" hidden/>
                            <label for="fourth-answer" className="radio-style"></label>
                            <label for="first-answer" className='answer-text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</label>
                        </div>
                    </div>
                    <div className='card-button'>
                        <button className='card-btn'>Отправить</button>
                    </div>

                </form>
            </div>

        </div>
    )
}
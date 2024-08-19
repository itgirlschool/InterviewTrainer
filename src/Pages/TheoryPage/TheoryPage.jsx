import "./TheoryPage.scss";
import Theory from "../../Components/Theory/Theory";
import arrow2 from "../../assets/images/arrow2.svg";

export default function TheoryPage() {
  return (
    <div className="theory__page">
      <p className="grad__header">
        <span className="pink__text">Градация 1</span>
        <img src={arrow2} className="header__img" />
        Теория
      </p>
      <div className="theory__container">
        <div className="theory__list"></div>
        <Theory />
      </div>
    </div>
  );
}

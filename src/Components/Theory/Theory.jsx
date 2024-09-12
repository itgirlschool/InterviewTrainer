import "./Theory.scss";
import { useEffect, useState, useRef } from "react";
import flag from "../../assets/images/flag_done.svg";
import arrow1 from "../../assets/images/arrow1.svg";
import cat from "../../assets/images/theory_cat.png";
import star from "../../assets/images/star.svg";
import GetPicture from "./GetPicture";

export default function Theory({
  quest,
  answer,
  theme,
  image,
  example,
  count,
  total,
  setCount,
  theoryId,
  disabled,
  setFlagDone,
  setLastId,
} = props) {
  const [done, setDone] = useState(false);
  const [prev, setPrev] = useState(false);
  const [id, setId] = useState("");

  const myRef = useRef();
  const scrollCallback = () => {
    myRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    setId(theoryId);
  });

  useEffect(() => {
    scrollCallback();
    setLastId(id);
    setDone(false);
  }, [done]);

  useEffect(() => {
    scrollCallback();
    setPrev(false);
  }, [prev]);

  const handleDone = () => {
    if (count <= total) {
      setCount(count + 1);
      setFlagDone(id);
    } else {
      setCount(1);
    }
    setDone(true);
  };

  const handlePrev = () => {
    if (count > 1) {
      setCount(count - 1);
      setPrev(true);
    }
  };

  return (
    <div className="theory__window">
      <div className="theory__scroll" ref={myRef}>
        <p className="theory__quest">{quest}</p>
        <p className="theory__theme">{theme}</p>
        <article className="theory__article">
          <section className="theory__answer">
            {answer}
          </section>
          <section
            className={
              example ? "theory__example" : "hidden"
            }
          >
            {example}
          </section>
          <div className="theory__picture">
            {image.map((item, index) => {
              return <GetPicture link={item} key={index} />;
            })}
          </div>
        </article>
        <div className="theory__control">
          <button
            onClick={handlePrev}
            className="theory__befor"
          >
            <img src={arrow1} className="theory__img" />
            <p>Предыдущее</p>
          </button>
          <div className="theory__control__right">
            <button
              onClick={handleDone}
              className={"theory__done"}
            >
              <img src={flag} className="theory__img" />
              <p>Я прочитала</p>
            </button>
            <div className="theory__count">
              {count}/{total}
            </div>
          </div>
          <div className="theory__cat">
            <img className="theory__cat__image" src={cat} />
          </div>
        </div>
      </div>
      <div className="theory__star">
        <img src={star} />
      </div>
    </div>
  );
}

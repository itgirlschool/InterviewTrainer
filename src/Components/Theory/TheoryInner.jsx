import "./Theory.scss";
import { useEffect, useState } from "react";

function TheoryInner({
  theme,
  title,
  answer,
  codeexample,
  images,
}) {
  const [theoryTheme, setTheoryTheme] = useState("");
  const [theoryImages, setTheoryImages] = useState([]);

  useEffect(() => {
    switch (theme) {
      case "w":
        setTheoryTheme("Web-разработка");
        break;
      case "h":
        setTheoryTheme("HTML");
        break;
      case "c":
        setTheoryTheme("CSS");
        break;
      case "j":
        setTheoryTheme("JavaScript");
        break;
      case "jib":
        setTheoryTheme("JS in Browser");
        break;
      case "asyncjs":
        setTheoryTheme("Async JS");
        break;
      case "webh":
        setTheoryTheme("WEB заголовки");
        break;
      case "es":
        setTheoryTheme("ECMAScript");
        break;
      case "r":
        setTheoryTheme("React");
        break;
      case "sm":
        setTheoryTheme("State Management");
        break;
    }
  }, [theme]);

  useEffect(() => {
    if (images && Array.isArray(images)) {
      setTheoryImages(images);
    }
  }, [images]);

  return (
    <div className="theory__inner">
      <h2 className="theory__title">{title}</h2>
      <p className="theory__theme">{theoryTheme}</p>
      <article className="theory__article">
        <section className="theory__answer">
          {answer}
        </section>
        <section
          className={
            codeexample != "" ? "theory__example" : "hidden"
          }
        >
          {codeexample}
        </section>
        {theoryImages.length === 0 ? (
          ""
        ) : (
          <div className="theory__picture">
            {theoryImages.map((image, index) => (
              <img
                className="picture_item"
                src={image}
                alt={`Image ${index}`}
                key={index}
              />
            ))}
          </div>
        )}
      </article>
    </div>
  );
}
export default TheoryInner;

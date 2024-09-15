import "./Theory.scss";
import { useEffect, useState, useRef } from "react";
import star from "../../assets/images/star.svg";
import TheoryInner from "./TheoryInner";
import TheoryPagination from "./TheoryPagination";

function Theory({
  theme,
  title,
  answer,
  codeexample,
  images,
}) {
  return (
    <div className="theory__container">
      <img
        className="bg-image__star"
        src={star}
        alt="star_video"
      />
      <TheoryInner
        theme={theme}
        title={title}
        answer={answer}
        codeexample={codeexample}
        images={images}
      />
      <TheoryPagination />
    </div>
  );
}

export default Theory;

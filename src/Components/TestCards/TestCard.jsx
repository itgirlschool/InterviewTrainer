import "./Card.scss";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Test from "./Test/Test";

export default function TestCard() {
  const tests = useSelector(state => state.autoTests.tests);
  const { id } = useParams();

  return (
    <div>
      {tests.map(test => (
        <Test key={test.id} test={test} isVisible={Number(id) === test.id} />
      ))}
    </div>
  );
}

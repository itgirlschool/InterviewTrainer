import { useParams } from "react-router-dom";
import Theory from "../../../Components/Theory/Theory";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function TheoryFirstItem() {
  const { id } = useParams();
  const data = useSelector(state => state.theoryFirst.theoryFirst);
  const status = useSelector(state => state.theoryFirst.status);
  const error = useSelector(state => state.theoryFirst.error);
  const [theoryItem, setTheoryItem] = useState({});

  useEffect(() => {
    if (data && id) {
      const newTheoryItem = data.find(item => item.id === id);
      setTheoryItem(prevTheoryItem => newTheoryItem);
    }
  }, [data, id]);

  if (status === "loading") return <div>Загрузка раздела с теорией...</div>;

  if (status === "failed" || error)
    return <div>Невозможно загрузить раздел с теорией...</div>;
  if (!data) return <div>Раздел с теорией не найден</div>;

  return (
    <Theory
      title={theoryItem.title}
      theme={theoryItem.theme}
      answer={theoryItem.answer}
      codeexample={theoryItem.codeexample}
      images={theoryItem.images}
    />
  );
}

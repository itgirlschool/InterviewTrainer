import { Link } from "react-router-dom";

export default function VideoFirst() {
  return (
    <>
      <Link to="/gradingfirst">Градация 1</Link>
      <span> {">"} Видеоуроки</span>
      <div>Навигация по видеоурокам</div>
      <div>Блок для встраивания плейера</div>
    </>
  );
}

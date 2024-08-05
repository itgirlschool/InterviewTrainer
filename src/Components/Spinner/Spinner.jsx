import "./Spinner.scss"


export default function Spinner() {
    return (
      <div className="spinner-overlay">
        <div className="spinner">
          <div className="spinner__circle"></div>
        </div>
      </div>
    );
  }
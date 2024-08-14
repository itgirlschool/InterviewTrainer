import "./CodeTrainer.scss";
import tasks from "../../data/tasks.json";

export function CodeTrainer() {

    const firstTask = tasks.length > 0 ? tasks[0].task : ""; 

    return (
        <>
    <h1>Code Trainer</h1>
    <div className="container">
        <div className="task__container">
            <div className="task__text">{firstTask}</div>
        </div>
        <textarea className="textarea" name="solution" id="solution"></textarea>
    </div>
    </> );
}


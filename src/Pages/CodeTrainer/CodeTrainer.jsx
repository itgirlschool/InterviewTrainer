import "./CodeTrainer.scss";
import tasks from "../../data/tasks.json";

export function CodeTrainer() {

    const firstTask = tasks.length > 0 ? tasks[0].task : ""; 

    return (
        <>
    <h1>Code Trainer</h1>
    <textarea name="task" id="task" cols="30" rows="10" value={firstTask}></textarea>
    </> );
}


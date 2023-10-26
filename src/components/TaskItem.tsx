import ITask from "../interfaces/ITask";

const TaskItem = ({
  task,
  index,
  deleteTask,
  setDone,
}: {
  task: ITask;
  index: number;
  deleteTask: (done: boolean, index: number) => void;
  setDone: (task: ITask, index: number) => void
}) => {
  return (
    <li className="list-item" key={index}>
      <span
        className="list-icon trash-icon"
        onClick={() => deleteTask(task.done, index)}
      >
        <img src="./assets/img/Bin.svg" alt="trash icon" />
      </span>
      <span
        className="list-icon checkbox-icon"
        onClick={() => setDone(task, index)}
      >
        <img
          src={
            task.done
              ? "./assets/img/Checkbox_On.svg"
              : "./assets/img/Checkbox_Off.svg"
          }
          alt="trash icon"
        />
      </span>
      <span className={task.done ? "label-strikethrough" : "label"}>
        {task.name}
      </span>
    </li>
  );
};

export default TaskItem;

import "./TaskList.scss";
import AllFoldersTasks from './AllFoldersTasks';

const TaskList = ({taskFolder, folders}) => {
  return taskFolder ? (
      <ul className="tasks-list">
        <h2 className={`tasks__title ${taskFolder.color}`}>{taskFolder.title}</h2>
        <hr/>
        {
          taskFolder?.tasks?.map((task) => {
            return (
                <li key={task.id} className="tasks-list__item">
                  {task.text}
                </li>
            );
          })}
      </ul>
  ) : <AllFoldersTasks folders={folders}/>
};

export default TaskList;

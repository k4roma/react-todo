import "./TaskList.scss";
import AllFoldersTasks from "./AllFoldersTasks";

const TaskList = ({activeFolder, folders}) => {
  return activeFolder ? (
      <ul className="tasks-list">
        <h2 className={`tasks__title ${activeFolder.color}`}>
          {activeFolder.title}
        </h2>
        <hr/>
        {activeFolder?.tasks?.map((task) => {
          return (
              <li key={task.id} className="tasks-list__item">
                {task.text}
              </li>
          );
        })}
      </ul>
  ) : (
      <AllFoldersTasks folders={folders}/>
  );
};

export default TaskList;

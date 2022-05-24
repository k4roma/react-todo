import "./TaskList.scss";

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
      folders.map((folder) => {
        return (
            <ul key={folder.id} className="tasks-list">
              <h2 className={`tasks__title ${folder.color}`}>{folder.title}</h2>
              <hr/>
              {folder?.tasks?.map((task) => {
                return (
                    <li key={task.id} className="tasks-list__item">
                      {task.text}
                    </li>
                );
              })}
            </ul>
        );
      })
  );
};

export default TaskList;

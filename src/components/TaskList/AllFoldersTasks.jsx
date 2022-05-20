const AllFoldersTasks = ({folders}) => {
  return folders.map((folder) => {
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
  });
};

export default AllFoldersTasks;

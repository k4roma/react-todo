import { useEffect, useState } from "react";
import { ReactComponent as ListIcon } from "./assets/icons/list.svg";
import { ReactComponent as AddIcon } from "./assets/icons/add.svg";
import FolderList from "./components/FolderList/FolderList";
import TaskList from "./components/TaskList/TaskList";
import Button from "./components/UI/Button/Button";

function App() {
  const [folders, setFolders] = useState([]);
  const [activeFolder, setActiveFolder] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/todos")
      .then((response) => response.json())
      .then((todos) => setFolders(todos));
  }, []);

  const handleFolderClick = (id) => {
    const newActiveFolder = folders.find((folder) => folder.id === id);
    setActiveFolder(newActiveFolder);
  };

  const handleShowAll = () => {
    setActiveFolder(null);
  };

  const handleDeleteFolder = (e, id, activeId) => {
    e.stopPropagation();
    const newFolders = folders.filter((folder) => {
      return folder.id !== id;
    });
    setFolders(newFolders);
    if (activeId === id) {
      setActiveFolder(null);
    }
  };

  return (
    <div className="todo-app">
      <div className="todo__sidebar">
        <Button onClick={handleShowAll} className="btn" icon={<ListIcon />}>
          Все задачи
        </Button>
        <FolderList
          folders={folders}
          activeFolder={activeFolder}
          onFolderClick={handleFolderClick}
          onDeleteClick={handleDeleteFolder}
        />
        <Button className="btn" icon={<AddIcon />}>
          Добавить список
        </Button>
      </div>
      <div className="todo__tasks">
        <TaskList activeFolder={activeFolder} folders={folders} />
      </div>
    </div>
  );
}

export default App;

import { useEffect, useState } from "react";
import { ReactComponent as ListIcon } from "./assets/icons/list.svg";
import { ReactComponent as AddIcon } from "./assets/icons/add.svg";
import FolderList from "./components/FolderList/FolderList";
import TaskList from "./components/TaskList/TaskList";
import Button from "./components/UI/Button/Button";
import AddFolderModal from "./components/AddFolderForm/AddFolderModal";

function App() {
  const [folders, setFolders] = useState([]);
  const [activeFolder, setActiveFolder] = useState(null);
  const [addFolderForm, setAddFolderForm] = useState({ isVisible: false });
  const [addFolderInputValue, setAddFolderInputValue] = useState("");

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

  const toggleAddFolder = (e) => {
    e.preventDefault();
    if (addFolderForm.isVisible === true) {
      setAddFolderForm({ isVisible: false });
      setAddFolderInputValue("");
    } else {
      setAddFolderForm({ isVisible: true });
    }
  };

  const onAddFolderInputChange = (e) => {
    e.preventDefault();
    setAddFolderInputValue(e.target.value);
  };

  const onAddFolderClick = (e) => {
    e.preventDefault();

    const newFolderData = {
      id: Date.now(),
      title: addFolderInputValue,
      color: "blue",
    };

    if (addFolderInputValue) {
      setFolders([...folders, newFolderData]);
      setAddFolderInputValue("");
      setAddFolderForm({ isVisible: false });
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
        <Button onClick={toggleAddFolder} className="btn" icon={<AddIcon />}>
          Добавить список
        </Button>
        <AddFolderModal
            onCloseClick={toggleAddFolder}
            onAddFolderClick={onAddFolderClick}
            onInputChange={onAddFolderInputChange}
            formState={addFolderForm}
            inputState={addFolderInputValue}
        />
      </div>
      <div className="todo__tasks">
        <TaskList activeFolder={activeFolder} folders={folders} />
      </div>
    </div>
  );
}

export default App;

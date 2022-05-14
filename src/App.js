import { ReactComponent as ListIcon } from "./assets/icons/list.svg";
import { ReactComponent as AddIcon } from './assets/icons/add.svg';
import FolderList from './components/FolderList/FolderList';

const folderList = [
  {
    title: "Покупки",
    color: "#42B883",
  },
  {
    title: "Фронтенд",
    color: "#64C4ED",
  },
  {
    title: "Фильмы",
    color: "#FFBBCC",
  },
  {
    title: "Книги",
    color: "#B6E6BD",
  },
  {
    title: "Личное",
    color: "#C9D1D3",
  },
];

function App() {
  return (
    <div className="todo-app">
      <div className="todo__sidebar">
        <FolderList folders={[{title: "Все задачи", icon: <ListIcon />}]}/>
        <FolderList folders={folderList}/>
        <FolderList folders={[{title: "Добавить папку", icon: <AddIcon />}]}/>
      </div>
      <div className="todo__tasks"></div>
    </div>
  );
}

export default App;

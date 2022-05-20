import "./FolderList.scss";

const FolderList = ({ folders, onFolderClick, activeFolder }) => {
  return (
    <ul className="folder-list">
      {folders.map((folder) => {
        const hasFolderIcon = folder.icon ? (
          folder.icon
        ) : (
          <span className={`badge badge--${folder.color}`} />
        );
        return (
          <li
            key={folder.id}
            onClick={() => onFolderClick(folder.id)}
            className={`folder-list__item ${activeFolder?.id === folder.id ? "active" : ""}`}
          >
            <span className="folder-list__icon">{hasFolderIcon}</span>
            {folder.title}
          </li>
        );
      })}
    </ul>
  );
};

export default FolderList;

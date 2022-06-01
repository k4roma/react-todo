import "./FolderList.scss";
import { ReactComponent as RemoveIcon } from "../../assets/icons/remove.svg";

const FolderList = ({
  folders,
  onFolderClick,
  activeFolder,
  onDeleteClick,
}) => {
  return (
    <ul className="folder-list">
      {folders.map((folder) => {
        const hasFolderIcon = folder.icon ? (
          folder.icon
        ) : (
          <span className={`badge bg-${folder.color}`} />
        );
        return (
          <li
            key={folder.id}
            onClick={() => onFolderClick(folder.id)}
            className={`folder-list__item ${
              activeFolder?.id === folder.id ? "active" : ""
            }`}
          >
            <span className="folder-list__icon">{hasFolderIcon}</span>
            {folder.title}
            <span
              className="remove-btn"
              onClick={(e) => onDeleteClick(e, folder.id, activeFolder?.id)}
            >
              <RemoveIcon />
            </span>
          </li>
        );
      })}
    </ul>
  );
};

export default FolderList;

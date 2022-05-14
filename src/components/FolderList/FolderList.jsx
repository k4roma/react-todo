import './FolderList.scss';

const FolderList = ({ folders }) => {
  return (
    <ul className="folder-list">
      {folders.map((folder) => {
        const hasFolderIcon = folder.icon ? (folder.icon) : (<span className="badge" style={{backgroundColor: `${folder.color}`}} />);
        return (
          <li className="folder-list__item">
            <span className="folder-list__icon">{hasFolderIcon}</span>
            {folder.title}
          </li>
        );
      })}
    </ul>
  );
};

export default FolderList;

import Button from "../UI/Button/Button";
import {ReactComponent as CloseIcon} from "../../assets/icons/close.svg";
import "./AddFolderModal.scss";

const AddFolderModal = ({
  formState,
  onCloseClick,
  onAddFolderClick,
  onInputChange,
  inputState,
}) => {
  return (
      <form
          className="form-add-folder"
          style={formState.isVisible ? {display: "flex"} : {display: "none"}}
      >
      <span className="form-add-folder__close-btn" onClick={onCloseClick}>
        <CloseIcon/>
      </span>
        <input
            onChange={onInputChange}
            className="form-add-folder__input"
            type="text"
            placeholder="Название папки"
            value={inputState}
        />
        <Button onClick={onAddFolderClick} className="form-add-folder__add-btn">
          Добавить
        </Button>
      </form>
  );
};

export default AddFolderModal;

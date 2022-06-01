import Button from "../UI/Button/Button";
import ColorsInputGroup from "../ColorInputGroup/ColorsInputGroup";
import { ReactComponent as CloseIcon } from "../../assets/icons/close.svg";
import "./AddFolderModal.scss";

const AddFolderModal = ({
  formState,
  onCloseClick,
  onAddFolderClick,
  onColorInputChange,
  onInputChange,
  inputState,
  colors,
}) => {
  if (formState.isVisible) {
    return (
      <form className="form-add-folder">
        <span className="form-add-folder__close-btn" onClick={onCloseClick}>
          <CloseIcon />
        </span>
        <ColorsInputGroup colors={colors} onColorChange={onColorInputChange} />
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
  }
  return null;
};

export default AddFolderModal;

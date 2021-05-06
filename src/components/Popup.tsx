import copyImg from "../assets/copy.svg";
import popupArrowImg from "../assets/popupArrow.svg";

export default function Popup() {
  return (
    <div>
      <div>
        <img src={copyImg} alt="Copiar" />
        <span>Copiar</span>
      </div>
      <img src={popupArrowImg} alt="" />
    </div>
  );
}

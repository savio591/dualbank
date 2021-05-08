import { ButtonStyles } from "../styles/ButtonStyles";

interface ButtonProps {
  type: "sidebar" | "sidebarArrow";
  data: string;
  selected?: Boolean;
  disabled?: Boolean;
}

export function Button({ type, data, selected, disabled }: ButtonProps) {
  return (
    <ButtonStyles
      className={type + " " + (selected ? "selected" : " ")}
      disabled={disabled ? true : false}
    >
      <span className="bars"></span>
      <img src={data} alt="iconname" />
      <span className="bars"></span>
    </ButtonStyles>
  );
}

import { Children, ReactNode } from "react";
import { ButtonStyles } from "../styles/ButtonStyles";

import CaretDownImg from "../assets/caretDown.svg";
import shieldImg from "../assets/shield.svg";
import eyeImg from "../assets/eye.svg";

interface ButtonProps {
  type:
    | "sidebar"
    | "sidebarArrow"
    | "balanceOpts"
    | "balanceDate"
    | "balanceAvailable"
    | "refresh"
    | "eye"
    | "eyeBig";
  data?: string;
  selected?: Boolean;
  disabled?: Boolean;
  title?: string | undefined;
  alt?: string | undefined;
  onClick ?: () => void;
}

export function Button({
  type,
  data,
  selected,
  disabled,
  title,
  alt,
  onClick
}: ButtonProps) {
  if (type === "balanceAvailable") {
    return (
      <ButtonStyles
        className={type + " " + (selected ? "selected" : "")}
        disabled={disabled ? true : false}
        title={title || ""}
      >
        <img src={shieldImg} alt="Protegido" draggable={false}  />
        <div>
          <h2>Saldo disponível</h2>
          <span>R$40.000,00</span>
        </div>
        <Button data={eyeImg} type="eyeBig" />
      </ButtonStyles>
    );
  }
  if (type === "balanceDate") {
    return (
      <ButtonStyles
        className={type + " " + (selected ? "selected" : "")}
        disabled={disabled ? true : false}
        title={title || " "}
      >
        <div>
          <h2>Data do Saldo</h2>
          <span>07/12/2020</span>
        </div>
        <img src={CaretDownImg} draggable={false} />
      </ButtonStyles>
    );
  }
  return (
    <ButtonStyles
      className={type + " " + (selected ? "selected" : "")}
      disabled={disabled ? true : false}
      title={title || ""}
      onClick={onClick}
    >
      <span className="bars"></span>
      <img src={data} alt={alt || ""} draggable={false} />
      <span className="bars"></span>
    </ButtonStyles>
  );
}

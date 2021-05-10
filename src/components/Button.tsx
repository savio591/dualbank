import {
  BaseSyntheticEvent,
  Children,
  ReactNode,
  SyntheticEvent,
  useEffect,
  useState,
} from "react";
import { ButtonStyles } from "../styles/ButtonStyles";

import CaretDownImg from "../assets/caretDown.svg";
import shieldImg from "../assets/shield.svg";
import eyeImg from "../assets/eye.svg";
import pauseImg from "../assets/pause.svg";
import cancelImg from "../assets/cancel.svg";
import caretDownImg from "../assets/caret_down.svg";

import { Dropdown } from "./Dropdown";

interface ButtonProps {
  type:
    | "sidebar"
    | "sidebarArrow"
    | "balanceOpts"
    | "balanceOptsWithDropdown"
    | "balanceDate"
    | "balanceAvailable"
    | "refresh"
    | "eye"
    | "eyeBig"
    | "button"
    | "playPause"
    | "cancel"
    | "copy"
    | "accounts";
  data?: string;
  selected?: Boolean;
  disabled?: Boolean;
  title?: string | undefined;
  alt?: string | undefined;
  onClick?: () => void;
  options?: {
    name: string;
    url: string;
  }[];
}

interface StatusState {
  status: string;
}

export function Button({
  type,
  data,
  selected,
  disabled,
  title,
  alt,
  onClick,
  options,
}: ButtonProps) {
  if (type === "cancel") data = cancelImg;
  if (type === "playPause") data = pauseImg;
  if (type === "balanceAvailable") {
    return (
      <ButtonStyles
        className={type + " " + (selected ? "selected" : "")}
        disabled={disabled ? true : false}
        title={title || ""}
      >
        <img src={shieldImg} alt="Protegido" draggable={false} />
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
  if (type === "balanceOptsWithDropdown") {
    return (
      <ButtonStyles
        className={type + " " + (selected ? "selected" : "")}
        disabled={disabled ? true : false}
        title={title || ""}
      >
        <img src={data} alt={alt || ""} draggable={false} />
        <Dropdown type="options" options={options || []} />
      </ButtonStyles>
    );
  }
  if (type === "accounts") {
    const [active, setActive] = useState(new Boolean());

    useEffect(() => {
      setActive(false);
    }, []);

    return (
      <>
        <ButtonStyles
          className="accountsButton"
          disabled={disabled ? true : false}
          title={title || ""}
          onFocus={() => setActive(!active)}
          onBlur={() => setActive(!active)}
        >
          Conta Corrente
          <img src={caretDownImg}></img>
          {active && <Dropdown type="accounts" />}
        </ButtonStyles>
      </>
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

import {
  BaseSyntheticEvent,
  ReactNode,
  SyntheticEvent,
  useContext,
  useEffect,
} from "react";

import copy from "copy-text-to-clipboard";

import copyImg from "../assets/copy.svg";
import { PopupStyle } from "../styles/PopupStyle";
import { Button } from "./Button";
import { useToast, ToastProvider } from "../services/toastService";

interface PopupProps {
  type: "copy" | "message" | string;
  className?: string;
  children: string;
  copyType?: string;
  of?: string;
  onMouseLeave?: () => void;
}

export function Popup({ type, className, copyType, onMouseLeave, of, children }: PopupProps) {
  const { addToast } = useToast();
  function handleClickCopy() {
    const type = of || "desconhecida";
    const textSplit = children.toString().split(" ");
    const textToBeCopied = textSplit[1];
    copy(textToBeCopied);
    addToast({
      of: type,
    });
  }

  if (type === "copy") {
    return (
      <PopupStyle className={className}>
        {children}
        <div className="popupText">
          <Button type="copy" data={copyImg} onClick={handleClickCopy} />
          <span>Copiar</span>
        </div>
      </PopupStyle>
    );
  }

  return (
    <PopupStyle>
      <div className={"popupMessage "+type} onMouseLeave={onMouseLeave}>
        <span>{children}</span>
      </div>
    </PopupStyle>
  );
}

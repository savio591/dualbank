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
  type: "copy";
  className?: string;
  children: string;
}

export function Popup({ type, className, children }: PopupProps) {
  const { addToast } = useToast();
  function handleClickCopy() {
    const textSplit = children.toString().split(" ");
    const textToBeCopied = textSplit[1];
    copy(textToBeCopied);
    addToast({
      of: "Agenzar",
    });
  }

  // if (type === "copy") {
  return (
    <PopupStyle className={className}>
      {children}
      <div className="popupText">
        <Button type="copy" data={copyImg} onClick={handleClickCopy} />
        <span>Copiar</span>
      </div>
    </PopupStyle>
  );
  // }
}

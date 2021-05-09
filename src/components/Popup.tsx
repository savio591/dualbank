import { BaseSyntheticEvent, ReactNode, SyntheticEvent } from "react";

import copy from "copy-text-to-clipboard";

import copyImg from "../assets/copy.svg";
import { PopupStyle } from "../styles/PopupStyle";
import { Button } from "./Button";

interface PopupProps {
  type: "copy";
  className?: string;
  children: string;
}


export function Popup({ type, className, children }: PopupProps) {
  function handleClickCopy() {
    const textSplit = children.toString().split(" ")
    const textToBeCopied = textSplit[1]
    copy(textToBeCopied);
    alert("Copiado: " + children);
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

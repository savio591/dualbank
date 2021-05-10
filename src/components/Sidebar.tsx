import { Button } from "./Button";
import { SidebarStyles } from "../styles/SidebarStyles";

import homeImg from "../assets/home.svg";
import charPieImg from "../assets/chartPie.svg";
import chartLineUpImg from "../assets/chartLineUp.svg";
import moneyImg from "../assets/money.svg";
import handshakeImg from "../assets/handshake.svg";
import pixImg from "../assets/pix.svg";
import creditCardImg from "../assets/creditCard.svg";
import receiptImg from "../assets/receipt.svg";
import wrenchImg from "../assets/wrench.svg";
import questionImg from "../assets/question.svg";
import caretRightImg from "../assets/caretRight.svg";

export function Sidebar() {
  return (
    <>
      <SidebarStyles>
        <div className="buttons">
          <Button type="sidebar" data={homeImg} />
          <Button type="sidebar" data={charPieImg} selected={true} />
          <Button type="sidebar" data={chartLineUpImg} />
          <Button type="sidebar" data={moneyImg} />
          <Button type="sidebar" data={handshakeImg} />
          <Button type="sidebar" data={pixImg} disabled={true} />
          <Button type="sidebar" data={creditCardImg} disabled={true} />
          <Button type="sidebar" data={receiptImg} />
          <Button type="sidebar" data={wrenchImg} />
          <Button type="sidebar" data={questionImg} />
        </div>
        <Button type="sidebarArrow" data={caretRightImg} />
      </SidebarStyles>
    </>
  );
}

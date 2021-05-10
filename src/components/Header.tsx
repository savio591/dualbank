import { Link } from "react-router-dom";
import logoWideImg from "../assets/logo_wide.svg";
import copyImg from "../assets/copy.svg";
import caretDownImg from "../assets/caret_down.svg";
import eyeImg from "../assets/eye.svg";
import searchImg from "../assets/search.svg";
import chatImg from "../assets/chat.svg";
import calendarImg from "../assets/calendar.svg";
import bellImg from "../assets/bell.svg";
import { HeaderStyle } from "../styles/HeaderStyle";
import { Popup } from "./Popup";
import { Button } from "./Button";
import { useState } from "react";

export function Header() {
  const [isBalanceShowed, setIsBalanceShowed] = useState(true);


  function handleSetBalanceShow() {
    setIsBalanceShowed(!isBalanceShowed)
  }

  return (
    <>
      <HeaderStyle>
        <div className="leftContent">
          <div className="logo">
            <Link to="./">
              <img src={logoWideImg} alt="" />
            </Link>
          </div>
          <div className="account">
            <Button type="accounts" />
            <div className="data">
              <Popup type="copy" className="text" of="agência">
                Ag. 00005-1
              </Popup>
              <Popup type="copy" className="text" of="conta">
                C.C. 00000000000000000020-1
              </Popup>
              <Button type="copy" data={copyImg} />
            </div>
          </div>
          <div className="cash">
            <div>
              <h2>Saldo</h2>
              <Button type="eye" onClick={handleSetBalanceShow} />
            </div>
            {(isBalanceShowed) ? <span>R$40.000,00</span> : ""}
          </div>
        </div>
        <div className="rightContent">
          <div className="searchField">
            <input
              type="text"
              name="searchInput"
              id="search"
              placeholder="Pesquisar"
            />
            <button>
              <img src={searchImg} alt="Pesquisar" />
            </button>
          </div>

          <button>
            <img src={chatImg} alt="Chat"></img>
          </button>
          <button>
            <img src={calendarImg} alt="Calendário"></img>
          </button>
          <button>
            <img src={bellImg} alt="Notificações"></img>
          </button>
          <button className="profile"></button>
        </div>
      </HeaderStyle>
    </>
  );
}

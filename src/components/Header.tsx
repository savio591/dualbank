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

export function Header() {
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
            <button>
              Conta Corrente
              <img src={caretDownImg}></img>
            </button>
            <div>
              <h2>Ag. 00005-1</h2>
              <h2>C.C. 00000000000000000020-1</h2>
              <button>
                <img src={copyImg} />
              </button>
            </div>
          </div>
          <div className="cash">
            <div>
              <h2>Saldo</h2>
              <button>
                <img src={eyeImg}></img>
              </button>
            </div>
            <span>R$40.000,00</span>
          </div>
        </div>
        <div className="rightContent">
          <div className="searchField">
            <input type="text" name="searchInput" id="search" placeholder="Pesquisar" />
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

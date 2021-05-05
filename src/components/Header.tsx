import { Link } from "react-router-dom";
import logoWideImg from "../assets/logo_wide.svg";
import copyImg from "../assets/copy.svg";
import caretDownImg from "../assets/caret_down.svg";
import eyeImg from "../assets/eye.svg";
import searchImg from "../assets/search.svg";
import chatImg from "../assets/chat.svg";
import calendarImg from "../assets/calendar.svg";
import bellImg from "../assets/bell.svg";

export function Header() {
  return (
    <>
      <header>
        <div className="leftContent">
          <div>
            <Link to="./">
              <img src={logoWideImg} alt="" />
            </Link>
          </div>
          <div>
            <button>
              Conta Corrente
              <img src={caretDownImg}></img>
            </button>
            <div>
              <h2>Ag. 00005-1</h2>
              <h2>C.C. 00000000000000000020-1</h2>
              <i>
                <img src={copyImg} />
              </i>
            </div>
          </div>
          <div className="cash">
            <div>
              <h2>Saldo</h2>
              <img src={eyeImg}></img>
            </div>
            <h1>R$40.000,00</h1>
          </div>
        </div>
        <div className="rightContent">
          <input type="search" name="searchInput" id="search" />
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
      </header>
    </>
  );
}

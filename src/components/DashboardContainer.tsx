import printImg from "../assets/print.svg";
import downloadImg from "../assets/download.svg";
import shareImg from "../assets/share.svg";
import caretDownImg from "../assets/caretDown.svg";
import refreshImg from "../assets/refresh.svg";
import shieldImg from "../assets/shield.svg";
import eyeImg from "../assets/eye.svg";

export function DashboardContainer() {
  return (
    <>
      <div>
        <div>
          <h2>Saldo Bancário</h2>
          <ul>
            <li>
              <button>
                <img src={printImg} alt="Imprimir" />
              </button>
            </li>
            <li>
              <button>
                <img src={downloadImg} alt="Baixar" />
              </button>
            </li>
            <li>
              <button>
                <img src={shareImg} alt="Compartilhar" />
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="card">
        <button>
          <div>
            <h2>Data do Saldo</h2>
            <span>07/12/2020</span>
          </div>
          <img src={caretDownImg} alt="Selecionar data" />
        </button>
        <div>
          <h3>Saldo Atualizado às 16:48 </h3>
          <img src={refreshImg} alt="Atualizar dados sobre o saldo" />
        </div>
      </div>
      <button>
        <div>
          <img src={shieldImg} alt="Protegido" />
          <div>
            <h2>Saldo disponível</h2>
            <span>R$40.000,00</span>
          </div>
          <button>
            <img src={eyeImg} alt="Ocultar Saldo" />
          </button>
        </div>
      </button>
    </>
  );
}

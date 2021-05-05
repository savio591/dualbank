import tagImg from "../assets/tag.svg";
import addTagImg from "../assets/addTag.svg";
import eyeImg from "../assets/eye.svg";

export function CashByTags() {
  return (
    <>
      <button>
        <img src={tagImg} alt="Ver tags" />
      </button>
      <button>
        <img src={addTagImg} alt="Adicionar nova tag" />
      </button>
      <ul>
        <li>
          <div
            className="iconGradient"
            style={{
              width: "36px",
              height: "36px",
              background: "blue",
              borderRadius: "50%",
            }}
          >
            <p>P</p>
          </div>
          <div>
            <div>
              <h2>Principal</h2>
              <img src={eyeImg} alt="Ocultar saldo"/>
            </div>
            <span>R$ 10.00,00</span>
          </div>
        </li>
        <li>
          <div
            className="iconGradient"
            style={{
              width: "36px",
              height: "36px",
              background: "green",
              borderRadius: "50%",
            }}
          >
            <p>A</p>
          </div>
          <div>
            <div>
              <h2>Aluguel</h2>
              <img src={eyeImg} alt="Ocultar saldo"/>
            </div>
            <span>R$ 1.600,00</span>
          </div>
        </li>
        <li>
          <div
            className="iconGradient"
            style={{
              width: "36px",
              height: "36px",
              background: "red",
              borderRadius: "50%",
            }}
          >
            <p>A</p>
          </div>
          <div>
            <div>
              <h2>Alimentação</h2>
              <img src={eyeImg} alt="Ocultar saldo"/>
            </div>
            <span>R$ 450,00</span>
          </div>
        </li>
      </ul>
    </>
  );
}

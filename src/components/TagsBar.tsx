import tagImg from "../assets/tag.svg";
import addTagImg from "../assets/addTag.svg";
import eyeImg from "../assets/eye.svg";
import { TagsBarStyle } from "../styles/TagsBarStyle";

export function TagsBar() {
  return (
    <TagsBarStyle>
      <div className="tagsButtons">
        <button title="Ver tags">
          <img src={tagImg} alt="Ver tags"   />
        </button>
        <button title="Adicionar nova tag">
          <img src={addTagImg} alt="Adicionar nova tag"  />
        </button>
      </div>

      <ul>
        <li>
          <div
            className="iconGradient"
            style={{
              width: "2.25rem",
              height: "2.25rem",
              background:
                "linear-gradient(89.96deg, #622EE5 0.06%, #172765 99.94%)",
              borderRadius: "50%",
            }}
          >
            <p>P</p>
          </div>
          <div>
            <div>
              <h2>Principal</h2>
              <button>
                <img src={eyeImg} alt="Ocultar saldo" />
              </button>
            </div>
            <span>R$ 10.00,00</span>
          </div>
        </li>
        <li>
          <div
            className="iconGradient"
            style={{
              width: "2.25rem",
              height: "2.25rem",
              background: "linear-gradient(135deg, #778899 0%, #172765 100%)",
              borderRadius: "50%",
            }}
          >
            <p>A</p>
          </div>
          <div>
            <div>
              <h2>Aluguel</h2>
              <button>
                <img src={eyeImg} alt="Ocultar saldo" />
              </button>
            </div>
            <span>R$ 1.600,00</span>
          </div>
        </li>
        <li>
          <div
            className="iconGradient"
            style={{
              width: "2.25rem",
              height: "2.25rem",
              background: `linear-gradient(135deg, #FF354E 0%, #172765 100%)`,
              borderRadius: "50%",
            }}
          >
            <p>A</p>
          </div>
          <div>
            <div>
              <h2>Alimentação</h2>
              <button>
                <img src={eyeImg} alt="Ocultar saldo" />
              </button>
            </div>
            <span>R$ 450,00</span>
          </div>
        </li>
      </ul>
    </TagsBarStyle>
  );
}

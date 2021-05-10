import tagImg from "../assets/tag.svg";
import addTagImg from "../assets/addTag.svg";
import { TagsBarStyle } from "../styles/TagsBarStyle";
import { Button } from "./Button";
import { useState } from "react";
import { Popup } from "./Popup";

export function TagsBar() {
  const [isBalanceShowed, setIsBalanceShowed] = useState(true);
  const [newTagClickObserver, setNewTagClickObserver] = useState(false);
  const [
    isNewAllocationButtonHovered,
    setIsNewAllocationButtonHovered,
  ] = useState(false);

  function handleSetBalanceShow() {
    setIsBalanceShowed(!isBalanceShowed);
  }

  function handleShowTagContainer() {
    setNewTagClickObserver(true);
  }

  function handleHideTagContainer() {
    setNewTagClickObserver(false);
  }

  function handleTooglePopup() {
    setIsNewAllocationButtonHovered(!isNewAllocationButtonHovered);
  }

  return (
    <TagsBarStyle>
      <div
        className={
          "newTagContainer" + " " + (newTagClickObserver ? "" : "hidden")
        }
        onMouseLeave={handleHideTagContainer}
      >
        <section className="available">
          <h1>Disponíbilizado</h1>
          <p>
            <span>R$20.000,00</span>
            &#160; do seu saldo
          </p>
        </section>
        <section className="available">
          <h1>Distribuído</h1>
          <p>
            <span>R$12.050,00</span>
            (60,25%)
          </p>
        </section>
        <Button type="boxWithText" text="ALTERAR" />
      </div>
      <div className="tagsButtons">
        <Button
          type="tag"
          title="Ver tags"
          data={tagImg}
          alt="Ver tags"
          onHover={handleShowTagContainer}
        />
        <Button
          type="tag"
          title="Adicionar nova tag"
          data={addTagImg}
          alt="Adicionar nova tag"
          onHover={handleTooglePopup}
          onMouseLeave={handleTooglePopup}
        />
        <Popup
          type={
            "message" + " " + (isNewAllocationButtonHovered ? " " : "hidden")
          }
        >
          Nova Alocação
        </Popup>
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
              <Button type="eye" onClick={handleSetBalanceShow} />
            </div>
            {isBalanceShowed ? <span>R$10.000,00</span> : ""}
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
              <Button type="eye" onClick={handleSetBalanceShow} />
            </div>
            {isBalanceShowed ? <span>R$6.000,00</span> : ""}
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
              <Button type="eye" onClick={handleSetBalanceShow} />
            </div>
            {isBalanceShowed ? <span>R$450,00</span> : ""}
          </div>
        </li>
      </ul>
    </TagsBarStyle>
  );
}

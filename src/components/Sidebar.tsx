import homeImg from "../assets/home.svg"
import charPieImg from "../assets/chartPie.svg"
import chartLineUpImg from "../assets/chartLineUp.svg"
import moneyImg from "../assets/money.svg"
import handshakeImg from "../assets/handshake.svg"
import pixImg from "../assets/pix.svg"
import creditCardImg from "../assets/creditCard.svg"
import receiptImg from "../assets/receipt.svg"
import wrenchImg from "../assets/wrench.svg"
import questionImg from "../assets/question.svg"
import caretRightImg from "../assets/caretRight.svg"



export function Sidebar() {
  return (
    <>
    <aside>
      <button><img src={homeImg}></img></button>
      <button><img src={charPieImg}></img></button>
      <button><img src={chartLineUpImg}></img></button>
      <button><img src={moneyImg}></img></button>
      <button><img src={handshakeImg}></img></button>
      <button><img src={pixImg}></img></button>
      <button><img src={creditCardImg}></img></button>
      <button><img src={receiptImg}></img></button>
      <button><img src={wrenchImg}></img></button>
      <button><img src={questionImg}></img></button>
    </aside>
    <button>
      <img src={caretRightImg} alt="Abrir barra lateral"/>
    </button>
    </>
  )
}
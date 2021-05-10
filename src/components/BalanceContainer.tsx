import { BalanceContainerStyle } from "../styles/BalanceContainerStyle";

import printImg from "../assets/print.svg";
import downloadImg from "../assets/download.svg";
import shareImg from "../assets/share.svg";
import refreshImg from "../assets/refresh.svg";

import { Button } from "./Button";

export function BalanceContainer() {
  return (
    <BalanceContainerStyle>
      <div className="header">
        <h2>Saldo Bancário</h2>
        <ul className="headerOptions">
          <li>
            <Button
              data={printImg}
              type="balanceOpts"
              alt="Imprimir"
              title="Imprimir"
              onClick={() => window.print()}
            />
          </li>
          <li>
            <Button
              data={downloadImg}
              type="balanceOpts"
              alt="Baixar"
              title="Baixar"
            />
          </li>
          <li>
            <Button
              data={shareImg}
              type="balanceOptsWithDropdown"
              alt="Compartilhar"
              title="Compartilhar"
              options={[
                {
                  name: "Enviar por email",
                  url: "https://gmail.com",
                },
              ]}
            />
          </li>
        </ul>
      </div>
      <div className="card">
        <Button type="balanceDate" />
        <div className="updatedAtRow">
          <h3>Saldo atualizado às 16:48 </h3>
          <Button type="refresh" data={refreshImg} />
        </div>
        <Button type="balanceAvailable" balance={40010} />
      </div>
    </BalanceContainerStyle>
  );
}

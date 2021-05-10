import loadingAnim from "../assets/loadingStatic.svg";
import { DownloadContainerStyle } from "../styles/DownloadContainerStyle";
import { Button } from "./Button";

export function DownloadContainer() {
  return (
    <DownloadContainerStyle>
      <div className="status">
        <span className="statusText">Baixando</span>
        <img src={loadingAnim} alt="Baixando" />
        <span className="size">201kb</span>
      </div>
      <p className="filename">
        Saldo %NomeDadoParaAConta% %DataDaConsulta%.pdf
      </p>
      <Button type="playPause" />
      <Button type="cancel" />
    </DownloadContainerStyle>
  );
}

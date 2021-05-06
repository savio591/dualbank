import loadingAnim from "../assets/loadingStatic.svg";

export function DownloadContainer() {
  return (
    <div>
      <span>Baixando</span>
      <img src={loadingAnim} alt="Baixando" />
    </div>
  );
}

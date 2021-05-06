import { CashByTags } from "../components/CashByTags";
import { DashboardContainer } from "../components/DashboardContainer";
import { Dropdown } from "../components/Dropdown";
import { Header } from "../components/Header";
import Popup from "../components/Popup";
import { Sidebar } from "../components/Sidebar";
import { Toast } from "../components/Toast";

export function Dashboard() {
  return (
    <>
      <Toast of="conta" />
      <Toast of="agência" />
      <Header />
      <CashByTags />
      <Sidebar />
      <DashboardContainer />
      <Popup />
      <Dropdown type="accounts" />
      <Dropdown type="options" />
    </>
  );
}

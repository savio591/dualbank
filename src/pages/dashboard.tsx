import { CashByTags } from "../components/CashByTags";
import { DashboardContainer } from "../components/DashboardContainer";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

export function Dashboard() {
  return (
    <>
      <Header />
      <CashByTags />
      <Sidebar />
      <DashboardContainer />
    </>
  );
}

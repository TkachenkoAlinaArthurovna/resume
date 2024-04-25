import styles from "./page.module.css";
import Content from "@/app/components/Content/Content";
import Sidebar from "@/app/components/Sidebar/Sidebar";
import MainBlock from "@/app/components/MainBlock/MainBlock";

export default function Home() {
  return (
    <main className={styles.main}>
      <Content>
        <Sidebar />
        <MainBlock />
      </Content>
    </main>
  );
}

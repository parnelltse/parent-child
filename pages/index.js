
import styles from "@/styles/Home.module.css";
import ParnetToChild from "./ParentOne";
import ChildToParent from "./ParentTwo";

export default function Home() {
  return (
    <>
     
      <main className={`${styles.main} `}>
        <ParnetToChild/>
        <ChildToParent/>
      </main>
    </>
  );
}

import styles from "./index.module.scss";

function Layout({ children }: any) {
  return <div className={styles.layout}>{children}</div>;
}

export default Layout;

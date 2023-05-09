import { useTranslation } from "react-i18next";
import authLogo from "../../../_assets/svg/authLogo.svg";
import logo from "../../../_assets/svg/logo.svg";
import styles from "./index.module.scss";

function Layout({ children }: any) {
  const { t } = useTranslation();
  return (
    <div className={styles.layout}>
      <div className={styles.leftSide}>
        <div className={styles.content}>
          <div className={styles.logo}>
            <img src={logo} alt="logo" />
            <h1>DWED</h1>
          </div>
          <div className={styles.image}>
            <img src={authLogo} alt="authLogo" />
          </div>
          <div className={styles.bottom}>
            <h3>{t("auth.ecosystem")}</h3>
            <h5>{t("auth.selectCompany")}</h5>
          </div>
        </div>
      </div>
      <div className={styles.rightSide}>{children}</div>
    </div>
  );
}

export default Layout;

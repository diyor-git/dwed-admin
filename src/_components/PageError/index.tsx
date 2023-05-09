import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import styles from "./index.module.scss";

function PageError() {
  const { t } = useTranslation();

  const { status } = useParams();
  const getStatusText = (code = 500) => {
    if (code === 403) {
      return t("error-page-text-403");
    }
    if (code >= 500 && code <= 599) {
      return t("error-page-text-500");
    }
    return t("error-page-text-500");
  };

  return (
    <div className={styles.pageError}>
      <div className={styles.text}>
        <h1>
          {t("error-page-title")} {status}
        </h1>
        <h1>{getStatusText(+status)}</h1>
      </div>
      <Link to="/">
        <button type="submit">{t("back-to-home-page")}</button>
      </Link>
    </div>
  );
}

export default PageError;

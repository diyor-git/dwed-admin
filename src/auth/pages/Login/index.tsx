import { useTranslation } from "react-i18next";
import styles from "./index.module.scss";
import LoginForm from "./components/LoginForm";
import { ChooseLang } from "../../component";
import useAuth from "../../../_utils/hooks/useAuth.tsx";
import { ErrorAlert } from "../../../_components";

function Login() {
  const { t } = useTranslation();

  const { signInData, error, isLoading, isSuccess } = useAuth();

  const onSubmit = ({ password, username }: any) => {
    signInData({ password, username });
  };

  return (
    <div className={styles.login}>
      {/* @ts-ignore */}
      <ErrorAlert error={error} />
      <div className={styles.header}>
        <ChooseLang />
      </div>
      <div className={styles.form}>
        <h3>{t("auth.login")}</h3>
        <h5>{t("auth.loginSubText")}</h5>
        <LoginForm
          onSubmit={onSubmit}
          isSuccess={isSuccess}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
}

export default Login;

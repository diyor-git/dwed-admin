import { useTranslation } from "react-i18next";
import styles from "./index.module.scss";
import LoginForm from "./components/LoginForm";
import { useSignInMutation } from "../../api/auth.ts";
import { ChooseLang, ErrorAlert } from "../../component";

function Login() {
  const { t } = useTranslation();
  const [signInData, { error, isSuccess, isLoading }] = useSignInMutation();

  const onSubmit = ({ ipAddress, password, login }: any) => {
    signInData({ ipAddress, password, login });
  };

  return (
    <div className={styles.login}>
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

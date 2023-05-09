import { useTranslation } from "react-i18next";
import styles from "./index.module.scss";
import ChooseLang from "../../component/ChooseLang";
import { useSignUpMutation } from "../../api/auth.ts";
import SignUpForm from "./components/SignUpForm";

function SignUp() {
  const { t } = useTranslation();
  const [signUpData, { isSuccess, isLoading }] = useSignUpMutation();

  const onSubmit = ({ ipAddress, password, login }: any) => {
    signUpData({ ipAddress, password, login });
  };

  return (
    <div className={styles.login}>
      <div className={styles.header}>
        <ChooseLang />
      </div>
      <div className={styles.form}>
        <h3>{t("auth.signup")}</h3>
        <h5>{t("auth.loginSubText")}</h5>
        <SignUpForm
          onSubmit={onSubmit}
          isSuccess={isSuccess}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
}

export default SignUp;

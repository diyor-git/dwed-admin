import { Link } from "react-router-dom";
import styles from "./index.module.scss";

function Breadcrumb({ text, to }: any) {
  return (
    <div className={styles.breadcrubm}>
      {text.map((el: any) => (
        <div key={el.text}>
          <Link to={to}>{el.text}</Link>
          <span>/</span>
        </div>
      ))}
    </div>
  );
}

export default Breadcrumb;

import styles from "./index.module.scss";

function Breadcrumb({ text }: any) {
  return (
    <div className={styles.breadcrubm}>
      {text.map((el: any) => (
        <div key={el.text}>
          <h4>{el.text}</h4>
          <span>/</span>
        </div>
      ))}
    </div>
  );
}

export default Breadcrumb;

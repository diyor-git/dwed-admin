import styles from "./index.module.scss";

function Breadcrumb({ text }: any) {
  return (
    <div className={styles.breadcrubm}>
      {text.map((el: any) => (
        <>
          <h4>{el.text}</h4>
          <span>/</span>
        </>
      ))}
    </div>
  );
}

export default Breadcrumb;

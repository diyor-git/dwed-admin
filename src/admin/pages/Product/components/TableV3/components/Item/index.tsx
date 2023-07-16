import styles from "../../index.module.scss";
import { ErrorAlert } from "../../../../../../../_components";

function Item({ name }: any) {
  const error = "sd";
  return (
    <>
      {/* @ts-ignore */}
      <ErrorAlert error={error} />
      <div className={styles.tableRow}>
        <div className={styles.tableData}>{name}</div>
        <div className={styles.tableData} />
      </div>
    </>
  );
}

export default Item;

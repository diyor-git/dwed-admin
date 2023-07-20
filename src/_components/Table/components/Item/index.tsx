import { Link } from "react-router-dom";
import { useState } from "react";
import styles from "../../index.module.scss";

function Item({
  id,
  categoryName,
  status,
  subcategory,
  deleteMutation,
  creator,
  actions,
}: any) {
  const [state, setState] = useState(false);

  const deleteItem = () => {
    deleteMutation({ id });
    setState(false);
  };
  return (
    <div className={styles.tableRow}>
      <div className={styles.tableData}>{id}</div>
      <div className={styles.tableData}>
        {subcategory ? (
          <Link to={`?parent=${id}`}>{categoryName}</Link>
        ) : (
          categoryName
        )}
      </div>
      <div className={styles.tableData}>
        {subcategory !== undefined ? subcategory || 0 : ""}
      </div>
      <div className={styles.tableData}>
        {/* eslint-disable-next-line no-nested-ternary */}
        {status === undefined ? creator : status === 1 ? "Active" : "Deactive"}
      </div>
      {actions && (
        <div className={styles.tableData}>
          <div
            className={`${styles.actions} ${state ? styles.activeActions : ""}`}
          >
            <button type="button" onClick={deleteItem}>
              <i className="fa-solid fa-trash" />
            </button>
          </div>
          <i
            className="fa-solid fa-ellipsis-vertical"
            onClick={() => setState(!state)}
          />
        </div>
      )}
    </div>
  );
}

export default Item;

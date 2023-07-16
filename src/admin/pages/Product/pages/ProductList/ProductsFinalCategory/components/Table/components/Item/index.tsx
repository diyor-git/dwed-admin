import { Link } from "react-router-dom";
import { useState } from "react";
import styles from "../../index.module.scss";
import { ErrorAlert } from "../../../../../../../../../../_components";
import { useDeleteProductMutation } from "../../../../../../../../../api/products.ts";

function Item({
  disableLinks,
  id,
  categoryName,
  subcategory,
  status,
  whoAdded,
}: any) {
  const [state, setState] = useState(false);

  const [data, { error }] = useDeleteProductMutation();
  const deleteRegion = (id: string) => {
    data({ id });
    setState(false);
  };
  return (
    <>
      {/* @ts-ignore */}
      <ErrorAlert error={error} />
      <div className={styles.tableRow}>
        <div className={styles.tableData}>{id}</div>
        <div className={styles.tableData}>
          {disableLinks ? (
            categoryName
          ) : (
            <Link to={`measure`}>{categoryName}</Link>
          )}
        </div>
        <div className={styles.tableData}>{subcategory || 0}</div>
        <div className={styles.tableData}>
          {status === 1 ? "Active" : "Deactive"}
        </div>
        <div className={styles.tableData}>
          <Link to={`${id}/${categoryName}`}>{whoAdded}</Link>
        </div>
        <div className={styles.tableData}>
          <div
            className={`${styles.actions} ${state ? styles.activeActions : ""}`}
          >
            <button type="button" onClick={() => deleteRegion(id)}>
              <i className="fa-solid fa-trash" />
            </button>
          </div>
          <i
            className="fa-solid fa-ellipsis-vertical"
            onClick={() => setState(!state)}
          />
        </div>
      </div>
    </>
  );
}

export default Item;

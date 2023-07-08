import { Link } from "react-router-dom";
import { useState } from "react";
import styles from "../../index.module.scss";
import { ErrorAlert } from "../../../index.ts";
import { useDeleteRegionMutation } from "../../../../admin/api/regions.ts";

function Item({
  disableLinks,
  id,
  categoryName,
  subcategory,
  status,
  whoAdded,
}: any) {
  const [state, setState] = useState(false);

  const [data, { error }] = useDeleteRegionMutation();
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
            <Link to={`${id}/${categoryName}`}>{categoryName}</Link>
          )}
        </div>
        <div className={styles.tableData}>{subcategory || 0}</div>
        <div className={styles.tableData}>
          {status === 1 ? "Active" : "Deactive"}
        </div>
        <div className={styles.tableData}>
          <Link to={`${id}`}>{whoAdded}</Link>
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

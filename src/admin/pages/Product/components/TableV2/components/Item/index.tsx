import { Link } from "react-router-dom";
import { useState } from "react";
import styles from "../../index.module.scss";
import { useDeleteRegionMutation } from "../../../../../../api/regions.ts";
import { ErrorAlert } from "../../../../../../../_components";

function Item({ disableLinks, id, categoryName }: any) {
  const [state, setState] = useState(false);

  const [data, { error }] = useDeleteRegionMutation();
  const deleteRegion = () => {
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
        <div className={styles.tableData}>
          <div
            className={`${styles.actions} ${state ? styles.activeActions : ""}`}
          >
            <button type="button" onClick={deleteRegion}>
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

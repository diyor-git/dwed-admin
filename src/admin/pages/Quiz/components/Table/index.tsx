import { FormGroup, Pagination } from "@mui/material";
import styles from "./index.module.scss";
import Nodata from "./components/Nodata";
import Item from "./components/Item";
import { FormControlValidate } from "../../../../../_components/Form";

function Table({
  rows,
  disableLinks,
  handleChangePage,
  loading,
  handleSubmit,
  formControls,
  handleOpenFilter,
  rowsName,
}: any) {
  return (
    <>
      <div className={styles.search}>
        <form onSubmit={handleSubmit}>
          <FormGroup className={styles.input}>
            <FormControlValidate
              fieldName="search"
              type="text"
              controls={formControls}
              variant="filled"
              label="Search by Category Name..."
            />
            <i
              className="fa-solid fa-magnifying-glass"
              onClick={handleSubmit}
            />
          </FormGroup>
        </form>
        <button type="button" onClick={handleOpenFilter}>
          Filter
          <i className="fa-solid fa-angle-down" />
        </button>
      </div>
      <div className={styles.table}>
        <div className={styles.tableHeader}>
          {rowsName &&
            rowsName.map((title: string) => (
              <div className={styles.headerItem}>
                <h3 className={styles.filterLink}>{title}</h3>
              </div>
            ))}
        </div>
        <div className={styles.tableContent}>
          {!rows?.results?.length ? (
            <div>
              <Nodata />
            </div>
          ) : (
            rows?.results?.map((el: any) => {
              return (
                <Item
                  key={el.id}
                  disableLinks={disableLinks}
                  id={el.id}
                  name={el.name}
                  participantCount={el.participant_count}
                  categoryName={el.name}
                  subcategory={el.child_number}
                  status={el.status}
                  whoAdded={el.creator}
                />
              );
            })
          )}
        </div>
      </div>
      <div className={styles.pagination}>
        <Pagination
          count={Math.floor(rows.count / 10)}
          variant="outlined"
          disabled={loading}
          onChange={handleChangePage}
          shape="rounded"
        />
      </div>
    </>
  );
}

export default Table;

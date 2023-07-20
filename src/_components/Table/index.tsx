import { FormGroup, Pagination } from "@mui/material";
import styles from "./index.module.scss";
import Nodata from "./components/Nodata";
import Item from "./components/Item";
import FormControlValidate from "../Form/FormControlValidate";
import { ErrorAlert } from "../index.ts";

function Table({
  rows,
  handleChangePage,
  loading,
  handleSubmit,
  formControls,
  handleOpenFilter,
  deleteMutation,
  error,
  rowsName,
  actions = true,
}: any) {
  return (
    <>
      {/* @ts-ignore */}
      <ErrorAlert error={error} />
      <div className={styles.search}>
        <form onSubmit={handleSubmit}>
          <FormGroup className={styles.input}>
            <FormControlValidate
              fieldName="search"
              type="text"
              controls={formControls}
              variant="filled"
              label="Search"
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
            rowsName.map((title: string, ind: number) => (
              // eslint-disable-next-line react/no-array-index-key
              <div key={ind} className={styles.headerItem}>
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
                  id={el.id}
                  name={el.name}
                  categoryName={el.name}
                  creator={el.creator || undefined}
                  subcategory={el.child_number}
                  status={el.status}
                  deleteMutation={deleteMutation}
                  actions={actions}
                />
              );
            })
          )}
        </div>
      </div>
      <div className={styles.pagination}>
        <Pagination
          count={Math.ceil(rows.count / 10)}
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

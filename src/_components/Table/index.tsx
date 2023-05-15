// import { DataGrid, GridColDef } from "@mui/x-data-grid";
// import { Link } from "react-router-dom";
// import styles from "./index.module.scss";
//
// const columns: GridColDef[] = [
//   { field: "id", headerName: "ID", width: 150 },
//   {
//     field: "categoryName",
//     headerName: "Category name",
//     width: 450,
//     renderCell: (params) => (
//       <Link to={`${params.value}`}>{params.value}</Link>
//     ),
//   },
//   { field: "subcategory", headerName: "Subcategory", width: 250 },
//   {
//     field: "status",
//     headerName: "Status",
//     width: 150,
//   },
//   {
//     field: "add",
//     headerName: "Who added",
//     description: "This column has a value getter and is not sortable.",
//     sortable: false,
//     width: 100,
//     renderCell: (params) => (
//       <Link to={`${params.value.to}`}>{params.value}</Link>
//     ),
//   },
//   {
//     field: "actions",
//     headerName: "",
//     width: 250,
//     renderCell: (params) => (
//       <div>
//         <i className="fa-solid fa-ellipsis-vertical" />
//       </div>
//     ),
//   },
// ];
//
// function Table({ rows }: any) {
//   return (
//     <div className={styles.table}>
//       <DataGrid
//         rows={rows}
//         columns={columns}
//         initialState={{
//           pagination: {
//             paginationModel: { page: 0, pageSize: 5 },
//           },
//         }}
//         pageSizeOptions={[5, 10, 15, 20, 25, 30]}
//       />
//     </div>
//   );
// }
//
// export default Table;

import { Pagination } from "@mui/material";
import styles from "./index.module.scss";
import Nodata from "./components/Nodata";
import Item from "./components/Item";

function Table({ rows, disableLinks, handleChangePage, loading }: any) {
  return (
    <>
      <div className={styles.table}>
        <div className={styles.tableHeader}>
          <div className={styles.headerItem}>
            <h3 className={styles.filterLink}>ID</h3>
          </div>
          <div className={styles.headerItem}>
            <h3 className={styles.filterLink}>Category name</h3>
          </div>
          <div className={styles.headerItem}>
            <h3 className={styles.filterLink}>Subcategory</h3>
          </div>
          <div className={styles.headerItem}>
            <h3 className={styles.filterLink}>Status</h3>
          </div>
          <div className={styles.headerItem}>
            <h3 className={styles.filterLink}>Who added</h3>
          </div>
          <div className={styles.headerItem}>
            <h3 className={styles.filterLink}>Actions</h3>
          </div>
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
                  categoryName={el.name}
                  subcategory={el.child_number}
                  status={el.status}
                  whoAdded={el.whoAdded}
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

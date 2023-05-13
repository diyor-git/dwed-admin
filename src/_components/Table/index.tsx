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

import { Link } from "react-router-dom";
import styles from "./index.module.scss";
import Nodata from "./components/Nodata";

function Table({ rows, disableLinks }: any) {
  return (
    <>
      <div className={styles.table}>
        <div className={styles.tableHeader}>
          <div className={styles.headerItem}>
            <h3 id="name" className={styles.filterLink}>
              ID
            </h3>
          </div>
          <div className={styles.headerItem}>
            <h3 id="name" className={styles.filterLink}>
              Category name
            </h3>
          </div>
          <div className={styles.headerItem}>
            <h3 id="name" className={styles.filterLink}>
              Subcategory
            </h3>
          </div>
          <div className={styles.headerItem}>
            <h3 id="name" className={styles.filterLink}>
              Status
            </h3>
          </div>
          <div className={styles.headerItem}>
            <h3 id="name" className={styles.filterLink}>
              Who added
            </h3>
          </div>
        </div>
        <div className={styles.tableContent}>
          {!rows.length ? (
            <div>
              <Nodata />
            </div>
          ) : (
            rows.map((el: any) => {
              return (
                <div className={styles.tableRow}>
                  <div className={styles.tableData}>{el.id}</div>
                  <div className={styles.tableData}>
                    {disableLinks ? (
                      el.categoryName
                    ) : (
                      <Link to={`${el.id}`}>{el.categoryName}</Link>
                    )}
                  </div>
                  <div className={styles.tableData}>{el.subcategory}</div>
                  <div className={styles.tableData}>{el.status}</div>
                  <div className={styles.tableData}>
                    <Link to={`${el.id}`}>{el.whoAdded}</Link>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
      <div></div>
    </>
  );
}

export default Table;

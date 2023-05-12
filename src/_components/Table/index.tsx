import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Link } from "react-router-dom";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 150 },
  { field: "categoryName", headerName: "Category name", width: 450 },
  { field: "subcategory", headerName: "Subcategory", width: 150 },
  {
    field: "status",
    headerName: "Status",
    type: "number",
    width: 150,
  },
  {
    field: "add",
    headerName: "Who added",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 220,
    renderCell: (params) => (
      <Link to={`/form/${params.value}`}>{params.value}</Link>
    ),
  },
];

const rows = [
  {
    id: 1,
    subcategory: "Snow",
    categoryName: 35,
    status: "active",
    add: <Link to="/nextStep">Diyor</Link>,
  },
  {
    id: 2,
    subcategory: "Snow",
    categoryName: 37,
    status: "active",
    add: <Link to="/nextStep">Diyor</Link>,
  },
  {
    id: 3,
    subcategory: "Snow",
    categoryName: 38,
    status: "active",
    add: <Link to="/nextStep">Diyor</Link>,
  },
  {
    id: 4,
    subcategory: "Snow",
    categoryName: 39,
    status: "active",
    add: <Link to="/nextStep">Diyor</Link>,
  },
  {
    id: 5,
    subcategory: "Snow",
    categoryName: 40,
    status: "active",
    whoAdded: "Aziz",
    add: <Link to="/nextStep">Diyor</Link>,
  },
];
function Table() {
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10, 15, 20, 25, 30]}
        checkboxSelection
      />
    </div>
  );
}

export default Table;

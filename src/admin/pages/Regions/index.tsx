import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import Table from "../../../_components/Table";
import styles from "./index.module.scss";
import { Modal } from "./components";
import { Breadcrumb } from "../../../_components";
import { useGetRegionsQuery } from "../../api/regions.ts";

// const rows = [
//   {
//     id: 1,
//     subcategory: "100 subcategories",
//     categoryName: <Link to={`${1}`}>Uzbekistan</Link>,
//     status: "active",
//     add: <Link to={`${1}`}>Diyor</Link>,
//   },
//   {
//     id: 2,
//     subcategory: "100 subcategories",
//     categoryName: <Link to={`${1}`}>Uzbekistan</Link>,
//     status: "active",
//     add: <Link to={`${1}`}>Diyor</Link>,
//   },
//   {
//     id: 3,
//     categoryName: <Link to={`${1}`}>Uzbekistan</Link>,
//     subcategory: "100 subcategories",
//     status: "active",
//     add: <Link to={`${1}`}>Diyor</Link>,
//   },
//   {
//     id: 4,
//     categoryName: <Link to={`${1}`}>Uzbekistan</Link>,
//     subcategory: "100 subcategories",
//     status: "active",
//     add: <Link to={`${1}`}>Diyor</Link>,
//   },
//   {
//     id: 5,
//     subcategory: "100 subcategories",
//     categoryName: <Link to={`${1}`}>Uzbekistan</Link>,
//     status: "active",
//     whoAdded: "Aziz",
//     add: <Link to={`${1}`}>Diyor</Link>,
//   },
// ];

// const rows = [
//   {
//     id: 1,
//     subcategory: "100 subcategories",
//     categoryName: "Uzbekistan",
//     status: "active",
//     whoAdded: "Diyor",
//   },
//   {
//     id: 2,
//     subcategory: "100 subcategories",
//     categoryName: "Uzbekistan",
//     status: "active",
//     whoAdded: "Diyor",
//   },
//   {
//     id: 3,
//     categoryName: "Uzbekistan",
//     subcategory: "100 subcategories",
//     status: "active",
//     whoAdded: "Diyor",
//   },
//   {
//     id: 4,
//     categoryName: "Uzbekistan",
//     subcategory: "100 subcategories",
//     status: "active",
//     whoAdded: "Diyor",
//   },
//   {
//     id: 5,
//     subcategory: "100 subcategories",
//     categoryName: "Uzbekistan",
//     status: "active",
//     whoAdded: "Aziz",
//   },
// ];

function Regions() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [page, setPage] = useState(0);

  const { data, isLoading, refetch } = useGetRegionsQuery({ offset: page });
  // @ts-ignore
  const handleChangePage = async (event: any, newPage: any) => {
    setPage(newPage * 10 - 10);
    setLoading(true);
    await refetch();
    setLoading(false);
  };

  if (isLoading) return <h1>load</h1>;
  return (
    <div className={styles.regions}>
      <Modal open={open} handleClose={handleClose} />
      <div className={styles.header}>
        <Breadcrumb
          text={[
            {
              to: "",
              text: "Region List",
            },
          ]}
        />
        <button type="button" onClick={handleClickOpen}>
          <AddIcon />
          Add category
        </button>
      </div>
      <div className={styles.table}>
        <Table
          rows={data}
          loading={loading}
          handleChangePage={handleChangePage}
        />
      </div>
    </div>
  );
}

export default Regions;

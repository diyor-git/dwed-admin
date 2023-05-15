import AddIcon from "@mui/icons-material/Add";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "../../index.module.scss";
import { Modal } from "../../components";
import { Breadcrumb, Table } from "../../../../../_components";
import { useGetRegionsSubQuery } from "../../../../api/regions.ts";

// const rows = [
//   {
//     id: 1,
//     subcategory: "100 subcategories",
//     categoryName: "Tashkent",
//     status: "active",
//     whoAdded: "Diyor",
//   },
//   {
//     id: 2,
//     subcategory: "100 subcategories",
//     categoryName: "Tashkent",
//     status: "active",
//     whoAdded: "Diyor",
//   },
//   {
//     id: 3,
//     categoryName: "Tashkent",
//     subcategory: "100 subcategories",
//     status: "active",
//     whoAdded: "Diyor",
//   },
//   {
//     id: 4,
//     categoryName: "Tashkent",
//     subcategory: "100 subcategories",
//     status: "active",
//     whoAdded: "Diyor",
//   },
//   {
//     id: 5,
//     subcategory: "100 subcategories",
//     categoryName: "Tashkent",
//     status: "active",
//     whoAdded: "Aziz",
//   },
// ];

function Subcategory() {
  const { id } = useParams();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [page, setPage] = useState(0);

  const { data, isLoading, refetch } = useGetRegionsSubQuery({
    offset: page,
    id,
  });

  const handleChangePage = async (event: any, newPage: any) => {
    setPage(newPage * 10 - 10);
    setLoading(true);
    await refetch();
    setLoading(false);
  };

  useEffect(() => {
    refetch();
  }, [id]);

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
            {
              to: "",
              text: "Uzbekistan",
            },
          ]}
        />

        <button type="button" onClick={handleClickOpen}>
          <AddIcon />
          Add category
        </button>
      </div>
      <Table
        rows={data}
        loading={loading}
        handleChangePage={handleChangePage}
      />
    </div>
  );
}

export default Subcategory;

import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import styles from "../../index.module.scss";
import { Modal } from "../../components";
import { Breadcrumb, Table } from "../../../../../_components";

const rows = [
  {
    id: 1,
    subcategory: "100 subcategories",
    categoryName: "Tashkent",
    status: "active",
    whoAdded: "Diyor",
  },
  {
    id: 2,
    subcategory: "100 subcategories",
    categoryName: "Tashkent",
    status: "active",
    whoAdded: "Diyor",
  },
  {
    id: 3,
    categoryName: "Tashkent",
    subcategory: "100 subcategories",
    status: "active",
    whoAdded: "Diyor",
  },
  {
    id: 4,
    categoryName: "Tashkent",
    subcategory: "100 subcategories",
    status: "active",
    whoAdded: "Diyor",
  },
  {
    id: 5,
    subcategory: "100 subcategories",
    categoryName: "Tashkent",
    status: "active",
    whoAdded: "Aziz",
  },
];

function Subcategory() {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
      <Table rows={rows} />
    </div>
  );
}

export default Subcategory;

import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../index.module.scss";
import { Modal } from "../../components";
import { Breadcrumb, Table } from "../../../../../_components";

const rows = [];

function FinalCategory() {
  const navigate = useNavigate();
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
              to: navigate(-1),
              text: "Uzbekistan",
            },
            {
              to: "",
              text: "Tashkent",
            },
          ]}
        />
        <button type="button" onClick={handleClickOpen}>
          <AddIcon />
          Add category
        </button>
      </div>
      <Table rows={rows} disableLinks />
    </div>
  );
}

export default FinalCategory;

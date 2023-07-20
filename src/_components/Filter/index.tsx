import List from "@mui/material/List";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import { Item } from "./components";
import styles from "./index.module.scss";

function Filter({ onClose, selectedValue, open }: any) {
  const handleClose = () => {
    onClose(selectedValue);
  };

  return (
    <Dialog className={styles.modal} onClose={handleClose} open={open}>
      <DialogTitle className={styles.title}>
        Select filter <br /> SORT BY
      </DialogTitle>
      <List className={styles.list}>
        <Item color="var(--blue)" label="Active" />
        <Item color="var(--red)" label="Number field" />
        <Item color="#FD9644" label="String field" />
        <Item color="#2BCBBA" label="Data field" />
        <Item color="var(--grey)" label="Yes/No " />
        <Item color="var(--red)" label="Who added" />
      </List>
      <div className={styles.btn}>
        <button type="button" onClick={handleClose}>Select</button>
      </div>
    </Dialog>
  );
}

export default Filter;

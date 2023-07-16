import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import styles from "./index.module.scss";

function QuickAction({ handleChange, expanded }: any) {
  return (
    <div className={styles.quickAction}>
      <h3>Quick Access</h3>
      <List>
        <ListItem
          className={expanded === "panel1" ? styles.active : ""}
          button
          onClick={handleChange("panel1")}
        >
          <ListItemText primary="Offer detail" />
        </ListItem>
        <ListItem
          className={expanded === "panel2" ? styles.active : ""}
          button
          onClick={handleChange("panel2")}
        >
          <ListItemText primary="Offer description" />
        </ListItem>
        <ListItem
          className={expanded === "panel3" ? styles.active : ""}
          button
          onClick={handleChange("panel3")}
        >
          <ListItemText primary="Offer IKPU code" />
        </ListItem>
        <ListItem
          className={expanded === "panel4" ? styles.active : ""}
          button
          onClick={handleChange("panel4")}
        >
          <ListItemText primary="Offer manufactured" />
        </ListItem>
        <ListItem
          className={expanded === "panel5" ? styles.active : ""}
          button
          onClick={handleChange("panel5")}
        >
          <ListItemText primary="Offer Character" />
        </ListItem>
        <ListItem
          className={expanded === "panel6" ? styles.active : ""}
          button
          onClick={handleChange("panel6")}
        >
          <ListItemText primary="Offer Media" />
        </ListItem>
      </List>
    </div>
  );
}

export default QuickAction;

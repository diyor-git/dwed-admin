import ListItem from "@mui/material/ListItem";
import { Collapse, ListItemIcon } from "@mui/material";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import styles from "../../index.module.scss";

function Links({ text, icon, collapseTexts }: any) {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <>
      <ListItem
        disablePadding
        onClick={handleClick}
        className={styles.collapseLink}
      >
        <ListItemIcon className={styles.listIcon}>{icon}</ListItemIcon>
        <ListItemText primary={text} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        {collapseTexts.map((el: any) => (
          <NavLink
            key={el.to}
            className={({ isActive }) =>
              isActive ? `${styles.active} ${styles.link}` : styles.link
            }
            to={el.to}
          >
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary={el.text} />
              </ListItemButton>
            </List>
          </NavLink>
        ))}
      </Collapse>
    </>
  );
}

export default Links;

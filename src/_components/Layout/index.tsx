import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import WidgetsIcon from "@mui/icons-material/Widgets";
import { ListItemIcon } from "@mui/material";
import logo from "../../_assets/svg/logo.svg";
import styles from "./index.module.scss";
import Links from "./components/Links";

function Layout({ children }: any) {
  return (
    <div className={styles.layout}>
      <div className={styles.sidebar}>
        <div className={styles.logo}>
          <img src={logo} alt="logo" />
          <h3>DWED Business</h3>
        </div>
        <List className={styles.list}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon className={styles.listIcon}>
                <WidgetsIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon className={styles.listIcon}>
                <i className="fa-solid fa-wallet" />
              </ListItemIcon>
              <ListItemText primary="Posts" />
            </ListItemButton>
          </ListItem>
          <Links
            text="Region"
            icon={<i className="fa-solid fa-box-open" />}
            collapseTexts={[
              {
                icon: <WidgetsIcon />,
                to: "/admin/regions",
                text: "Region List",
              },
              {
                icon: <WidgetsIcon />,
                to: "/admin/regions/id",
                text: "Type of  region",
              },
            ]}
          />
        </List>
      </div>
      <div>
        <div className={styles.header}>
          <h3>Region</h3>
        </div>
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
}

export default Layout;

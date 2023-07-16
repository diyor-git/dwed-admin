import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import WidgetsIcon from "@mui/icons-material/Widgets";
import { ListItemIcon } from "@mui/material";
import { NavLink } from "react-router-dom";
import logo from "../../_assets/svg/logo.svg";
import styles from "./index.module.scss";
import Links from "./components/Links";
import Breadcrumb from "../Breadcrumb";

function Layout({ children }: any) {
  return (
    <div className={styles.layout}>
      <div className={styles.sidebar}>
        <div className={styles.logo}>
          <img src={logo} alt="logo" />
          <h3>DWED Business</h3>
        </div>
        <List className={styles.list}>
          {/*<ListItem disablePadding>*/}
          {/*  <ListItemButton>*/}
          {/*    <ListItemIcon className={styles.listIcon}>*/}
          {/*      <WidgetsIcon />*/}
          {/*    </ListItemIcon>*/}
          {/*    <ListItemText primary="Home" />*/}
          {/*  </ListItemButton>*/}
          {/*</ListItem>*/}
          <ListItem disablePadding>
            <NavLink
              className={({ isActive }) =>
                isActive ? `${styles.active} ${styles.link}` : styles.link
              }
              to="orders-status"
            >
              <ListItemButton>
                <ListItemIcon className={styles.listIcon}>
                  <i className="fa-solid fa-cart-shopping" />
                </ListItemIcon>
                <ListItemText primary="Orders status" />
              </ListItemButton>
            </NavLink>
          </ListItem>
          <Links
            text="Products"
            icon={<i className="fa-solid fa-wallet" />}
            collapseTexts={[
              {
                icon: <i className="fa-solid fa-wallet" />,
                to: "/admin/products/",
                text: "Products List",
              },
              {
                icon: <WidgetsIcon />,
                to: "/admin/products/measure/",
                text: "Unit of measure",
              },
              {
                icon: <WidgetsIcon />,
                to: "/admin/products/type/",
                text: "Type of products",
              },
              {
                icon: <WidgetsIcon />,
                to: "/admin/products/create/",
                text: "Create product",
              },
              {
                icon: <WidgetsIcon />,
                to: "/admin/products/manufacture/",
                text: "Manufacture",
              },
            ]}
          />
          <Links
            text="Regions"
            icon={<i className="fa-solid fa-box-open" />}
            collapseTexts={[
              {
                icon: <WidgetsIcon />,
                to: "/admin/regions/",
                text: "Region List",
              },
              {
                icon: <WidgetsIcon />,
                to: "/admin/regions/type/",
                text: "Type of region",
              },
            ]}
          />
          <Links
            text="Quiz"
            icon={<i className="fa-solid fa-box-open" />}
            collapseTexts={[
              {
                icon: <WidgetsIcon />,
                to: "/admin/quiz/",
                text: "Quiz List",
              },
              {
                icon: <WidgetsIcon />,
                to: "/admin/quiz/type/",
                text: "Type of quiz",
              },
            ]}
          />
        </List>
      </div>
      <div>
        <div className={styles.header}>
          <h3>DWED</h3>
        </div>
        <div className={styles.content}>
          <Breadcrumb />
          {children}
        </div>
      </div>
    </div>
  );
}

export default Layout;

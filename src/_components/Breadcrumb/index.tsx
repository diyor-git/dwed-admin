import useBreadcrumbs from "use-react-router-breadcrumbs";
import { NavLink } from "react-router-dom";
import styles from "./index.module.scss";

function Regions({ match }: any) {
  return (
    <span className={styles.span}>
      {match.params.subname || match.params.title} /{" "}
    </span>
  );
}

function Products({ match }: any) {
  return (
    <span className={styles.span}>
      {match.params.subname || match.params.title} /{" "}
    </span>
  );
}

function CustomPropsBreadcrumb({ text }: any) {
  return <span className={styles.span}>{text} / </span>;
}
function None() {
  return <span className={styles.span} />;
}

const routes = [
  {
    path: "/",
  },
  {
    path: "/admin",
    breadcrumb: None,
  },
  {
    path: "/admin/regions",
    breadcrumb: CustomPropsBreadcrumb,
    props: { text: "Region" },
  },
  {
    path: "/admin/regions/:id/:title",
    breadcrumb: Regions,
  },
  {
    path: "/admin/regions/:id/:title/:subid/:subname",
    breadcrumb: Regions,
  },
  {
    path: "/admin/regions/:id/:title/:subid",
    breadcrumb: None,
  },
  {
    path: "/admin/regions/type",
    breadcrumb: CustomPropsBreadcrumb,
    props: { text: "Types" },
  },
  {
    path: "/admin/quiz",
    breadcrumb: CustomPropsBreadcrumb,
    props: { text: "Quiz" },
  },
  {
    path: "/admin/quiz/type",
    breadcrumb: CustomPropsBreadcrumb,
    props: { text: "Types" },
  },
  {
    path: "/admin/orders-status",
    breadcrumb: CustomPropsBreadcrumb,
    props: { text: "Orders status" },
  },
  {
    path: "/admin/products",
    breadcrumb: CustomPropsBreadcrumb,
    props: { text: "Products" },
  },
  {
    path: "/admin/products/:id/:title",
    breadcrumb: Products,
  },
  {
    path: "/admin/products/:id",
    breadcrumb: None,
  },
  {
    path: "/admin/products/:id/:title/:subid/:subname",
    breadcrumb: Products,
  },
  {
    path: "/admin/products/:id/:title/:subid",
    breadcrumb: None,
  },
  {
    path: "/admin/products/create",
    breadcrumb: CustomPropsBreadcrumb,
    props: { text: "Create" },
  },
  {
    path: "/admin/products/type",
    breadcrumb: CustomPropsBreadcrumb,
    props: { text: "Type" },
  },
  {
    path: "/admin/products/measure",
    breadcrumb: CustomPropsBreadcrumb,
    props: { text: "Measure" },
  },
];

// map & render your breadcrumb components however you want.
function Breadcrumb() {
  const breadcrumbs = useBreadcrumbs(routes);

  return (
    <div className={styles.breadcrumb}>
      {breadcrumbs.map(({ match, breadcrumb }) => (
        <NavLink key={match.pathname} to={match.pathname}>
          {breadcrumb}
        </NavLink>
      ))}
    </div>
  );
}

export default Breadcrumb;

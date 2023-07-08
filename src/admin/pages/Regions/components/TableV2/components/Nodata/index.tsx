import nodata from "../../../../../../../_assets/svg/noData.svg";
import styles from "./index.module.scss";

function Nodata() {
  return (
    <div className={styles.noData}>
      <img src={nodata} alt="" />
      <h2>Category Empty</h2>
      <h4>
        You haven’t create category, let’s make category now by click below
      </h4>
    </div>
  );
}
export default Nodata;

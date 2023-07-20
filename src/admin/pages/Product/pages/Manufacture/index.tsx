import { useState } from "react";
import { useFormik } from "formik";
import { useGetProductsManufactureQuery } from "../../../../api/products.ts";
import validationSchema from "../../../../components/SearchValidation";
import { Table } from "../../../../../_components";
import styles from "./index.module.scss";

function ProductManufacture() {
  const [loading, setLoading] = useState(false);
  const [searchItem, setSearchItem] = useState("");
  const [page, setPage] = useState(0);

  const {
    data: manufacture,
    isLoading,
    refetch,
  } = useGetProductsManufactureQuery({ offset: page, search: searchItem });

  // @ts-ignore
  const handleChangePage = async (event: any, newPage: any) => {
    setPage(newPage * 10 - 10);
    setLoading(true);
    await refetch();
    setLoading(false);
  };

  const onSubmit = ({ search }: any) => {
    setSearchItem(search);
  };

  const { handleSubmit, getFieldMeta, setFieldValue, setFieldTouched } =
    useFormik({
      initialValues: { search: "" },
      validationSchema: validationSchema(),
      onSubmit,
    });

  const formControls = { getFieldMeta, setFieldValue, setFieldTouched };

  if (isLoading) return <div />;
  return (
    <div className={styles.manufacture}>
      <div className={styles.table}>
        <Table
          formControls={formControls}
          disableLinks
          actions={false}
          rowsName={["ID", "Category name"]}
          handleSubmit={handleSubmit}
          rows={manufacture}
          loading={loading}
          handleChangePage={handleChangePage}
          handleOpenFilter={null}
        />
      </div>
    </div>
  );
}

export default ProductManufacture;

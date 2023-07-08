import { useState } from "react";
import { useFormik } from "formik";
import validationSchema from "../../validationSchema.ts";
import { TableV2 } from "../../components";
import styles from "../../index.module.scss";
import { useGetProductsTypeQuery } from "../../../../api/products.ts";

function ProductType() {
  const [loading, setLoading] = useState(false);
  const [searchItem, setSearchItem] = useState("");
  const [, setOpenFilter] = useState(false);

  const handleOpenFilter = () => {
    setOpenFilter(true);
  };

  const [page, setPage] = useState(0);

  const {
    data: regions,
    isLoading,
    refetch,
  } = useGetProductsTypeQuery({ offset: page, search: searchItem });

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
      onSubmit,
      validationSchema: validationSchema(),
    });

  const formControls = { getFieldMeta, setFieldValue, setFieldTouched };

  if (isLoading) return <div />;
  return (
    <div className={styles.regions}>
      <div className={styles.table}>
        <TableV2
          formControls={formControls}
          disableLinks
          handleSubmit={handleSubmit}
          rows={regions}
          loading={loading}
          handleChangePage={handleChangePage}
          handleOpenFilter={handleOpenFilter}
        />
      </div>
    </div>
  );
}

export default ProductType;

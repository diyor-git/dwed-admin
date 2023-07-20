import { useState } from "react";
import { useFormik } from "formik";
import { useGetProductsTypeQuery } from "../../../../api/products.ts";
import validationSchema from "../../../../components/SearchValidation";
import {Table} from "../../../../../_components";

function ProductType() {
  const [loading, setLoading] = useState(false);
  const [searchItem, setSearchItem] = useState("");
  const [page, setPage] = useState(0);

  const {
    data: productsType,
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
    <div>
      <div>
        <Table
          formControls={formControls}
          disableLinks
          actions={false}
          rowsName={["ID", "Category name"]}
          handleSubmit={handleSubmit}
          rows={productsType}
          loading={loading}
          handleChangePage={handleChangePage}
          handleOpenFilter={null}
        />
      </div>
    </div>
  );
}

export default ProductType;

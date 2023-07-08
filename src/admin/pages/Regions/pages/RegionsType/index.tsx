import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import { useFormik } from "formik";
import { useGetRegionsTypeQuery } from "../../../../api/regions.ts";
import validationSchema from "../../validationSchema.ts";
import { Filter } from "../../../../../_components";
import { ModalV2, TableV2 } from "../../components";
import styles from "../../index.module.scss";

function RegionsType() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [searchItem, setSearchItem] = useState("");
  const [, setFilterValue] = useState("");
  const [openFilter, setOpenFilter] = useState(false);

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };
  const handleOpenFilter = () => {
    setOpenFilter(true);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [page, setPage] = useState(0);

  const {
    data: regions,
    isLoading,
    refetch,
  } = useGetRegionsTypeQuery({ offset: page, search: searchItem });

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
      <ModalV2 open={open} handleClose={handleClose} />
      <Filter
        open={openFilter}
        selectedValue={setFilterValue}
        onClose={handleCloseFilter}
      />
      <div className={styles.header}>
        <button type="button" onClick={handleClickOpen}>
          <AddIcon />
          Add category
        </button>
      </div>
      <div className={styles.table}>
        <TableV2
          rowsName={["ID", "Category name", "Actions"]}
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

export default RegionsType;

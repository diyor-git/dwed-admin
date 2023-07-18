import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import { useFormik } from "formik";
import styles from "../../index.module.scss";
import validationSchema from "../../validationSchema.ts";
import { Filter } from "../../../../../_components";
import { ModalV2 } from "../../components";
import { useGetQuizCategoryQuery } from "../../../../api/quiz.ts";
import Table from "../../components/Table";

function QuizType() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [, setFilterValue] = useState("");
  const [openFilter, setOpenFilter] = useState(false);
    const [searchItem, setSearchItem] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleOpenFilter = () => {
    setOpenFilter(true);
  };
  const handleCloseFilter = () => {
    setOpenFilter(false);
  };

  const [page, setPage] = useState(0);

  const {
    data: category,
    isLoading,
    refetch,
  } = useGetQuizCategoryQuery({ offset: page, search: searchItem });

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
    <div className={styles.quiz}>
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
        <Table
          disableLinks
          rowsName={[
            "ID",
            "Category name",
            "Subcateogry",
            "Status",
            "Who added",
            "Actions",
          ]}
          formControls={formControls}
          handleSubmit={handleSubmit}
          rows={category}
          loading={loading}
          handleChangePage={handleChangePage}
          handleOpenFilter={handleOpenFilter}
        />
      </div>
    </div>
  );
}

export default QuizType;

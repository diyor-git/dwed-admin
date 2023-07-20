import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import { useFormik } from "formik";
import { useSearchParams } from "react-router-dom";
import { Modal } from "../../components";
import { Filter, Table } from "../../../../../_components";
import {
  useDeleteQuizMutation,
  useGetQuizQuery,
} from "../../../../api/quiz.ts";
import styles from "./index.module.scss";
import validationSchema from "../../../../components/SearchValidation";

function Quizes() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [searchItem, setSearchItem] = useState("");
  const [, setFilterValue] = useState("");
  const [openFilter, setOpenFilter] = useState(false);
  const [searchParams] = useSearchParams();

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

  const parentParam = searchParams.get("parent") || 0;
  const {
    data: regions,
    isLoading,
    refetch,
  } = useGetQuizQuery({
    offset: page,
    search: searchItem,
    parent: parentParam,
  });

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

  const [deleteQuiz, { error }] = useDeleteQuizMutation();
  if (isLoading) return <div />;
  return (
    <div className={styles.regions}>
      <div>
        <Modal open={open} handleClose={handleClose} />
        <Filter
          open={openFilter}
          selectedValue={setFilterValue}
          onClose={handleCloseFilter}
        />
      </div>
      <div className={styles.header}>
        <button type="button" onClick={handleClickOpen}>
          <AddIcon />
          Add category
        </button>
      </div>
      <div className={styles.table}>
        <Table
          rowsName={["ID", "Name", "Subcategory", "Restart count", "Action"]}
          formControls={formControls}
          handleSubmit={handleSubmit}
          rows={regions}
          loading={loading}
          handleOpenFilter={handleOpenFilter}
          handleChangePage={handleChangePage}
          deleteMutation={deleteQuiz}
          error={error}
        />
      </div>
    </div>
  );
}

export default Quizes;

import { forwardRef } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { FilePond, registerPlugin } from "react-filepond";
// eslint-disable-next-line import/no-extraneous-dependencies
import "filepond/dist/filepond.min.css";
// eslint-disable-next-line import/no-extraneous-dependencies
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
// eslint-disable-next-line import/no-extraneous-dependencies
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
// eslint-disable-next-line import/no-extraneous-dependencies
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import styles from "./index.module.scss";

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

const DragDropFile = forwardRef(
  ({ fieldName, controls, ...props }: any, ref) => {
    const { setFieldValue, setFieldTouched } = controls;

    const handleChangeTouched = async (fileitems: any) => {
      console.log(fileitems[0].file);
      await setFieldValue("img", fileitems[0].file);
      setFieldTouched("img");
    };
    return (
      <div className={styles.input}>
        <FilePond
          className={styles.filepond}
          onupdatefiles={handleChangeTouched}
          onChange={(fileItems: any) => handleChangeTouched(fileItems)}
          allowMultiple={false}
          ref={ref}
          maxFiles={1}
          name="img"
          labelIdle="Upload image click here or<br/> Drag & Drop"
          {...props}
        />
      </div>
    );
  }
);

export default DragDropFile;

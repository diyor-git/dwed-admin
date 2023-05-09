import { Menu, MenuItem } from "@mui/material";
import i18next from "i18next";
import { useState } from "react";
import getCurrentLang from "../../../_utils/functions/getCurrentLang.ts";
import global from "../../../_assets/svg/global.svg";
import styles from "./index.module.scss";

const languages: any = {
  en: "English",
  ru: "Русский",
};

function ChooseLang() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const currentLang = getCurrentLang();
  const open = Boolean(anchorEl);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (lang: string) => {
    setAnchorEl(null);
    i18next.changeLanguage(lang);
  };

  return (
    <div className={styles.chooseLang}>
      <div className={styles.choose} onClick={handleClick}>
        <img src={global} alt="global" />
        <h4>{languages[currentLang]}</h4>
      </div>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem onClick={() => handleClose("en")}>English</MenuItem>
        <MenuItem onClick={() => handleClose("ru")}>Русский</MenuItem>
      </Menu>
    </div>
  );
}

export default ChooseLang;

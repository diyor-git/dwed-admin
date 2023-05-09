function getCurrentLang() {
  const lang = localStorage.getItem("i18nextLng") || "eng";
  return lang.toString();
}

export default getCurrentLang;

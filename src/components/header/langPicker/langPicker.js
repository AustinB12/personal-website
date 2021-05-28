import React from "react";
import { useTranslation } from "react-i18next";

const LangPicker = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <select onChange={(e) => changeLanguage(e.target.value)}>
      <option value="en">EN</option>
      <option value="es">ES</option>
      <option value="pt">PT</option>
      <option value="de">DE</option>
    </select>
  );
};
export default LangPicker;

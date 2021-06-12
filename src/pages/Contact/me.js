import React from "react";
import { useTranslation } from "react-i18next";

import Header from "../../components/header/header";

import "./me.css";

const Me = (props) => {
  const { t } = useTranslation();

  return (
    <div className={"me-wrapper"}>
      <Header
        lang={props.lang}
        setLang={props.setLang}
        currentTheme={props.currentTheme}
        changeTheme={props.changeTheme}
      />
      <h1>{t("contact-me")}!</h1>
      <article>
        <p>{t("email")}: austinzbaird@gmail.com</p>
        <p>
          LinkedIn:{" "}
          <a href="https://www.linkedin.com/in/%F0%9F%92%BB-austin-baird-2a1490171/">
            My Profile
          </a>
        </p>
      </article>
    </div>
  );
};
export default Me;

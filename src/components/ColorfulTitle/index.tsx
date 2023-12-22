import React from "react";

import style from "./index.module.scss";

type ColorfulTitle = {
  title: string;
  size?: "sm" | "md" | "lg";
};

const ColorfulTitle: React.FC<ColorfulTitle> = ({ title, size }) => {
  return (
    <div className={`${style.colorFulTitle} ${style[size ?? "md"]}`}>
      {title}
    </div>
  );
};

export default ColorfulTitle;

import type { ButtonHTMLAttributes } from "react";
import style from "./style.module.scss";

export default function Button<T>(props: ButtonHTMLAttributes<T>) {
  const { className, children, ...rest } = props;
  return (
    <button className={`${style.colorfulBtn} ${style.className}`}>
      {children}
    </button>
  );
}

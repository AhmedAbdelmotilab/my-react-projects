import type { MouseEvent } from "react";
import styles from "./Button.module.css";
interface ButtonProps {
  children: React.ReactNode;
  onclick?: (e: MouseEvent<HTMLButtonElement>) => void;
  type: string;
}
export default function Button({ children, onclick, type }: ButtonProps) {
  return (
    <button className={`${styles.btn} ${styles[type]}`} onClick={onclick}>
      {children}
    </button>
  );
}

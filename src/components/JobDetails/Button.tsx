import { FC } from "react";
import styles from '../../styles'

interface ButtonProps {
  btnStyle?: string
}

const Button:FC<ButtonProps> = ({btnStyle}) => {
  return (
    <button className={`${btnStyle} ${styles.flexCenter} bg-starBlue w-[127px] h-[52px] rounded-[8px] my-8`}>
      <h2 className="text-white font-semibold text-[12px] leading-16">
        APPLY NOW
      </h2>
    </button>
  );
};

export default Button;

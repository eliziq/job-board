import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { backBtnArrow } from "../../assets";
import styles from "../../styles";

const BackButton: FC = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className={`${styles.flexCenter} my-[60px] bg-lightGrey min-w-[213px] rounded-[8px] py-[18px] px-[26px] ss:ml-[5vw] ml-4`}
    >
      <img src={backBtnArrow} alt="" />
      <h2 className="ml-[20px] text-textBlue font-semibold text-[12px] leading-16">
        RETURN TO JOB BOARD
      </h2>
    </button>
  );
};

export default BackButton;

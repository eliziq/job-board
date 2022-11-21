import styles from "../../styles";

interface ButtonFlatProps {
  icon: string;
  text: string;
  onClick?: () => void;
}

const ButtonFlat = ({ icon, text, onClick }: ButtonFlatProps) => {
  return (
    <button onClick={onClick} className={`${styles.flexCenter} ss:ml-6 ss:mr-0 mr-6`}>
      <img src={icon} alt="" className=" h-[20px] " />
      <h2 className="ml-[10px] text-[18px] leading-24 text-textBlue font-mono">{text}</h2>
    </button>
  );
};

export default ButtonFlat;

import styles from "../../styles";

interface Props {
  children: string;
  containerStyle?: string;
  textStyle?: string;
}

const Benefit = ({ children, containerStyle, textStyle }: Props) => {
  return (
    <div
      className={`${styles.benefitContainer} ${
        containerStyle ? containerStyle : "bg-transpBlue border-lightBlue"
      }`}
    >
      <h3 className={`${styles.benefitsText} ${textStyle}`}>{children}</h3>
    </div>
  );
};

export default Benefit;

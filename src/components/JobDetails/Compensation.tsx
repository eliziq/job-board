import { FC } from "react";
import { IJob } from "../../interfaces";
import styles from "../../styles";
import { formatSalary } from "../../util/helpers";

interface CompensationProps {
  salary: IJob["salary"];
}

const Compensation: FC<CompensationProps> = ({ salary }) => {
  return (
    <div className="flex flex-col ss:ml-[40px]">
      <h2 className={styles.heading2Scalable}>€ {formatSalary(salary)}</h2>
      <h3 className={`${styles.paragraph} font-mono`}>Brutto, per year</h3>
    </div>
  );
};

export default Compensation;

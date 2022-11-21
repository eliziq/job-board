import SectionTitle from "./SectionTitle";
import Benefit from "./Benefit";
import { IJob } from "../../interfaces";
import { FC } from "react";
import styles from "../../styles";

interface AdditionalInfoProps {
  employment_type: IJob["employment_type"];
  benefits: IJob["benefits"];
}

const AdditionalInfo: FC<AdditionalInfoProps> = ({
  employment_type,
  benefits,
}) => {
  return (
    <div className="pt-6">
      <SectionTitle>Additioinal Info</SectionTitle>
      <h2 className={`${styles.paragraph} pt-4 pb-2`}>Employment type</h2>
      <div className="grid gap-2 grid-cols-3 pb-4  ">
        {benefits.map((item: string) => {
          return <Benefit>{item}</Benefit>;
        })}
      </div>
      <h2 className={`${styles.paragraph} py-2`}>Benefits</h2>
      <div className="grid gap-2 grid-cols-3 pb-4 ">
        {employment_type.map((item: string) => {
          return (
            <Benefit
              containerStyle="bg-transpYellow border-yellow"
              textStyle="!text-darkYellow"
            >
              {item}
            </Benefit>
          );
        })}
      </div>
    </div>
  );
};

export default AdditionalInfo;

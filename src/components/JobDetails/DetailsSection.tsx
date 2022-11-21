import { FC } from "react";
import { IJob } from "../../interfaces";
import { bookmark, bookmarkFilled, bullet, share } from "../../assets";
import styles from "../../styles";
import { calculateDate } from "../../util/helpers";
import Compensation from "./Compensation";
import SectionTitle from "./SectionTitle";
import Button from "./Button";
import ButtonFlat from "./ButtonFlat";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { removeFromSaved, saveJob } from "../../store/jobsSlice";

interface DetailSectionProps {
  id: string;
  title: IJob["title"];
  name: IJob["name"];
  updated: IJob["updatedAt"];
  salary: IJob["salary"];
  description: IJob["description"];
  benefitsDesc: IJob["benefitsDesc"];
  responsibilities: IJob["responsibilities"];
}

const DetailsSection: FC<DetailSectionProps> = ({
  id,
  title,
  updated,
  salary,
  description,
  benefitsDesc,
  responsibilities,
}) => {
  const dispatch = useAppDispatch();
  const savedIds = useAppSelector((state) => state.jobs.savedJobs);
  const isSaved = savedIds.includes(String(id));
  const toggleSavedHandler = (isSaved: boolean) => {
    if (isSaved) {
      dispatch(removeFromSaved({ id }));
    } else {
      dispatch(saveJob({ id }));
    }
  };
  const renderButtons = () => (
    <div className="ss:hidden flex my-6">
      <ButtonFlat
        icon={isSaved ? bookmarkFilled : bookmark}
        text="Save to my list"
        onClick={() => toggleSavedHandler(isSaved)}
      />
      <ButtonFlat icon={share} text="Share" />
    </div>
  );

  return (
    <div>
      <SectionTitle id={id} flatBtns={true}>
        Job Details
      </SectionTitle>
      {renderButtons()}
      <Button btnStyle="ss:flex hidden" />
      <div className="flex ss:flex-row flex-col">
        <h1 className={`${styles.heading2} flex-1 `}>{title}</h1>
        <div className="flex justify-between items-center ss:my-0 my-2">
          <p
            className={`${styles.createdAt} text-textGrey my-2 ss:hidden`}
          >
            {calculateDate(updated)}
          </p>
          <Compensation salary={salary} />
        </div>
      </div>
      <p className={`${styles.paragraph} text-textGrey my-2 ss:flex hidden`}>
        {calculateDate(updated)}
      </p>
      <p className={styles.paragraph}>{description}</p>
      <h2 className={`${styles.heading2} mt-6 mb-2`}>Responsibilities</h2>
      <p className={styles.paragraph}>{responsibilities}</p>
      <h2 className={`${styles.heading2} mt-6 mb-2`}>
        Compensation & Benefits
      </h2>
      <p className={styles.paragraph}>
        Our physicians enjoy a wide range of benefits, including:
      </p>
      <ul className={styles.paragraph}>
        {benefitsDesc.map((benefit, i) => {
          return (
            <li className={`${styles.paragraph} flex mr-2`} key={i}>
              <img src={bullet} alt="" className="mr-2" />
              {benefit}
            </li>
          );
        })}
      </ul>
      <Button />
    </div>
  );
};

export default DetailsSection;



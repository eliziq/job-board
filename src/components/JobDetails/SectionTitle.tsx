import ButtonFlat from "./ButtonFlat";
import { share, bookmark, bookmarkFilled } from "../../assets";
import { saveJob, removeFromSaved } from "../../store/jobsSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

interface Props {
  children: string;
  flatBtns?: boolean;
  id?: string;
  titleStyle?: string;
}

const SectionTitle = ({ children, flatBtns, id, titleStyle }: Props) => {

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
    <div className="ss:flex hidden">
      <ButtonFlat
        icon={isSaved ? bookmarkFilled : bookmark}
        text="Save to my list"
        onClick={() => toggleSavedHandler(isSaved)}
      />
      <ButtonFlat icon={share} text="Share" />
    </div>
  );

  return (
    <div
      className={`${titleStyle} flex justify-between border-solid border-b-[1px] border-lightGrey mb-2 pb-2`}
    >
      <h2 className="font-bold leading-[34px] text-[28px] text-textBlue">
        {children}
      </h2>
      {flatBtns ? renderButtons() : ""}
    </div>
  );
};

export default SectionTitle;

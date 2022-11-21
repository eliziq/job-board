import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { locationImg, bookmark, bookmarkFilled } from "../../assets";
import { IJob } from "../../interfaces";
import { calculateDate, geocodeLocation } from "../../util/helpers";
import { saveJob, removeFromSaved } from "../../store/jobsSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import Rating from "./Rating";
import styles from "../../styles";

interface JobBarProps {
  id: IJob["id"];
  pictures: IJob["pictures"];
  title: IJob["title"];
  name: IJob["name"];
  address: IJob["address"];
  updatedAt: IJob["updatedAt"];
  location: IJob["location"];
}

const JobBar: FC<JobBarProps> = ({
  id,
  pictures,
  title,
  name,
  address,
  updatedAt,
  location,
}) => {
  const [rating, setRating] = useState(0);
  const [displayLocation, setDisplayLocation] = useState("");

  let navigate = useNavigate();

  const dispatch = useAppDispatch();
  const savedIds = useAppSelector((state) => state.jobs.savedJobs);
  const isSaved = savedIds.includes(id);

  const toggleSavedHandler = () => {
    if (isSaved) {
      dispatch(removeFromSaved({ id: id }));
    } else {
      dispatch(saveJob({ id: id }));
    }
  };

  const key = String(process.env.REACT_APP_MAPS_API_KEY);
  geocodeLocation(location.lat, location.lng, key).then((res) =>
    setDisplayLocation(res)
  );

  return (
    <div
      onClick={(e) => {
        if ((e.target as HTMLElement).ariaLabel !== "star") {
          navigate(`/details/${id}`);
        }
      }}
      className="flex flex-row ss:bg-white bg-secondary mb-2 rounded-[8px] ss:py-6 py-4 px-4"
    >
      <div></div>
      <div>
        <img src={pictures[0]} alt="" className={styles.image} />
      </div>
      <div className="flex flex-1 ss:flex-row flex-col-reverse">
        <div className="pl-6 ss:pr-8 flex-1">
          <h2 className={styles.jobTitle}>{title}</h2>
          <p className="my-2 leading-[25px] text-textGrey ">
            {name} • {address} - SMTH
          </p>
          <div className="flex-row flex items-start">
            <img src={locationImg} alt="" />
            <h4 className="leading-[25px] ml-2 text-textGrey">
              {displayLocation}
            </h4>
          </div>
        </div>
        <div className="flex ss:mb-0 mb-4 justify-between">
          <Rating
            rating={rating}
            onRating={(rate) => {
              setRating(rate);
            }}
          />
          <div className="flex flex-col justify-between items-end cursor-pointer">
            <div onClick={toggleSavedHandler} className="ss:flex hidden">
              <img
                src={isSaved ? bookmarkFilled : bookmark}
                alt=""
                aria-label="star"
              />
            </div>
            <div>
              <p className={styles.createdAt}>{calculateDate(updatedAt)}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobBar;

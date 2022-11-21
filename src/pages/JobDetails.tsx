import { FC, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { selectSelectedJob, setSelectedJob } from "../store/jobsSlice";
import {
  DetailsSection,
  AdditionalInfo,
  Contacts,
  BackButton,
  ImgSection,
} from "../components/JobDetails";

const JobDetails: FC = () => {
  const dispatch = useAppDispatch();
  const params = useParams();
  useEffect(() => {
    dispatch(setSelectedJob(params.id));
  }, [dispatch]);

  const jobDetails = useAppSelector(selectSelectedJob) || {
    name: "",
    title: "",
    updatedAt: "",
    salary: "",
    description: "",
    responsibilities: "",
    benefitsDesc: [],
    employment_type: [],
    benefits: [],
    pictures: [],
    location: { lat: 0, lng: 0 },
    phone: "",
    email: "",
    id: "",
  };

  return (
    <div>
      <div className="flex ss:flex-row flex-col w-[90%] max-w-[1400px] mt-8 mx-auto">
        <div className="flex-[5] flex-col justify-center align-center w-[100%]">
          <DetailsSection
            name={jobDetails.name}
            title={jobDetails.title}
            updated={jobDetails.updatedAt}
            salary={jobDetails.salary}
            description={jobDetails.description}
            benefitsDesc={jobDetails.benefitsDesc}
            responsibilities={jobDetails.responsibilities}
            id={jobDetails.id}
          />
          <AdditionalInfo
            employment_type={jobDetails.employment_type}
            benefits={jobDetails.benefits}
          />
          <ImgSection pictures={jobDetails.pictures} />
        </div>
        <Contacts
          name={jobDetails.name}
          location={jobDetails.location}
          phone={jobDetails.phone}
          email={jobDetails.email}
        />
      </div>
      <BackButton />
    </div>
  );
};

export default JobDetails;

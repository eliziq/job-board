import JobBar from "../components/JobBoard/JobBar";
import Pagination from "../components/JobBoard/Pagination";
import { useEffect } from "react";
import { fetchAsyncJobList } from "../store/jobsSlice";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import { RootState } from "../store/store";

const JobBoard = () => {
  const dispatch = useAppDispatch();
  const jobsList = useAppSelector((state: RootState) => state.jobs.jobList);
  useEffect(() => {
    dispatch(fetchAsyncJobList());
  }, [dispatch]);


  return (
    <section className="bg-primary flex flex-col w-full items-center">
      <div className="max-w-[1400px] mt-8 mx-2">
        {jobsList.map((job) => {
          return (
            <JobBar
              key={job.id}
              id={job.id}
              pictures={job.pictures}
              title={job.title}
              name={job.name}
              address={job.address}
              updatedAt={job.updatedAt}
              location={job.location}
            />
          );
        })}
      </div>
      <Pagination />
    </section>
  );
};

export default JobBoard;

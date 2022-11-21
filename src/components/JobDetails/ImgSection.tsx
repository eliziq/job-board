import { FC } from "react";
import { IJob } from "../../interfaces";
import SectionTitle from "./SectionTitle";

interface ImgSectionProps {
  pictures: IJob["pictures"];
}

const ImgSection: FC<ImgSectionProps> = ({ pictures }) => {
  return (
    <div>
      <SectionTitle>Attached Images</SectionTitle>
      <div className="w-[100%] overflow-x-auto">
        <div className="grid gap-[10px] grid-cols-3 mt-2 mb-6 w-[620px]">
          {pictures.map((picture, i) => {
            return (
              <img
              key={i}
                src={picture}
                alt=""
                className="min-w-[200px] h-[116px] object-cover rounded-[8px]"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ImgSection;

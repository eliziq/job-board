import { FC, useState } from "react";
import { IJob } from "../../interfaces";
import Map from "./Map";
import { geocodeLocation, formatPhone } from "../../util/helpers";
import SectionTitle from "./SectionTitle";
import { locationImg } from "../../assets";

interface ContactsProps {
  name: IJob["name"];
  location: IJob["location"];
  phone: IJob["phone"];
  email: IJob["email"];
}

const Contacts: FC<ContactsProps> = ({ name, location, phone, email }) => {
  const [displayLocation, setDisplayLocation] = useState("");
  const key = String(process.env.REACT_APP_MAPS_API_KEY);
  geocodeLocation(location.lat, location.lng, key).then((res) =>
    setDisplayLocation(res)
  );
  return (
    <div>
      <SectionTitle titleStyle="ss:hidden">Contacts</SectionTitle>
      <div className="rounded-[8px] bg-starBlue ss:ml-20 mb-5 ss:mt-0 mt-4 min-w-[250px] aspect-[10/11] overflow-hidden">
        <div
          className={`justify-center items-start flex flex-col h-[50%] ss:mx-12 mx-6 text-left`}
        >
          <h2 className="font-bold text-[20px] leading-[25px] text-[#E7EAF0]">
            {name}. <br />
            {displayLocation === "Ocean Depths"
              ? "Sponge Bob Residency."
              : "A Normal Business Center."}
          </h2>
          <p className="text-[18px] leading-[24px] text-[#E7EAF0] flex font-mono my-3">
            <img src={locationImg} alt="" className="mr-2" />
            {displayLocation}
          </p>
          <p className="text-[18px] leading-[24px] text-[#E7EAF0] font-mono ">
            {formatPhone(phone)} <br />
            {email}
          </p>
        </div>
        <Map location={location} />
      </div>
    </div>
  );
};

export default Contacts;

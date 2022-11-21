import Geocode from "react-geocode";
import { IJob } from "../interfaces";
// TEXT FORMATTING
export const toDescription = (description: string): string => {
  return description.slice(0, description.indexOf("Responsopilities:"));
};

export const toResponsibilities = (description: string): string => {
  return description
    .slice(
      description.indexOf("Responsopilities:"),
      description.indexOf("Compensation & Benefits:")
    )
    .replace("Responsopilities:", "");
};

export const toBenefitsDesc = (description: string): string[] => {
  const benArr = description
    .slice(description.indexOf("Compensation & Benefits:"))
    .replace("Compensation & Benefits:", "")
    .split(".");
  benArr.pop();
  return benArr;
};

export const transformJob = (job: IJob) => {
  job.benefitsDesc = toBenefitsDesc(job.description);
  job.responsibilities = toResponsibilities(job.description);
  job.description = toDescription(job.description);
  job.location.lng = Number(job.location.long);
  delete job.location.long;
  job.pictures = job.pictures.map((pic) => {
    return `${pic}?random=${Math.floor(Math.random() * 100)}`;
  });

  return job;
};

//DATE FORMATTING
export const calculateDate = (date: string): string => {
  //let`s pretend it`s 2014 for better representation
  const today = new Date("2014-08-14T03:19:59.621Z").getTime();
  const postedDate = new Date(date).getTime();
  let difference = today - postedDate;

  let calc = difference / (1000 * 3600 * 24);
  let res: string;

  if (calc > 360) {
    res = `${Math.floor(calc / 360)} years`;
  } else if (calc > 30) {
    res = `${Math.floor(calc / 30)} mounth`;
  } else if (calc > 7) {
    res = `${Math.floor(calc / 7)} weeks`;
  } else if (calc > 1) {
    res = `${Math.floor(calc)} days`;
  } else {
    res = `${Math.floor(calc * 24)} hours`;
  }

  return `Posted ${res} ago`;
};

//COMPENSATION FORMATTING
export const formatSalary = (salary: string): string => {
  return salary.replaceAll("k", " 000").replace("-", "—");
};

//PHONE NUMBER FORMATTING
export const formatPhone = (phone: string): string => {
  return `${phone.slice(0, 3)} (${phone.slice(3, 6)}) ${phone.slice(6,9)} - ${phone.slice(9, 14)}`;
};

//GOOGLE MAPS
export const geocodeLocation = (
  lat: string | number,
  lng: string | number,
  apiKey: string
) => {
  return Geocode.fromLatLng(String(lat), String(lng), apiKey).then(
    (response) => {
      const address = response.results[0].formatted_address;
      let city, state, country;
      for (let i = 0; i < response.results[0].address_components.length; i++) {
        for (
          let j = 0;
          j < response.results[0].address_components[i].types.length;
          j++
        ) {
          switch (response.results[0].address_components[i].types[j]) {
            case "locality":
              city = response.results[0].address_components[i].long_name;
              break;
            case "administrative_area_level_1":
              state = response.results[0].address_components[i].long_name;
              break;
            case "country":
              country = response.results[0].address_components[i].long_name;
              break;
          }
        }
      }
      //or return address
      return country ? `${city}, ${state}, ${country}` : "Ocean Depths";
    },
    (error) => {
      console.error(error);
      return "error geocoding";
    }
  );
};

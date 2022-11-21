const styles = {
  flexCenter: "flex justify-center items-center",

  heading2: "text-textBlue font-bold text-[24px] leading-30",
  heading2Scalable:
    "text-textBlue font-bold ss:text-[24px] ss:leading-[30px] text-[20px] leading-[25px]",
  paragraph: "text-textBlue  text-[18px] leading-24 flex-1 font-mono ",

  benefitContainer:
    "flex justify-center rounded-[10px] border-solid border-[1px] text-center items-center",
  benefitsText: "text-lightBlue font-bold leading-[16px] py-4",
  //JOB BAR
  image:
    "ss:w-[85px] w-[66px] ss:h-[85px] h-[66px] ss:mt-0 mt-9 rounded-full object-cover",
  jobTitle:
    "ss:font-bold font-normal ss:text-[20px] ss:leading-[25px] text-[1.125rem] leading-[24px] text-textBlue",
  createdAt:
    "text-textGrey ss:w-[160px] flex ss:text-[16px] ss:leading-[25px] text-[14px] leading-[17px] justify-end ss:font-normal font-light",

  // PAGINATION
  pageNum: `h-[100%] flex flex-1 justify-center items-center font-bold text-textBlue ss:text-[21px] ss:leading-[25px] text-[16px] leading-[20px] border-b-[3px] border-transparent`,
  activePageNum: `text-lightBlue !border-lightBlue `,
  nav: `flex justify-center items-center flex-1 h-[60%] ss:min-w-[70px] min-w-[40px]`,
  navContainer: `flex justify-between items-center ss:w-[515px] w-[100%] ss:h-[52px] h-[40px] bg-white rounded-[10px] ss:m-6`,
};

export default styles;

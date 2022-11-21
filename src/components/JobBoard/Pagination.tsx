import { FC } from "react";
import { arrowLeft, arrowRight } from "../../assets";
import styles from "../../styles";
import ReactPaginate from "react-paginate";

const Pagination: FC = () => (
  <div className="ss:p-0 p-2 ss:w-[515px] w-[100%]">
  <ReactPaginate
    pageCount={18}
    pageRangeDisplayed={5}
    marginPagesDisplayed={1}
    previousLabel={<img src={arrowLeft} alt="" className="ss:flex hidden" />}
    nextLabel={<img src={arrowRight} alt="" className="ss:flex hidden" />}
    containerClassName={`${styles.navContainer} `}
    previousClassName={`${styles.nav} border-r-2 mr-11`}
    nextClassName={`${styles.nav} border-l-2 ml-11`}
    breakClassName={styles.pageNum}
    pageClassName={styles.pageNum}
    activeClassName={styles.activePageNum}
  /></div>
);

export default Pagination;

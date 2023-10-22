import style from "./Pagination.module.css";
const Pagination = ({ currentPage, totalPage, onPageChange }) => {
  const pageNumbers = Array.from(
    { length: totalPage },
    (_, index) => index + 1
  );

  return (
    <div className={style.paginationcontainer}>
      <div className={style.prevnextconteiner}>
        <button
        className={style.prevButton}
          onClick={() => {
            onPageChange(currentPage - 1);
          }}
          disabled={currentPage === 1}
        >
          Preview
        </button>
      </div>
      <div className={style.numberpage}>
        {pageNumbers.map((page) => (
          <button
            className={`${style.pagebutton} ${page===currentPage? style.active : ""}`}
            key={page}
            onClick={() => {
              onPageChange(page);
            }}
          >
            {page}
          </button>
        ))}
      </div>
      <div className={style.prevnextconteiner}>
        <button
        className={style.nextButton}
          onClick={() => {
            onPageChange(currentPage + 1);
          }}
          disabled={currentPage === totalPage}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;

import PaginateButton from "../atoms/paginate-button";

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  const paginate = (pageNumber) => onPageChange(pageNumber);
  const nextPage = () => onPageChange(currentPage + 1);
  const prevPage = () => onPageChange(currentPage - 1);

  const renderPagination = () => {
    let pages = [];
    if (totalPages <= 6) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(<PaginateButton key={i} onClick={() => paginate(i)} active={currentPage == i} text={i} />);
      }
    } else {
      // First Page Navigation
      pages.push(<PaginateButton key={1} onClick={() => paginate(1)} active={currentPage == 1} text={1} />);
      let lowVal = Math.max(2, currentPage - 1);
      let highVal = Math.min(totalPages - 1, currentPage + 1);
      // Ellipsis Left
      if (lowVal > 2) {
        pages.push(<span className={`text-bold p-2`}>...</span>);
      }
      // Other Page Navigation
      for (let i = lowVal; i <= highVal; i++) {
        pages.push(<PaginateButton key={i} onClick={() => paginate(i)} active={currentPage == i} text={i} />);
      }
      // Ellipsis Right
      if (highVal < totalPages - 1) {
        pages.push(<span className={`text-bold p-2`}>...</span>);
      }
      // Last Page Navigation
      pages.push(<PaginateButton key={totalPages} onClick={() => paginate(totalPages)} active={currentPage == totalPages} text={totalPages} />);
    }
    return pages;
  };

  return (
    <div className="flex justify-between mx-auto w-fit gap-1">
      {currentPage != 1 && <PaginateButton onClick={prevPage} text="Prev" />}
      {renderPagination()}
      {currentPage != totalPages && <PaginateButton onClick={nextPage} text="Next" />}
    </div>
  );
}

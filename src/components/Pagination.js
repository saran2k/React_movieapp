import React from "react";
import PropTypes from 'prop-types';
import '../App.css';  // Import App.css for pagination styles

const Pagination = ({ itemsCount, pageSize, onPageChange, currentPage }) => {
    const pagesCount = Math.ceil(itemsCount / pageSize);
    const maxPageDisplay = 5;  // Maximum number of visible pages

    if (pagesCount <= 1) return null;

    const halfPageDisplay = Math.floor(maxPageDisplay / 2);
    const startPage = Math.max(1, currentPage - halfPageDisplay);
    const endPage = Math.min(pagesCount, startPage + maxPageDisplay - 1);
    const pages = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);

    return (
        <nav aria-label="Pagination Navigation">
            <ul className="pagination justify-content-center">
                <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                    <button 
                        className="page-link" 
                        onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        aria-label="Previous Page"
                    >
                        Previous
                    </button>
                </li>

                {startPage > 1 && (
                    <>
                        <li className="page-item">
                            <button 
                                className="page-link" 
                                onClick={() => onPageChange(1)} 
                                aria-label="First Page"
                            >
                                1
                            </button>
                        </li>
                        {startPage > 2 && (
                            <li className="page-item disabled">
                                <span className="page-link">...</span>
                            </li>
                        )}
                    </>
                )}

                {pages.map(page => (
                    <li key={page} className={`page-item ${page === currentPage ? 'active' : ''}`}>
                        <button 
                            className="page-link" 
                            onClick={() => onPageChange(page)} 
                            aria-label={`Page ${page}`}
                        >
                            {page}
                        </button>
                    </li>
                ))}

                {endPage < pagesCount && (
                    <>
                        {endPage < pagesCount - 1 && (
                            <li className="page-item disabled">
                                <span className="page-link">...</span>
                            </li>
                        )}
                        <li className="page-item">
                            <button 
                                className="page-link" 
                                onClick={() => onPageChange(pagesCount)} 
                                aria-label={`Last Page (${pagesCount})`}
                            >
                                {pagesCount}
                            </button>
                        </li>
                    </>
                )}

                <li className={`page-item ${currentPage === pagesCount ? 'disabled' : ''}`}>
                    <button 
                        className="page-link" 
                        onClick={() => currentPage < pagesCount && onPageChange(currentPage + 1)}
                        disabled={currentPage === pagesCount}
                        aria-label="Next Page"
                    >
                        Next
                    </button>
                </li>
            </ul>
        </nav>
    );
};

Pagination.propTypes = {
    itemsCount: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    currentPage: PropTypes.number.isRequired
};

export default Pagination;

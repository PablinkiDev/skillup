import styles from './Pagination.module.css'

export function Pagination({ currentPage, totalPages, onPageChange }) {
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1)
    
    const handlePrevious = (event) => {
        event.preventDefault()
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    }

    const handleChangePage = (event, page) => {
        event.preventDefault()
        onPageChange(page)
    }

    const handleNext = (event) => {
        event.preventDefault()
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1)
        }
    }

    return (
        <nav className={styles.nav}>
            <a href='#' className={`${styles.page} ${styles.hover}`} onClick={(event) => handlePrevious(event, currentPage)}>
                <svg xmlns="http://www.w3.org/2000/svg" width='16px' fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>
            </a>

            { pages.map((p) => {
                return <a href='#'  key={p} className={`${p === currentPage ? `${styles.page} ${styles.current}` : `${styles.page} ${styles.hover}`}`} onClick={(event) => handleChangePage(event, p)}>{p}</a>
            }) }

            <a href='#' className={`${styles.page} ${styles.hover}`} onClick={(event) => handleNext(event, currentPage)}>
                <svg xmlns="http://www.w3.org/2000/svg" width='16px' fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
            </a>
        </nav>
    )
}
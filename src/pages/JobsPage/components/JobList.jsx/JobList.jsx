
import jobs from '../../../../data/jobs.json'
import { JobItem } from '../JobItem.jsx/JobItem'
import { Pagination } from '../Pagination/Pagination'
import styles from './JobList.module.css'

export function JobList({ currentPage, searchFilter, onPageChange, filters }) {
    const TOTAL_PER_PAGE = 5;

    const jobFilter = jobs.filter((job) => {
        return (
            (filters.technology === '' || job.tecnologia.includes(filters.technology.toUpperCase())) &&
            (filters.mode === '' || job.modalidad.toLowerCase() === filters.mode) &&
            (filters.level === '' || job.nivelExperiencia.toLowerCase() === filters.level)
        )
    })

    const jobWitchFilters = jobFilter.filter((job) => job.nombre.toLocaleLowerCase().includes(searchFilter.toLocaleLowerCase()));

    const totalPages = Math.ceil(jobWitchFilters.length / TOTAL_PER_PAGE);

    const jobsPagination = jobWitchFilters.slice((currentPage - 1) * TOTAL_PER_PAGE, currentPage * TOTAL_PER_PAGE)


    return (
        <>
        <ul className={styles.list}>
            { jobsPagination.map((j) => {
                return <JobItem key={j.id} job={j} />
            }) }
        </ul>
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} />
        </>
    )
}
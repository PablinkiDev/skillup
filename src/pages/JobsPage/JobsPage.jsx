import { useState } from 'react'
import styles from './JobsPage.module.css'
import { JobForm } from './components/JobForm/JobForm'
import { JobList } from './components/JobList.jsx/JobList'

export function JobsPage() {
    const [searchFilter, setSearchFilter] = useState('')
    const [currentPage, setCurrentPage] = useState(1);
    const [filter, setFilter] = useState({
        technology: '',
        mode: '',
        level: ''
    })

    const handlePageChange = (page) => setCurrentPage(page); 

    const handleSearchFilter = (text) => {
        setSearchFilter(text)
        setCurrentPage(1);
    }

    const handleFilter = (filters) => {
        setFilter(filters)
    }

    return (
        <main className={styles.main}>
            <div className={styles.jobsHeader}>
                <h1>Encuentra tu próximo trabajo</h1>
                <p>Explora miles de oportunidades en el sector tecnológico</p>
            </div>
            <JobForm onChangeSearch={handleSearchFilter} onChangeFilter={handleFilter} />
            <JobList currentPage={currentPage} filters={filter} searchFilter={searchFilter} onPageChange={handlePageChange}/>
        </main>
    )
}
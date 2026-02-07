import { useState } from 'react'
import styles from './JobsPage.module.css'
import { JobForm } from './components/JobForm/JobForm'
import { JobList } from './components/JobList.jsx/JobList'
import { useLocalStorage } from '../../hooks/useLocalStorage'

export function JobsPage() {
    const [searchFilter, setSearchFilter] = useState('')
    const [currentPage, setCurrentPage] = useState(1);
    const [haveFilters, setHaveFilters] = useState(false);

    const [filtersLocalStorage, setFiltersLocalStorage] = useLocalStorage('filters', {
        technology: '',
        mode: '',
        level: ''
    });
    
    const [filter, setFilter] = useState(filtersLocalStorage)


    const handlePageChange = (page) => setCurrentPage(page); 

    const handleSearchFilter = (text) => {
        setSearchFilter(text)
        setCurrentPage(1);
        setHaveFilters(true);
    }

    const handleFilter = (filters) => {
        setFilter(filters)
        setFiltersLocalStorage(filters)
        setCurrentPage(1);
        setHaveFilters(true);
    }
    
    const handleResetFilter = () => {
        setFilter({
            technology: '',
            mode: '',
            level: ''
        });
        setHaveFilters(false);
        setFiltersLocalStorage({
            technology: '',
            mode: '',
            level: ''
        })
    }

    return (
        <main className={styles.main}>
            <div className={styles.jobsHeader}>
                <h1>Encuentra tu próximo trabajo</h1>
                <p>Explora miles de oportunidades en el sector tecnológico</p>
            </div>
            <JobForm onChangeSearch={handleSearchFilter} onChangeFilter={handleFilter} haveFilters={haveFilters} onResetFilter={handleResetFilter} />
            <JobList currentPage={currentPage} filters={filter} searchFilter={searchFilter} onPageChange={handlePageChange}/>
        </main>
    )
}
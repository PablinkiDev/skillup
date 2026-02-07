
import { useEffect, useState } from 'react';
import { JobItem } from '../JobItem.jsx/JobItem'
import { Pagination } from '../Pagination/Pagination'
import styles from './JobList.module.css'

export function JobList({ currentPage, searchFilter, onPageChange, filters }) {
    const TOTAL_PER_PAGE = 5;
    const [jobs, setJobs] = useState([]);
    const [totalJobs, setTotalJobs] = useState(0);
    const [loading, setLoading] = useState(false);

    const params = new URLSearchParams();

    if (searchFilter) params.append('text', searchFilter);
    if (filters.technology) params.append('technology', filters.technology);
    if (filters.mode) params.append('type', filters.mode);
    if (filters.level) params.append('level', filters.level);
    
    const offset = (currentPage - 1) * TOTAL_PER_PAGE;
    params.append('offset', offset);
    params.append('limit', TOTAL_PER_PAGE);
    
    const queryParams = params.toString();
    
    useEffect(() => {
        async function fetchJobs() {
            try {
                setLoading(true);
                const response = await fetch(`https://jscamp-api.vercel.app/api/jobs?${queryParams}`);
                const json = await response.json();
    
                setJobs(json.data);
                setTotalJobs(json.total);

            } catch (error) {
                console.error(`Error al traer los trabajos: ${error.message}`)
            } finally {
                setLoading(false);
            }
        }

        fetchJobs();
    }, [currentPage, searchFilter, filters])

    const totalPages = Math.ceil(totalJobs / TOTAL_PER_PAGE);

    return (
        <>  
            {
                loading ? <p>Cargando trabajos</p> : (
                    <>
                        {
                            jobs.length === 0 ? <p>No hay empleos que cumplan con los criterios de busqueda</p> : (
                                <ul className={styles.list}>
                                    { jobs.map((j) => {
                                        return <JobItem key={j.id} job={j} />
                                    }) }
                                </ul>
                            )
                        }
                        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} />
                    </>
                )
            }
        </>
    )
}
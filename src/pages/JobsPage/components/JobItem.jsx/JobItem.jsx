import styles from './JobItem.module.css'
import { ButtonApply } from '../ButtonApply/ButtonApply'
import { useState } from 'react'

export function JobItem({ job }) {
    const [apply, setApply] = useState(false)

    const handleApply = () => {
        setApply(prev => !prev);
    }

    const btnText = apply ? 'Aplicado' : 'Aplicar';

    return (
        <li className={styles.listItem}>
            <div className={styles.jobContainer}>
                <div className={styles.jobHeader}>
                    <h2>{job.titulo}</h2>
                    <small>{job.empresa} | {job.data.modalidad}</small>
                </div>
                <p>{job.descripcion}</p>
            </div>
            <ButtonApply text={btnText} onClick={handleApply} apply={apply} />
        </li>
    )
}
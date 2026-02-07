import styles from './JobItem.module.css'
import { ButtonApply } from '../ButtonApply/ButtonApply'
import { useState } from 'react';
import Swal from 'sweetalert2';

export function JobItem({ job }) {
    const [isApply, setIsApply] = useState(false)

    const handleApply = () => {
        Swal.fire({
                    background: '#01142c',
                    color: '#fff',
                    title: "¿Estas seguro?",
                    text: `Te vas a inscribir al puesto de "${job.titulo}" para la empresa "${job.empresa}"`,
                    icon: "question",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Si, inscribirme",
                    cancelButtonText: 'No, gracias'
                }).then((result) => {
                if (result.isConfirmed) {
                    setIsApply(true)
                    Swal.fire({
                        title: "Inscripto!",
                        text: "Te enviaremos toda la información por email",
                        icon: "success",
                        background: '#01142c',
                        color: '#fff'
                    });
                }
            });
    }

    const btnText = isApply ? 'Aplicado' : 'Aplicar';

    return (
        <li className={styles.listItem}>
            <div className={styles.jobContainer}>
                <div className={styles.jobHeader}>
                    <h2>{job.titulo}</h2>
                    <small>{job.empresa} | {job.data.modalidad}</small>
                </div>
                <p>{job.descripcion}</p>
            </div>
            <ButtonApply text={btnText} onClick={handleApply} apply={isApply} />
        </li>
    )
}
import { useState } from 'react';
import { LevelCourseBadge } from './LevelCourseBadge/LevelCourseBadge';
import { ButtonCourseApply } from '../ButtonCourseApply/ButtonCourseApply';
import Swal from 'sweetalert2';
import styles from './CourseItem.module.css'

export function CourseItem({ nombre, nivel, descripcion, duracionHoras, precio }) {
    const [isApply, setIsApply] = useState(false);

    const buttonText = isApply ? 'Inscripto' : 'Anotarme'

    const handleApply = () => {
        Swal.fire({
            background: '#01142c',
            color: '#fff',
            title: "¿Estas seguro?",
            text: `Inscripcion: ${nombre}`,
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

    return (
        <li className={styles.courseCard}>
            <div className={styles.courseInfo}>
                <div className={styles.courseHeader}>
                    <h3>{nombre}</h3>
                    <LevelCourseBadge nivel={nivel} />
                </div>
                <p>{descripcion}</p>
                <small>{duracionHoras} horas</small>
            </div>
            <ButtonCourseApply isApply={isApply} onClick={handleApply} text={buttonText} />
            <p className={styles.coursePrice}>${precio} ARS</p>
        </li>
    )
}
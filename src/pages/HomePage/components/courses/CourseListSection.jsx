import courses from '../../../../data/courses.json';
import { CourseItem } from './CourseItem';

export function CourseListSection() {
    return (
        <section id='cursos' className='courses-container'>
            <h2><span className='marked-span'>Aprende</span> las ultimas técnologias con SkillUp</h2>
            <ul className='courses-list'>
                { courses.map(c => {
                    return (
                        <CourseItem 
                            key={c.id}
                            nombre={c.nombre}
                            nivel={c.nivel}
                            descripcion={c.descripcion}
                            duracionHoras={c.duracionHoras}
                            precio={c.precio}
                        />
                    )
                }) }
            </ul>
        </section>
    )
}
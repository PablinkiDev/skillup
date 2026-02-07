import styles from './JobForm.module.css'
import { useId } from 'react'

export function JobForm({ onChangeSearch, onChangeFilter, haveFilters, onResetFilter }) {
    const idSearch = useId();
    const idTechnology = useId();
    const idMode = useId();
    const idLevel = useId();

    const handleSearch = (event) => {
        const search = event.target.value;
        onChangeSearch(search);
    }

    const handleChangeFilter = (event) => {
        event.preventDefault();
        const form = event.target.form;
        const formData = new FormData(form);

        const filters = {
            technology: formData.get(idTechnology),
            mode: formData.get(idMode),
            level: formData.get(idLevel)
        }

        onChangeFilter(filters)
    }

    return (
        <form onSubmit={(event) => event.preventDefault()}  className={styles.formContainer}>
            <div className={styles.searchInputContainer}>
                <label htmlFor={idSearch} className="material-symbols-outlined">search</label>
                <input onChange={handleSearch} id={idSearch} name={idSearch} className={styles.searchInput} type="text" placeholder="Buscar trabajos, empresas o habilidades" />
            </div>
            <div className={styles.selectInputContainer}>
                <select
                    className={styles.selectInput} 
                    name={idTechnology} 
                    id="filter-technology"
                    defaultValue={''}
                    onChange={handleChangeFilter}
                >
                    <option value="">
                        Tecnología 
                    </option>
                    <optgroup label='Tecnologías populares'>
                        <option value="js">JS</option>
                        <option value="html">HTML</option>
                        <option value="css">CSS</option>
                        <option value="react">React</option>
                        <option value="nodejs">Node.js</option>
                    </optgroup>
                    <hr />
                    <option value="c#">C#</option>
                    <option value="python">Python</option>
                    <option value="java">Java</option>
                    <option value="ruby">Ruby</option>
                    <option value="go">Go</option>
                </select>

                <select
                    className={styles.selectInput} 
                    name={idMode} 
                    id="filter-mode"
                    defaultValue={''}
                    onChange={handleChangeFilter}
                >
                    <option value="">
                        Modalidad
                    </option>
                    <option value="presencial">Presencial</option>
                    <option value="remoto">Remota</option>
                    <option value="híbrido">Hibrida</option>
                </select>

                <select 
                    className={styles.selectInput} 
                    name={idLevel} 
                    id="filter-level"
                    defaultValue={''}
                    onChange={handleChangeFilter}
                >
                    <option value="">
                        Nivel de experiencia
                    </option>
                    <option value="trainee">Trainee</option>
                    <option value="junior">Junior</option>
                    <option value="semi senior">Semi Senior</option>
                    <option value="senior">Senior</option>
                </select>
            </div>
            {
                haveFilters && <button className={styles.btnReset} onClick={onResetFilter}>Reiniciar filtros</button>
            }
        </form>
    )
}
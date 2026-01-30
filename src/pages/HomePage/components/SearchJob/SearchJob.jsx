import styles from './SearchJob.module.css'
import { useRouter } from '../../../../hooks/useRouter.js'


export function SearchJob() {
    const { navigateTo } = useRouter();

    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.currentTarget;
        const formData = new FormData(form);
        const search = formData.get('search')

        const url = search 
            ? `/empleos?text=${encodeURIComponent(search)}` 
            : `/empleos`

        navigateTo(url)
    }

    return (
        <section className={styles.container}>
            <div className={styles.header}>
                <h2><span className='marked-span'>Encuentra</span> el trabajo de tus sueños</h2>
                <p className='description'>Únete a la comunidad más grande de desarrolladores y encuentra tu próxima oportunidad.</p>
            </div>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.inputContainer}>
                    <label htmlFor='searchInput'>
                        <svg xmlns="http://www.w3.org/2000/svg" width='20px' height='20px' fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                    </label>
                    <input name='search' id='searchInput' type="text" placeholder='Buscar empleos por titulo, habilidad o empresa' />
                    <button type='submit' className={styles.btnSearch}>Buscar</button>
                </div>
            </form>
        </section>
    )
}
import faq from '../../../../../data/faq.json'
import { FaqItem } from '../FaqItem/FaqItem'
import styles from './FaqSection.module.css'

export function FaqSection() {
    return (
        <section id='faq' className={styles.faqSection}>
            <div className={styles.faqSectionWrapper}>
                <div className={styles.faqSectionHeader}>
                    <h2>Preguntas Frecuentes</h2>
                    <p>Todo lo que <span className='marked-span'>necesitas saber</span> antes de comenzar</p>
                </div>
                <div className={styles.faqSectionContainer}>
                    { faq.map(faq => {
                        return <FaqItem key={faq.id} question={faq.question} answer={faq.answer} />
                    }) }
                </div>
            </div>
        </section>
    )
}
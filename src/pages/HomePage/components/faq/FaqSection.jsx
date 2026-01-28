import faq from '../../../../data/faq.json'
import { FaqItem } from './FaqItem'

export function FaqSection() {
    return (
        <section id='faq' className="faq-section">
            <div className="faq-section-wrapper">
                <div className='faq-section__header'>
                    <h2>Preguntas Frecuentes</h2>
                    <p>Todo lo que <span className='marked-span'>necesitas saber</span> antes de comenzar</p>
                </div>
                <div className="faq-section__container">
                    { faq.map(faq => {
                        return <FaqItem key={faq.id} question={faq.question} answer={faq.answer} />
                    }) }
                </div>
            </div>
        </section>
    )
}
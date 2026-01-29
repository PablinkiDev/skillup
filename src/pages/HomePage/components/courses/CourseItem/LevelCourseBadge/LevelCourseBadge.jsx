import styles from './LevelCourseBadge.module.css'

export function LevelCourseBadge({ nivel = '' }) {
    let styleBadge = `${styles.badge}`;
    switch (nivel.toLowerCase()) {
        case 'inicial':
            styleBadge += ` ${styles.greenBadge}`

            break;
        case 'intermedio': 
            styleBadge += ` ${styles.yellowBadge}`
            break;
        case 'avanzado':
            styleBadge += ` ${styles.redBadge}`
            break;
        default: 
            styleBadge += ` ${styles.grayBadge}`          
    }
    
    return <span className={styleBadge}>{nivel}</span>
}
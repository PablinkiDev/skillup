export function LevelCourseBadge({ nivel = '' }) {
    let styleBadge = 'badge';
    switch (nivel.toLowerCase()) {
        case 'inicial':
            styleBadge += ' green-badge'
            break;
        case 'intermedio': 
            styleBadge += ' yellow-badge'
            break;
        case 'avanzado':
            styleBadge += ' red-badge'
            break;
        default: 
            styleBadge += ' gray-badge'
            
    }

    return <span className={`${styleBadge}`}>{nivel}</span>
}
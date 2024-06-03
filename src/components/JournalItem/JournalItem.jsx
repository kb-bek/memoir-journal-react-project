import './JournalItem.css'

const JournalItem = ({title, date, text}) => {
    
    return (
        <div className="journal-item">
            <h2 className="journal-item-heading">{title}</h2>
            <h2 className="journal-item-body">
                <div className="journal-item-date">{date}</div>
                <div className="journal-item-text">{text}</div>
            </h2>
        </div>
    )
}

export default JournalItem;
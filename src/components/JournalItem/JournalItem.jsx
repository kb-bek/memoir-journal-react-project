import './JournalItem.css'

const JournalItem = ({title, date, text}) => {

    const formatter = new Intl.DateTimeFormat('ru-RU', { dateStyle: 'short' });
    const formattedDate = formatter.format(date);
    
    return (
        <>
            <h2 className="journal-item-heading">{title}</h2>
            <h2 className="journal-item-body">
                <div className="journal-item-date">{formattedDate}</div>
                <div className="journal-item-text">{text}</div>
            </h2>
        </>
    )
}

export default JournalItem;
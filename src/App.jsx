import React from 'react'
import './App.css'
import Button from './components/Button/Button'
import JournalItem from './components/JournalItem/JournalItem'

function App() {

  const data = [
    {
      title: 'Первая заметка',
      date: new Date(),
      text: 'Создал первую заметку'
    },
    {
      title: 'Вторая заметка',
      date: new Date(),
      text: 'Создал вторую заметку'
    },
    {
      title: 'Третья заметка',
      date: new Date(),
      text: 'Создал третью заметку'
    }
  ]

  return (
    <>
      <JournalItem 
      title={data[0].title}
      date={data[0].date.toString()}
      text={data[0].text}
      />
      <JournalItem
      title={data[1].title}
      date={data[1].date.toString()}
      text={data[1].text}
      />
      <JournalItem
      title={data[2].title}
      date={data[2].date.toString()}
      text={data[2].text}
      />
      <Button label="Сохранить"/>
      
    </>
  )
}

export default App




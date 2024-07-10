import React from 'react';
import './App.css';
import Button from './components/Button/Button';
import JournalItem from './components/JournalItem/JournalItem';
import CardButton from './components/CardButton/CardButton';
import LeftPanel from './layouts/LeftPanel/LeftPanel';
import Body from './layouts/Body/Body';
import Header from './components/Header/Header';
import JournalAddButton from './components/JournalAddButton/JournalAddButton';
import JournalList from './components/JournalList/JournalList';
import JournalForm from './components/JournalForm/JournalForm';

function App() {
  const data = [
    {
      title: 'Первая заметка',
      date: new Date(),
      text: 'Создал первую заметку',
    },
    {
      title: 'Вторая заметка',
      date: new Date(),
      text: 'Создал вторую заметку',
    },
    {
      title: 'Третья заметка',
      date: new Date(),
      text: 'Создал третью заметку',
    },
  ];

  return (
    <div className="app">
      <LeftPanel>
        <Header />
        <JournalAddButton />
        <JournalList>
          {data.map( el => (
            <CardButton>
            <JournalItem
              title={el.title}
              date={el.date}
              text={el.text}
            />
          </CardButton>
          ))}
        </JournalList>
      </LeftPanel>
      <Body>
        <JournalForm/>
      </Body>
    
    </div>
  );
}

export default App;

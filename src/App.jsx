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
          <CardButton>
            <JournalItem
              title={data[0].title}
              date={data[0].date}
              text={data[0].text}
            />
          </CardButton>
          <CardButton>
            <JournalItem
              title={data[1].title}
              date={data[1].date}
              text={data[1].text}
            />
          </CardButton>
          <CardButton>
            <JournalItem
              title={data[2].title}
              date={data[2].date}
              text={data[2].text}
            />
          </CardButton>
        </JournalList>
      </LeftPanel>
      <Body>
        Body
      </Body>
    
    </div>
  );
}

export default App;

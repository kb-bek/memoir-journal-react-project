import React, { useState } from 'react';
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

const INITIAL_DATA = [
  {
    id: 1,
    title: 'Первая заметка',
    date: new Date(),
    text: 'Создал первую заметку',
  },
  {
    id: 2,
    title: 'Вторая заметка',
    date: new Date(),
    text: 'Создал вторую заметку',
  },
  {
    id: 3,
    title: 'Третья заметка',
    date: new Date(),
    text: 'Создал третью заметку',
  },
];

function App() {
  const [items, setItems] = useState(INITIAL_DATA);

  const addItem = (item) => {
    setItems((oldItems) => [
      ...oldItems,
      {
        text: item.text,
        title: item.title,
        date: new Date(item.date),
        id: oldItems.length > 0 ? Math.max(...oldItems.map((i) => i.id)) + 1 : 1
      },
    ]);
  };

  console.log(items);

  return (
    <div className="app">
      <LeftPanel>
        <Header />
        <JournalAddButton />
        <JournalList items={items}/>
      </LeftPanel>
      <Body>
        <JournalForm onSubmit={addItem} />
      </Body>
    </div>
  );
}

export default App;

import React, { useEffect, useState } from 'react';
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

// const INITIAL_DATA = [
//   {
//     id: 1,
//     title: 'Первая заметка',
//     date: new Date(),
//     text: 'Создал первую заметку',
//   },
//   {
//     id: 2,
//     title: 'Вторая заметка',
//     date: new Date(),
//     text: 'Создал вторую заметку',
//   },
//   {
//     id: 3,
//     title: 'Третья заметка',
//     date: new Date(),
//     text: 'Создал третью заметку',
//   },
// ];

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('data'));
    console.log(data);
    if (data) {
      setItems(
        data.map((item) => ({
          ...item,
          date: new Date(item.date),
        }))
      );
    }
  }, []);

  useEffect(() => {
    if (items.length) {
      localStorage.setItem('data', JSON.stringify(items));
    }
  }, [items]);

  const addItem = (item) => {
    setItems((oldItems) => [
      ...oldItems,
      {
        text: item.text,
        title: item.title,
        date: new Date(item.date),
        id:
          oldItems.length > 0 ? Math.max(...oldItems.map((i) => i.id)) + 1 : 1,
      },
    ]);
  };

  console.log(items);

  return (
    <div className="app">
      <LeftPanel>
        <Header />
        <JournalAddButton />
        <JournalList items={items} />
      </LeftPanel>
      <Body>
        <JournalForm onSubmit={addItem} />
      </Body>
    </div>
  );
}

export default App;


// [
//     {
//       "id": 1,
//       "title": "Первая заметка",
//       "date": "2024-07-28",
//       "text": "Создал первую заметку"
//     },
//     {
//       "id": 2,
//       "title": "Вторая заметка",
//       "date": "2024-07-28",
//       text: "Создал вторую заметку"
//     },
//     {
//       "id": 3,
//       "title": "Третья заметка",
//       "date": "2024-07-28",
//       "text": "Создал третью заметку"
//     }
//   ]
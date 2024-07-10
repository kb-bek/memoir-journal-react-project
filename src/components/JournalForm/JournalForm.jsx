import { useState } from 'react';
import Button from '../Button/Button';
import './JournalForm.css';

function JournalForm() {
  const getValues = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formProps = Object.fromEntries(formData);
    console.log(formProps);
  };

  return (
    <form onSubmit={getValues} className="journal-form">
      <input type="text" name="title" />
      <input type="date" name="date" />
      <input type="text" name="tag" />
      <textarea name="text" id="" cols={30} rows={20}></textarea>
      <Button text="Сохранить" />
    </form>
  );
}

export default JournalForm;

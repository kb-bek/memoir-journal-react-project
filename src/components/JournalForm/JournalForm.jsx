import { useState } from 'react';
import Button from '../Button/Button';
import styles from './JournalForm.module.css';

function JournalForm({ onSubmit }) {

  const addJournalItem = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);
    onSubmit(formProps);
  };

  return (
    <form onSubmit={addJournalItem} className={styles['journal-form']}>
      <input type="text" name="title" />
      <input type="date" name="date" />
      <input type="text" name="tag" />
      <textarea name="text" id="" cols={30} rows={20}></textarea>
      <Button text="Сохранить" />
    </form>
  );
}

export default JournalForm;

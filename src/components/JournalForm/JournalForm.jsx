import { useState } from 'react';
import Button from '../Button/Button';
import styles from './JournalForm.module.css';
import cn from 'classnames';

function JournalForm({ onSubmit }) {
  const [formValidState, setFormValidState] = useState({
    title: true,
    text: true,
    date: true,
  });

  const addJournalItem = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);
    let isFormValid = true;

    if (!formProps.title?.trim().length) {
      setFormValidState((state) => ({ ...state, title: false }));
      isFormValid = false;
    }
    if (!formProps.text?.trim().length) {
      setFormValidState((state) => ({ ...state, text: false }));
      isFormValid = false;
    }
    if (!formProps.date) {
      setFormValidState((state) => ({ ...state, date: false }));
      isFormValid = false;
    }

    if (!isFormValid) {
      return;
    }
    onSubmit(formProps);
  };

  return (
    <form onSubmit={addJournalItem} className={styles['journal-form']}>
      <div>
        <input
          type="text"
          name="title"
          className={cn(styles['input-title'], {
            [styles['invalid']]: !formValidState.title,
          })}
        />
      </div>
      <div className={styles['form-row']}>
        <label htmlFor="date" className={styles['form-lable']}>
          <img src="/calendar.svg" alt="Иконка календаря" />
          <span>Дата</span>
        </label>
        <input
          type="date"
          name="date"
          id="date"
          className={cn(styles['input'], {
            [styles['invalid']]: !formValidState.title,
          })}
        />
      </div>
      <div className={styles['form-row']}>
        <label htmlFor="date" className={styles['form-lable']}>
          <img src="/folder.svg" alt="Иконка метки" />
          <span>Метки</span>
        </label>
        <input type="text" name="tag" className={styles['input']} />
      </div>
      <textarea
        name="text"
        id=""
        cols={30}
        rows={20}
        className={cn(styles['input'], {
          [styles['invalid']]: !formValidState.title,
        })}
      ></textarea>
      <Button text="Сохранить" />
    </form>
  );
}

export default JournalForm;

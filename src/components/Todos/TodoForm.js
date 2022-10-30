import styles from './TodoForm.module.css'
import { useState } from 'react'
import Button from '../UI/Button'

function TodoForm({ addTodo }) {
  const [text, setText] = useState('')

  const textHandler = (value) => {
    setText(value)
  }

  const handleFromSubmit = (event) => {
    event.preventDefault()
    addTodo(text)
    setText('')
  }

  return (
    <div className={styles.todoFormContainer}>
      <form className={styles.form} onSubmit={handleFromSubmit}>
        <input
          className={styles.input}
          placeholder="Enter your todo"
          value={text}
          onChange={(event) => {
            textHandler(event.target.value)
          }}
        />
        <Button type="submit" title="Submit" children={'Submit'} />
      </form>
    </div>
  )
}

export default TodoForm

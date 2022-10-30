import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri'
import styles from './TodosActions.module.css'
import Button from '../UI/Button'

function TodosActions({
  resetTodosHandler,
  deleteCompletedTodosHandler,
  completedTodosExist,
}) {
  return (
    <div className={styles.todoActionsContainer}>
      <Button
        children={<RiDeleteBin2Line />}
        title="Clear Completed"
        onClick={deleteCompletedTodosHandler}
        disabled={!completedTodosExist}
      />
      <Button
        children={<RiRefreshLine />}
        title="Reset Todos"
        onClick={resetTodosHandler}
      />
    </div>
  )
}

export default TodosActions

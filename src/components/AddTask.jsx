import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTaskAction } from '../redux/actions/listsAction';

function AddTask() {
  const [inputText, setInputText] = React.useState('');
  const [activePopup, setActivePopup] = React.useState(false);
  const tasks = useSelector((state) => state.lists.tasks);
  const activeList = useSelector((state) => state.lists.activeList);
  const dispatch = useDispatch();

  console.log(activeList);

  const onAddTask = () => {
    dispatch(
      addTaskAction({
        text: inputText,
        id: tasks.map((item) => item.id).pop() + 1,
        listId: activeList,
      }),
    );
    setActivePopup(false);
    setInputText('');
  };

  return (
    <div className="addTask">
      {!activePopup ? (
        <div onClick={() => setActivePopup(true)} className="addTask__button">
          <i>
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M6 1V11"
                stroke="#868686"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M1 6H11"
                stroke="#868686"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </i>
          <h3 className="addTask__text task__text">Новая задача</h3>
        </div>
      ) : (
        <div className="addTask__input">
          <input
            type="text"
            placeholder="Текст задачи"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
          <div>
            <button onClick={() => onAddTask()} className="addButton">
              Добавить задачу
            </button>
            <button className="cancelButton">Отмена</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddTask;

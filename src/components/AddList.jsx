import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';

import { addListAction } from '../redux/actions/listsAction';

function AddLIst() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.lists.items);
  const [inputText, setInputText] = React.useState('');
  const [popup, setPopup] = React.useState(false);
  const [activeColor, setActiveColor] = React.useState(0);
  const colors = [
    { color: 'gray', hex: '#c9d1d3' },
    { color: 'green', hex: '#42b883' },
    { color: 'blue', hex: '#64c4ed' },
    { color: 'pink', hex: '#ffbbcc' },
    { color: 'light-green', hex: '#b6e6bd' },
    { color: 'purple', hex: '#c355f5' },
    { color: 'black', hex: '#09011a' },
    { color: 'orange', hex: '#ff893a' },
  ];

  const onAddList = () => {
    if (inputText) {
      dispatch(
        addListAction({
          name: inputText,
          colors: colors[activeColor],
          id: items.map((item) => item.id).pop() + 1,
        }),
      );
      setInputText('');
      setPopup(false);
    }
  };

  return (
    <div className="addList">
      {popup ? (
        <div className="addList__popup">
          <i onClick={() => setPopup(false)}>
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M6.24741 5L9.73899 1.50842C9.9047 1.343 9.99791 1.11853 9.99812 0.884393C9.99832 0.650251 9.90551 0.425617 9.74009 0.259907C9.57468 0.0941973 9.35021 0.000986589 9.11606 0.000779811C8.88192 0.000573033 8.65729 0.0933872 8.49158 0.258804L5 3.75038L1.50842 0.258804C1.34271 0.0930948 1.11796 0 0.883613 0C0.649264 0 0.424514 0.0930948 0.258804 0.258804C0.0930948 0.424514 0 0.649264 0 0.883613C0 1.11796 0.0930948 1.34271 0.258804 1.50842L3.75038 5L0.258804 8.49158C0.0930948 8.65729 0 8.88204 0 9.11639C0 9.35074 0.0930948 9.57549 0.258804 9.7412C0.424514 9.90691 0.649264 10 0.883613 10C1.11796 10 1.34271 9.90691 1.50842 9.7412L5 6.24962L8.49158 9.7412C8.65729 9.90691 8.88204 10 9.11639 10C9.35074 10 9.57549 9.90691 9.7412 9.7412C9.90691 9.57549 10 9.35074 10 9.11639C10 8.88204 9.90691 8.65729 9.7412 8.49158L6.24741 5Z"
                fill="#fff"
              />
            </svg>
          </i>
          <input
            type="text"
            onChange={(e) => setInputText(e.target.value)}
            value={inputText}
            placeholder="Название папки..."
          />
          <div className="addList__circles">
            {colors.map(({ color }, index) => (
              <div
                onClick={() => setActiveColor(index)}
                key={`${color}_${index}`}
                className={classNames('addList__circle', color, {
                  activeCircle: activeColor === index,
                })}></div>
            ))}
          </div>
          <button onClick={onAddList}>Добавить</button>
        </div>
      ) : (
        <div onClick={() => setPopup(true)} className="addList__button">
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
          <span>Добавить папку</span>
        </div>
      )}
    </div>
  );
}

export default AddLIst;

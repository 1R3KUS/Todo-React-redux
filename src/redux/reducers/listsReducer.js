const initialState = {
  items: [
    {
      name: 'Фронтенд',
      colors: { color: 'blue', hex: '#64c4ed' },
      id: 0,
    },
    {
      name: 'Спорт',
      colors: { color: 'green', hex: '#42b883' },
      id: 1,
    },
    {
      name: 'Книги',
      colors: { color: 'gray', hex: '#c9d1d3' },
      id: 2,
    },
  ],
  tasks: [
    { text: 'TypeScript', id: 0, listId: 0 },
    { text: 'Workout', id: 1, listId: 1 },
    { text: '1984', id: 2, listId: 2 },
  ],
  activeList: null,
};

window.state = initialState;

const listsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_LIST':
      return {
        ...state,
        items: [...state.items, action.payload],
      };

    case 'REMOVE_LIST': {
      const newState = [...state.items];

      const newItems = newState.filter((item) => item.id !== action.payload);
      return {
        ...state,
        items: newItems,
      };
    }
    case 'ACTIVE_LIST': {
      return {
        ...state,
        activeList: action.payload,
      };
    }
    case 'ADD_TASK': {
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    }
    case 'REMOVE_TASK': {
      const newState = [...state.tasks];

      const newItems = newState.filter((item) => item.id !== action.payload);
      return {
        ...state,
        tasks: newItems,
      };
    }

    default:
      return state;
  }
};

export default listsReducer;

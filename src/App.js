import { useSelector } from 'react-redux';
import { AllLists, AllTasks } from './components';
import './scss/app.scss';

function App() {
  const { activeList, tasks, items } = useSelector((state) => state.lists);

  return (
    <div className="todo-app">
      <AllLists items={items} />
      <AllTasks lists={items} activeList={activeList} tasks={tasks} />
    </div>
  );
}

export default App;

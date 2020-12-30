import { useSelector } from 'react-redux';
import { AllLists, AllTasks } from './components';
import './scss/app.scss';

function App() {
  const { activeList, tasks, items } = useSelector((state) => state.lists);

  //Исправить баг с id папками после удаления, /*Finished*/
  //Сделать удаление task если удаляется его list

  return (
    <div className="todo-app">
      <AllLists items={items} />
      <AllTasks lists={items} activeList={activeList} tasks={tasks} />
    </div>
  );
}

export default App;

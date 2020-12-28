import React from 'react';
import { AddTask, TaskItem } from '.';

function AllTasks({ lists, activeList, tasks }) {
  const task = lists.filter((item) => item.id === activeList);
  const taskItem = tasks.filter((item) => item.listId === activeList);

  return (
    <div className="allTasks">
      {activeList === null
        ? lists.map(({ name, id, colors }) => (
            <div key={id} className="task">
              <div className="task__header">
                <h1 style={{ color: colors.hex }}>{name}</h1>
              </div>
              {tasks
                .filter((item) => item.listId === id)
                .map((item) => (
                  <TaskItem key={item.id} {...item} />
                ))}
            </div>
          ))
        : task.map(({ name, id, colors, tasks }) => (
            <div key={id} className="task">
              <div className="task__header">
                <h1 style={{ color: colors.hex }}>{name}</h1>
              </div>
              {taskItem && taskItem.map((item) => <TaskItem key={item.id} {...item} />)}
              <AddTask />
            </div>
          ))}
    </div>
  );
}

export default AllTasks;

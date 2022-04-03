import { IonItem, IonLabel, IonList, IonToggle } from '@ionic/react';
import { useEffect, useState } from 'react';
import { getTodos, updateTodo } from './todosApi';

export function Todos() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodos()
      .then((json) => setTodos(json));

  }, []);
  const replace = (todo) => {
    const newTodos = todos.map((t) => {
      if (t.id === todo.id)
        return todo;
      else
        return t;
    });
    setTodos(newTodos);
  };
  const requetsReplaceTodo = (todo) => {
    updateTodo(todo)
      .then((json) => replace(json));
  };

  return (
    <div>
      <IonList>
        {todos.map((t) => (
          <IonItem key={t.id}
            onClick={() => requetsReplaceTodo({ ...t, completed: !t.completed })}

          >
           <IonLabel> 
               {t.title} 
               
           </IonLabel>
           <IonToggle slot='start' checked={t.completed}></IonToggle>
          </IonItem>))}

      </IonList>

    </div>
  );
}

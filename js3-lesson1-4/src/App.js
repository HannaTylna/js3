import React from 'react';
import Notion from './components/Notion';

const todos = [
  {
    heading: "To meet friends",
    description: "Not needed",
    toDo: {
      text: "The only way to learn something is to get started",
      deadline: "2021-11-29",
      isComplited: true

    }
  },
  {
    heading: "To put children to kindergarten",
    description: "Not needed",
    toDo: {
      text: "The only way to learn something is to get started",
      deadline: "2021-12-01",
      isComplited: false

    }
  },
  {
    heading: "To cook meals",
    description: "Not needed",
    toDo: {
      text: "The only way to learn something is to get started",
      deadline: "2021-12-04",
      isComplited: false

    }
  }
]

function App() {
  return (
    <div>
      {
        todos.map((todosItem, index) => {
          return <Notion 
            key={index} 
            {...todosItem}
            
          />
        })
      }
    </div>
  );
}

export default App;

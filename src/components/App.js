import './App.css';
import List from './todoList/List';
import Modal from './todoModal/Modal';
import { useState, useEffect } from 'react'

function App() {
  const [todoList, setTodoList] = useState([]);

  const getLocalStorageItems = () => {
    const getLocalItem = JSON.parse(localStorage.getItem('todoList'))
    if(getLocalItem){
      setTodoList(getLocalItem)
    }
  }

  const addListItem = (item) => {
    let items = []
    if(JSON.parse(localStorage.getItem('todoList'))){
      items = JSON.parse(localStorage.getItem('todoList'))
    }
    items.push(item)
    localStorage.setItem('todoList',JSON.stringify(items));
    setTodoList(oldArray => [...oldArray, item])
  }

  
  // eslint-disable-next-line
  const deleteListItem = (id) => {
    const newToDoArray = todoList.filter((item, index) => index !== id)
    setTodoList(newToDoArray)
    localStorage.setItem('todoList', JSON.stringify(newToDoArray))
  }
  
  useEffect(() => {
    getLocalStorageItems()
  }, [])

  return (
    <div className="App">
      <h1 className='text-center'>To Do</h1>
      <section className='todo-app'>
        {todoList.map((singleElement, index) => (
          <List key={index} toDoItem={{singleElement, index}} deleteListItem={(id) => deleteListItem(id)} />
        ))}
        <Modal addListItem={(item) => addListItem(item)} />
      </section>
    </div>
  );
}

export default App;
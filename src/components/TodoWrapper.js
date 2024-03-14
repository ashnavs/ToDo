import React,{useState} from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
import {v4 as uuidv4 } from 'uuid';
import EditTodoForm from './EditTodoForm';
uuidv4();

const TodoWrapper = () => {
    const [todos,setTodos] = useState([]);
    const [errorMessage,setErrorMessage] = useState('');
  
  

    const Addtodo = todo =>{
        setErrorMessage('')
        const newTodoToLowercase = todo.toLowerCase();

        const isTaskExists = todos.some(item=>item.task.toLowerCase() === newTodoToLowercase)

        if(isTaskExists){
         setErrorMessage('Task Already Exist')
        }else{
          setTodos([...todos,{id:uuidv4(),task: todo, completed: false ,isEditing: false}]);
          setErrorMessage('')
        }
        
    }

    const toggleComplete = id => {
      setTodos(todos.map(todo => todo.id === id? {...todo, completed: !todo.completed} : todo))
    }

    const deleteTodo = id => {
      setTodos(todos.filter(todo => todo.id !== id))
    }

    const editTodo = id => {
      setTodos(todos.map(todo => todo.id === id ? {...todo, isEditing: !todo.isEditing}:todo ))
    }

    const editTask = (task,id) => {
      setErrorMessage('');
      const editTodoToLowercase = task.toLowerCase();
      const taskExist = todos.some(item=>item.task.toLowerCase()===editTodoToLowercase && item.id !== id)
      if(taskExist){
        setErrorMessage('Task Already Exist!');

      }else{
        
        setTodos(todos.map(todo=> todo.id === id ? {...todo, task, isEditing: !todo.isEditing}: todo))
        setErrorMessage('');

      }
    }
  return (
    <div className='TodoWrapper'>
      <h1>Get Things Done!</h1>
      <TodoForm AddTodo = {Addtodo} setErrorMessage={setErrorMessage}/>

      {todos.map((todo, index)=>(
        todo.isEditing ? (
          <EditTodoForm editTodo={editTask} task={todo} setErrorMessage={setErrorMessage}/>
        ) : (
          <Todo task={todo} key={index} toggleComplete={toggleComplete} deleteTodo={deleteTodo} editTodo={editTodo}  />
          
        )
        
      ))}
       {errorMessage && <p className='error-message'> {errorMessage}</p>}
    </div>
  )
}

export default TodoWrapper

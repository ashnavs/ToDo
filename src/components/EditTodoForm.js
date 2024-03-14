import React,{useState} from 'react'

const EditTodoForm = ({editTodo, task , setErrorMessage}) => {
    const [value,setValue] = useState(task.task);
   


    const handleSubmit = e =>{
        e.preventDefault();

        if(value.trim() !== ''){
        editTodo(value, task.id);
        setValue('')
        
        }else{
          setErrorMessage('Please enter a valid task')
        }
       
        
    }
  return (
    <div>
      <form className='ToDoForm' onSubmit={handleSubmit}>
        <input type="text" className='todo-input' value={value} placeholder='Update Task' onChange={(e)=>setValue(e.target.value)} />
        <button type='submit' className='todo-btn'>Update Task</button>
      </form>
      
    </div>
  )
}



export default EditTodoForm

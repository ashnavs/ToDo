import React,{useState} from 'react'

const TodoForm = ({AddTodo,setErrorMessage}) => {
    const [value,setValue] = useState('');
    
    

    const handleSubmit = e =>{
        e.preventDefault();

       
        if(value.trim() !== ''){
         AddTodo(value);
          setValue('')
          
        }else{
          setErrorMessage('Please enter a valid task')
        }
      

       
    }
  return (
    <div>
      <form className='ToDoForm' onSubmit={handleSubmit}>
        <input type="text" className='todo-input' value={value} placeholder='What is the task today?' onChange={(e)=>setValue(e.target.value)} />
        
        <button type='submit' className='todo-btn'>Add task</button>
        {/* {errorMessage && <p className="error-message">{errorMessage}</p>} */}
      </form>
      
      
      
    </div>
  )
}

export default TodoForm

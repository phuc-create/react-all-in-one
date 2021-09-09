import { useState,useContext } from "react";
import {  TextField,Button } from "@material-ui/core";
import {ADD_TODO} from "./actions/Actions";
import  {Ctx }from './contexts/TodoContext';

function TodoForm() {
    const [value, setValue] = useState('');
    const { dispatch } = useContext(Ctx);
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({
            type: ADD_TODO,
            payload: {
                todo: {
                    todoID: Math.random() * 1000,
                    TodoTxt: value,
                    isComplete:false
                }
            }
        }
        );
        setValue('');
       
    }
    return (
        <form className="TodoForm" onSubmit={handleSubmit}>
            <TextField id="outlined-basic" name="name-todo"  required label="Tracking Todo!" variant="outlined"value={value} onChange={(e)=>setValue(e.target.value)}/>
            <Button type="submit" variant="outlined" color="primary" >
            Add Todo
            </Button>
            
        </form>
    )
}

export default TodoForm;

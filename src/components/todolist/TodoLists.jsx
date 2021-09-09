import { useState, useContext } from 'react';
import { List, ListItem, ListItemText, Fab, TextField, Button } from "@material-ui/core";
import CancelPresentationIcon from '@material-ui/icons/CancelPresentation';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import {COMPLETED_TODO, DELETE_TODO, UPDATE_TODO} from "./actions/Actions";
import  {Ctx }from './contexts/TodoContext';
function TodoLists({handleUpdate}) {
    const [edit, setEdit] = useState({ todoID: null, TodoTxt: '' });
    const {todos,dispatch} = useContext(Ctx);
    
    
    //const [valueEdit, setValueEdit] = useState(edit.TodoTxt);
    
    const handleUpdateTodo = (id, txt) => {
        setEdit({ todoID: id, TodoTxt: txt });
    };
    
    const updateOnSubmit = (e) => {
        e.preventDefault();
        const { todoID, TodoTxt } = edit;
        dispatch({
            type: UPDATE_TODO,
            payload: {
                edit: {
                    todoID,
                    TodoTxt
                }
            }
         
        });
        setEdit({ todoID: null, TodoTxt: '' });
    }
    const quitEdit = () => {
         setEdit({ todoID: null, TodoTxt: '' });
    }
    if (edit.todoID) {
        return (
        
            <form className="TodoForm" onSubmit={updateOnSubmit}>
                <TextField
                    id="outlined-basic"
                    name="name-todo"
                    required
                    label="Update Todo!"
                    variant="outlined"
                    value={edit.TodoTxt}
                    onChange={(e)=>setEdit({ ...edit, TodoTxt: e.target.value })}
                />
            
                <Button type="submit" variant="outlined" color="primary" >
                    Update Todo
            </Button>
            <CancelPresentationIcon fontSize="large" color="action" style={{cursor:"pointer"}} onClick={quitEdit} />
            
            </form>
        )
    } else {
        return (            
             <List dense={true}>
                 {
                     todos.map(todo => {
                         const {
                             todoID, TodoTxt,isComplete
                         } = todo;
                         return (
                            <ListItem key={todoID}>
                                 <ListItemText primary={TodoTxt} className={isComplete ? "list todo-completed" : "list todo"} onClick={() => 
                                     dispatch({
                                         type: COMPLETED_TODO,
                                         payload: {
                                             id: todoID
                                         }
                                     })
                                 }/>
                                
                                 <Fab color="primary" aria-label="add" size="small" onClick={() => {
                                     dispatch({
                                         type: DELETE_TODO,
                                         payload: {
                                             id:todoID
                                         }
                                     })
                                 }}>
                                    <DeleteIcon />
                                     </Fab>
                                     
                                    <Fab color="secondary" aria-label="edit" size="small" onClick={() => handleUpdateTodo(todoID,TodoTxt) }>
                                    <EditIcon />
                                    </Fab>
                                
                            </ListItem>
                                )
                                            }
                    )
                 }
             </List>   
        )
}
};
export default TodoLists;



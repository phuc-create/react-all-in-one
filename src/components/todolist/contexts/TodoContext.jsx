import { createContext,useReducer } from 'react';
import { TodoReducer } from '../Reducers/TodoReducer';

export const Ctx = createContext();

const ProviderTodoApp = ({children}) => {
    const [todos, dispatch] = useReducer(TodoReducer, []);
    //  const newTodo = (setNewTodo) => {
    //     dispatch({
    //         type: ADD_TODO,
    //         payload: {
    //             todo: setNewTodo}
    //     });
    // };
    // const handleDeleteTodo = (id) => {
    //     dispatch({
    //         type: DELETE_TODO,
    //         payload:id
    //     })
        
    // };
    // const handleUpdateSubmit = (id,TodoTxt) => {
    //     dispatch({
    //         type: UPDATE_TODO,
    //         payload:{id,TodoTxt}
    //     })
        
 
    // }
    const actionStore = {
        todos,
        dispatch
    }
    return (
        <Ctx.Provider value={actionStore}>
            {children}
        </Ctx.Provider>
    )
}
export default ProviderTodoApp
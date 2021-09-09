import {
    ADD_TODO,UPDATE_TODO,DELETE_TODO,COMPLETED_TODO
} from "../actions/Actions";

export const TodoReducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case ADD_TODO:
            state = [...state, payload.todo];
            console.log(state);
            return state;
            
        case UPDATE_TODO:
            const { todoID, TodoTxt } = payload.edit;
            state = state.map((todo) => {
                if (todo.todoID === todoID)
                    return {
                        ...todo,TodoTxt
                    };
                return todo;
            });
            return state;
        
        case DELETE_TODO:
            return state.filter(newList => newList.todoID !== payload.id);
        case COMPLETED_TODO:
            state = state.map(todo => {
                if (todo.todoID === payload.id)
                    return {
                        ...todo,
                        isComplete: !todo.isComplete,
                    }
                return todo;
            });
            return state;
        default:
            break;
    }
}

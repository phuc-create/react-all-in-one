import TodoForm from "./TodoForm";
import TodoLists from "./TodoLists";
import { Container ,Card} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import ProviderTodoApp from './contexts/TodoContext';

function TodoApp() {
    // let [todos, setTodos] = useState([]);

    const useStyles = makeStyles((theme) => ({
        root: {
            minWidth: 310,
            height: "auto",
            padding: 20,
            fontWeight:600      
        }
    }));
    const classes = useStyles();
    return (
        <ProviderTodoApp>
            <Container>
                <Card className={classes.root}>
                    <TodoForm  />
                    <TodoLists />
                </Card>
            </Container>
        </ProviderTodoApp>
    )
};

export default TodoApp

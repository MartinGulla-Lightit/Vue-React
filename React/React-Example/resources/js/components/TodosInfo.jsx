import React, { useContext } from 'react';
import TodoContext from '../providers/TodoContext.js';

function TodosInfo() {
    const { todos } = useContext(TodoContext);
    const completedTodos = todos.filter(todo => todo.completed).length;
    const totalTodos = todos.length;
    return (
        <div>
            {totalTodos > 0 ? (
                <span>
                    You have completed {completedTodos} of your { totalTodos } Todos!!
                </span>
            ) : (
                <span>You have no Todos!</span>
            )}

        </div>
    );
}
export default TodosInfo;

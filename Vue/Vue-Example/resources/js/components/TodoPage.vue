<template>
<!-- Each component can only have one child element, that -->
<!-- means that we have to wrap the component in a div -->
    <div>
        <TodoHeader />
        <!-- The @ simbol hears for an event to happen -->
        <!-- It can be a normal HTML event, or a custom event defined -->
        <!-- inside the child component -->
        <TodoForm @addTodo="addTodo" />
        <!-- Here we pass the todos as a prop called todos -->
        <!-- The first one is the name of the prop that the child -->
        <!-- is going to use, the second one is the variable in this component -->
        <TodoList :todos="todos" @removeTodo="removeTodo" />
        <TodosInfo :todos="todos"/>
    </div>
</template>
<script>

// We import every component we want to use in this file
import TodoHeader from './TodoHeader.vue'
import TodoForm from './TodoForm.vue'
import TodoList from './TodoList.vue'
import TodosInfo from './TodosInfo.vue'

export default {
    // We define the name of the component
    name: "TodoPage.vue",

    // We register all the components we want to use in this file
    components: {
        'TodoHeader': TodoHeader,
        'TodoForm': TodoForm,
        'TodoList': TodoList,
        'TodosInfo': TodosInfo,
    },

    // We define the data of the component
    data() {
        return {
            lastTodoId: 3,
            todos: [
                {
                    id: 1,
                    title: "Learn Vue",
                    completed: true,
                },
                {
                    id: 2,
                    title: "Add css to the app",
                    completed: false,
                },
                {
                    id: 3,
                    title: "Learn React",
                    completed: false,
                },
            ],
        };
    },

    // This method is called when the component is mounted, only happens once in the lifecycle
    // unlike the created hook, which is called every time the component is created, you can
    // use it to do some initial setup, like fetching data from a server or initializing some
    // variables you can put code here or call methods registered below to reduce the amount
    // of duplicated code
    mounted() {
        console.log("Component mounted.");
    },
    // We define the methods of the component, they are called by the component
    // and can be used to call the methods of the parent component
    methods: {
        addTodo(title) {
            this.todos.push({
                id: ++this.lastTodoId,
                title: title,
                completed: false,
            });
        },
        removeTodo(todo) {
            this.todos.splice(this.todos.indexOf(todo), 1);
        },
    },
};
</script>

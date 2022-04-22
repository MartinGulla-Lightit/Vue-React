<template>
    <div>
        <ul>
            <!-- v-for is used to create components based on a loop, -->
            <!-- usually, they are from an array, in this case, -->
            <!-- we create a <li> with a TodoItem for each Todo -->
            <li v-for="todo in todos" :key="todo.id">
                <TodoItem :todo="todo" @deleteTodo="deleteTodo"/>
            </li>
        </ul>
    </div>
</template>
<script>
import TodoItem from './TodoItem.vue'
    export default {
        name: 'TodoList.vue',

        // Here we define the props that will be passed to the component
        // The props are defined in the parent component, the name of the prop is the name of the variable
        // The value of the prop is the value of the variable
        props: ['todos'],
        components: {
            'TodoItem': TodoItem,
        },
        methods: {
            deleteTodo(todo) {
                this.$emit('removeTodo', todo);
            },
        },
    };
</script>

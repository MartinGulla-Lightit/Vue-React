<template>
    <div>
        <div>
            <!-- If we want to print out values of variables, we need to use {{}} -->
            {{todo.id}}
        </div>
        <!-- v-if only renders the element/component if the value is true -->
        <div v-if="!editing" @dblclick="editTodo">
            {{todo.title}}
        </div>
        <!-- v-else renders the element/component if the value is false -->
        <!-- you can also use v-else-if in case there are more options -->
        <input v-else ref="a" @blur="saveTodo"  @keyup.enter="saveTodo" type="text" v-model="todo.title">
        <div>
            {{todo.completed}}
        </div>
        <div>
            <button @click="toggleCompletedTodo">{{ todo.completed ? 'Uncomplete Todo' : 'Complete Todo'}}</button>
            <button @click="deleteTodo">Delete Todo</button>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'TodoItem.vue',
        props: ['todo'],
        data(){
            return {
                editing: false,
            }
        },
        methods: {
            toggleCompletedTodo() {
                this.todo.completed = !this.todo.completed;
            },
            deleteTodo() {
                this.$emit('deleteTodo', this.todo);
            },
            editTodo() {
                this.editing=true;
                setTimeout(() => {
                    this.$refs.a.focus();
                }, 10);
            },
            saveTodo() {
                this.editing=false;
            },
        },
    };
</script>

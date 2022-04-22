<template>
    <div>
        <template v-if="totalTodos > 0">
            <span
                >You have completed {{ completedTodos }} of your
                {{ totalTodos }} Todos!!</span
            >
        </template>
        <template v-else>
            <span>You have no Todos!</span>
        </template>
    </div>
</template>
<script>
export default {
    name: "TodosInfo.vue",
    props: ["todos"],
    // computed properties are used to calculate values based on other values
    // it creates a variable that changes only when the value of any of the
    // variables it is based on changes, in this case, totalTodos will only change
    // when the value of todos changes
    computed: {
        completedTodos() {
            return this.todos.filter((todo) => todo.completed).length;
        },
        totalTodos() {
            return this.todos.length;
        },
    },
    // There is also a watch method that can be used to watch for changes in the
    // value of a variable, when the value of the variable changes, the function
    // passed to the watch method will be called
    watch: {
        todos: {
            handler() {
                console.log("Todos changed!");
            },
        },
    },
    // Both are similar, but differ slightly in how they are used
    // Computed is faster because it waits for a change in the value of the
    // variables it is based on, while watch is slower because it waits for a
    // change in the value of the variable it is watching
    // Sometimes computed won't work, but watch will
};
</script>

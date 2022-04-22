<template>
    <div>
        <label>
            Create a new Todo:
            <!-- v-model links the value of the element with the specified variable, -->
            <!-- in this case, the variable todoName is linked with the value of the input, -->
            <input type="text" v-model="todoName" @keyup.enter="addTodo">
        </label>
    </div>
</template>
<script>
    export default {
        name: 'TodoForm.vue',
        data(){
            return { todoName:''}
        },
        methods: {
            addTodo(){
                if(this.todoName.trim()===''){
                    this.error='Todo name is required';
                    return;
                }
                // $emit is a method that emits an event, in this case, the event is 'addTodo'
                // $emit takes two arguments, the first is the name of the event, the second is the data to be emitted.
                // The name of the event is then listened in the parent component, in this case, the TodoPage.vue
                // we hear this event in the parent with the @addTodo
                // The second argument is optional, if we don't pass it, the parent component will receive an empty object,
                // if we pass it, the parent component will receive the data we pass as the second argument,
                // the parent won't call the function with the argument (addTodo(todoName)), since the value is passed magically :)
                // the definition of addTodo will need the argument todoName, and it takes the value of the emmited value, in this case, the todoName
                this.$emit('addTodo', this.todoName)
                // Since todoName is linked to the input, if we set todoName to '', the input will be blank after we create our todo
                this.todoName = ''
            }
        }
    }
</script>

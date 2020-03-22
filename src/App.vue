<template>
    <div id="app" class="p-3">
        <h1> My Todo App </h1>
        <create-new v-on:create-new="createNew"></create-new>
        <list-todo v-bind:todos="todos"></list-todo>
    </div>
</template>

<script>
import CreateNew from './components/CreateNew';
import ListTodo from './components/ListTodo';
export default {
    components: {
        CreateNew,
        ListTodo
    },
    data() {
        return {
            todos: [
                { title: 'hieu1', description: 'hieu1', deadline: '2020-01-01', status: 'Open' },
                { title: 'hieu2', description: 'hieu2', deadline: '2020-05-01', status: 'In progress' },
                { title: 'hieu3', description: 'hieu3', deadline: '2020-01-19', status: 'Closed' },
                { title: 'hieu4', description: 'hieu4', deadline: '2020-03-22', status: 'In progress' },
                { title: 'hieu5', description: 'hieu5', deadline: '2020-10-14', status: 'Closed' },
            ]
        };
    },
    methods: {
        createNew(todo) {
            this.todos.push(todo);
        },
    }
}
</script>

<style lang="scss">
h1 {
    color: #4CAF50;
}

input {
    background: transparent;
    border: none;
    border-bottom: 1px solid #000000;
}

ul {
    list-style: none;
}

label {
    color: yellowgreen;
}

.new-text {
  width: 500px;
  height: 150px;
}

.edit-text {
  width: 500px;
  height: 50px;
}
.select-status {
    width: 200px;
}
</style>

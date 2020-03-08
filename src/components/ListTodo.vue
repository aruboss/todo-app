<template>
    <div>
        <table id='app' class='table'>
            <thead>
            <tr>
                <th width = "4%"><span></span></th>
                <th width = "10%"><span>Title</span></th>
                <th width = "50%"><span>Description</span></th>
                <th width = "20%"><span>Deadline</span></th>
                <th width = "10%"><span>Status</span></th>
                <th width = "3%"><span>Edit</span></th>
                <th width = "3%"><span>Delete</span></th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(todo, index) in todos" :key="index">
                <td>{{ index + 1 }}</td>
                <td>{{ todo.title }}</td>
                <td>{{ todo.description }}</td>
                <td>{{ todo.deadline }}</td>
                <td>{{ todo.status }}</td>
                <td><i class="fa fa-edit" @click="editTodo(todo)"></i></td>
                <td><i class="fa fa-trash" @click="removeTodo(index)"></i></td>
                <modal-edit v-bind:todo="currTodo"></modal-edit>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import ModalEdit from './EditModal';
export default {
    props: ['todos'],
    components: {
        ModalEdit
    },
    data() {
        return{
            currTodo: ''
        }
    },
    methods: {
        editTodo(todo) {
            this.currTodo = todo;
            $("#modal-edit").modal('show');
        },
        removeTodo(index) {
            this.todos.splice(index, 1);
        }
    },
}
</script>

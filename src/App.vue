<template>
    <div id="app" class="p-3">
        <h1> My Todo App </h1>
        <form @submit.prevent="addTodo">
            <label for="newTodo">Add New Todo</label>
            <div class="row">
            <div class="col-6">
                <div>Title: </div>
                <input v-model="newTitle" type="text" class="form-group mx-sm-3 mb-2">
            </div>
            <div class="col-6">
                <div>Description: </div>
                <textarea v-model="newDescription" class="form-group mx-sm-3 mb-2 new-text"></textarea>
            </div>
            </div>
            <div class="row">
                <div class="col-6">
                    <div>Deadline: </div>
                    <input v-model="newDeadline" type="date" class="form-group mx-sm-3 mb-2">
                </div>
                <div class="col-6">
                    <div for="status" class="form-group mx-sm-3 mb-2">Status: </div>
                    <select class="form-control select-status" v-model="newStatus">
                        <option>Open</option>
                    </select>
                </div>
            </div>
            <button type="submit" class="btn btn-success mt-3 mb-2">
                Add <i class="fa fa-plus-square"></i>
            </button>
        </form>
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
            <tr v-for="(todo, index) in todos" :todo="todo" :key="todo">
                <td>{{ index + 1 }}</td>
                <td>{{ todo.title }}</td>
                <td>{{ todo.description }}</td>
                <td>{{ todo.deadline }}</td>
                <td>{{ todo.status }}</td>
                <td><i class="fa fa-edit" @click="editTodo(todo)"></i></td>
                <td><i class="fa fa-trash" @click="removeTodo(index)"></i></td>
            </tr>
            </tbody>
        </table>
        <div id="my-modal" class="modal fade">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                    <h5 class="modal-title">Edit</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    </div>
                    <div class="modal-body">
                    <div class="form-group">
                        <label for="title">Title</label>
                        <input type="text" class="form-control" v-model="title" id="title">
                    </div>
                    <div class="form-group">
                        <label for="description">Description</label>
                        <textarea class="form-control" v-model="description" id="description"></textarea>
                    </div>
                    <div class="form-group">
                        <label for="deadline">Deadline</label>
                        <input type="date" class="form-control" v-model="deadline" id="deadline">
                    </div>
                    <div>
                        <label for="status">Status</label>
                        <select class="form-control select-status" v-model="status">
                            <option>Open</option>
                            <option>In progress</option>
                            <option>Closed</option>
                        </select>
                    </div>

                    </div>
                    <div class="modal-footer">
                    <button type="button" class="btn btn-primary" @click="saveTodo()">Save changes</button>
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
    </div>
    </div>
</template>

<script>
import ModalEdit from './components/ModalEdit';
export default {
    props: ['todo'],
    components: {
        'modal-edit': ModalEdit,
    },
    data() {
        return {
            title: '',
            description: '',
            deadline: '',
            status: '',
            todos: [
                { title: 'hieu1', description: 'hieu1', deadline: '2020-01-01', status: 'Open' },
                { title: 'hieu2', description: 'hieu2', deadline: '2020-05-01', status: 'In progress' },
                { title: 'hieu3', description: 'hieu3', deadline: '2020-01-19', status: 'Closed' },
            ]
        }
    },
    methods: {
        addTodo() {
            this.todos.push({
                title: this.newTitle,
                description: this.newDescription,
                deadline: this.newDeadline,
                status: this.newStatus,
                done: false
            });
        },
        removeTodo(index) {
            this.todos.splice(index, 1);
        },
        editTodo(todo) {
        	this.title = todo.title;
            this.description = todo.description;
            this.deadline = todo.deadline;
            this.status = todo.status;
            $("#my-modal").modal('show');
        },
        saveTodo() {

        }
    },
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

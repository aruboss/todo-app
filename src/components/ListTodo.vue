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
        <div id="modal-edit" class="modal fade">
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
export default {
    props: ['todos'],
    data() {
        return{
            todos: this.todos,
            title: '',
            description: '',
            deadline: '',
            status: ''
        }
    },
    methods: {
        editTodo(todo) {
        	this.title = todo.title;
            this.description = todo.description;
            this.deadline = todo.deadline;
            this.status = todo.status;
            $("#modal-edit").modal('show');
        },
        removeTodo(index) {
            this.todos.splice(index, 1);
        },
        saveTodo() {

        }
    },
}
</script>

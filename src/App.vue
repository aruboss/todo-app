<template>
    <div id="app" class="p-3">
        <h1> {{title}} </h1>
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
                <td><input type="text" v-model="todo.title"></td>
                <td><textarea type="text" v-model="todo.description" class="edit-text"></textarea></td>
                <td><input type="date" v-model="todo.deadline"></td>
                <td>
                    <select class="form-control select-status" v-model="todo.status">
                        <option>Open</option>
                        <option>In progress</option>
                        <option>Closed</option>
                    </select>
                </td>
                <td @click="isEditing = !isEditing" v-if="!isEditing"><i class="fa fa-edit"></i></td>
                <td @click="save" v-else-if="isEditing"><i class="fa fa-save"></i></td>
                <td><i class="fa fa-trash" @click="removeTodo(index)"></i></td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: 'My ToDo List',
            todos: [
                { title: 'hieu1', description: 'hieu1', deadline: '2020-01-01', status: 'Open' },
                { title: 'hieu2', description: 'hieu2', deadline: '2020-05-01', status: 'In progress' },
                { title: 'hieu3', description: 'hieu3', deadline: '2020-01-19', status: 'Closed' },
            ],
            isEditing: false
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
        editToDo(index) {
            this.isEditing = true;
        },
        save() {
            this.isEditing = false;
    }
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

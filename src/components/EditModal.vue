<template>
    <div id="modal-edit" class="modal fade">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                    <h5 class="modal-title">Edit</h5>
                    </div>
                    <div class="modal-body">
                        <div class="form-group">
                            <label for="title">Title</label>
                            <input type="text" class="form-control" v-model="todo.title" id="title">
                        </div>
                        <div class="form-group">
                            <label for="description">Description</label>
                            <textarea class="form-control" v-model="todo.description" id="description"></textarea>
                        </div>
                        <div class="form-group">
                            <label for="deadline">Deadline</label>
                            <input type="date" class="form-control" v-model="todo.deadline" id="deadline">
                        </div>
                        <div>
                            <label for="status">Status</label>
                            <select class="form-control select-status" v-model="todo.status">
                                <option>Open</option>
                                <option>In progress</option>
                                <option>Closed</option>
                            </select>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
export default {
    props: ['todo'],
    methods: {
        editTodo(todo) {
            this.$emit('edit-todo', todo);
        }
    }
}
</script>

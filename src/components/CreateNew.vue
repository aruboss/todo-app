<template>
    <div>
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
    </div>
</template>

<script>
export default {
    data() {
        return {
            newTitle: '',
            newDescription: '',
            newDeadline: '',
            newStatus: ''
        }
    },
    methods: {
        addTodo() {
            this.$emit('create-new',{
                title: this.newTitle,
                description: this.newDescription,
                deadline: this.newDeadline,
                status: this.newStatus
            });
            this.newTitle = '',
            this.newDescription = '',
            this.newDeadline = '',
            this.newStatus = ''
        }
    }
}
</script>

<template>
    <div>
        <table id='app' class='table'>
            <thead>
            <tr>
                <th width = "4%"><span></span></th>
                <th width = "10%"><span>Title</span></th>
                <th width = "50%"><span>Description</span></th>
                <th width = "20%" @click="sort('deadline')"><span>Deadline</span></th>
                <th width = "10%" @click="sort('status')"><span>Status</span></th>
                <th width = "3%"><span>Edit</span></th>
                <th width = "3%"><span>Delete</span></th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(todo, index) in sortedTodos" :key="index">
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
        <div class="text-right">
            <button type="submit" class="btn btn-success mt-3 mb-2" @click="prevPage">
                <i class="fa fa-arrow-circle-left"></i> Prev
            </button>
            <button type="submit" class="btn btn-success mt-3 mb-2" @click="nextPage">
                Next <i class="fa fa-arrow-circle-right"></i>
            </button>
        </div>
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
            currTodo: '',
            currSort: 'deadline',
            currSortDir: 'arc',
            currPage: 1,
            pageSize: 3
        }
    },
    methods: {
        editTodo(todo) {
            this.currTodo = todo;
            $("#modal-edit").modal('show');
        },
        removeTodo(index) {
            this.todos.splice(index, 1);
        },
        sort(s) {
            if( s === this.currSort){
                this.currSortDir = this.currSortDir === 'arc'?'desc':'arc';
            }
            this.currSort = s;
        },
        nextPage() {
            if((this.currPage * this.pageSize) < this.todos.length){
                this.currPage++;
            }
        },
        prevPage() {
            if(this.currPage >1 ) this.currPage--;
        }
    },
    computed: {
        sortedTodos() {
            return this.todos.sort((a,b) => {
                var modifier = 1;
                if(this.currSortDir === 'desc'){
                    modifier = -1;
                }
                if(a[this.currSort] < b[this.currSort]){
                    return -1 * modifier;
                }
                if(a[this.currSort] > b[this.currSort]){
                    return 1 * modifier;
                }
                return 0;
            }).filter((row, index) => {
                var start = (this.currPage - 1) * this.pageSize;
                var end = this.currPage * this.pageSize;
                if(index >= start && index < end) return true;
            })
        }
}
}
</script>

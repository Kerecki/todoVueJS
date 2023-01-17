var todos1 = [];
var todos2 = [
    {
        text: 'Aprender HTML, CSS e Javascript',
        done: true
    },
    {
        text: 'Aprender o básico de Vue JS',
        done: true
    },
    {
        text: 'Completar o desafio de Vue JS com excelência',
        done: false
    }
]

const todosApp = {
    data() {
        return {
            todos: [],
            newTodo: {
                done:false
            }
        }
    },
    methods: {
        addTodo: function() {
            if(this.newTodo.text){
                this.todos.push(this.newTodo);
                this.newTodo = {
                    done: false
                };
                localStorage.setItem("todos",JSON.stringify(this.todos)); 
            }else{
                alert('O texto da tarefa é obrigatório!!')
            }
        },
        clearAll: function(){
            this.todos=[];
            localStorage.setItem('todos', JSON.stringify(this.todos));
        },
        markAsDone: function(todo){
            todo.done = !todo.done;
            localStorage.setItem("todos",JSON.stringify(this.todos));
        }
    },
    created(){
        this.todos = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : this.todos;
    }
};






Vue.createApp(todosApp).mount('#app');

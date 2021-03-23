Vue.config.devtools = true;

var app = new Vue ({
    el: '#app',
    data : {
        newTask: '',
        tasks: [
            'Svegliarsi',
            'Fare Colazione', 
            'Imparare Javascript'
        ]        
    },

    methods: {

        addTask() {
            if (this.newTask != "") {
                this.tasks.push(this.newTask);
                this.newTask = '';
            }          
        },
    
        removeTask(index) {
            this.tasks.splice(index, 1)
        },

        
    }
    
        

})
console.log(app);


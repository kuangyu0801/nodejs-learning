const tasks = {
    tasks: [{
        text: 'Grocery shopping',
        completed: true
    }, {
        text: 'Clean yard',
        completed: false
    }, {
        text: 'Film course',
        completed: false
    }],
    getTasksToDo: function() {
        const incompleteTasks = []
        this.tasks.forEach((element) => {
            console.log(element)
            if (!element.completed) {
                incompleteTasks.push(element)
            }
        });
        return incompleteTasks
    },
    getTasksToDo2: function() {
        return this.tasks.filter((task) => task.completed === false)
    } 
}

console.log(tasks.getTasksToDo())
console.log(tasks.getTasksToDo2())

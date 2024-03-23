class TaskList {
  constructor() {
      this.tasks = [];
      this.lastId = 0;
  }

  addTask(description) {
    this.lastId++
    this.tasks.push({description, completed: false , id: this.lastId, priority: 0})
  }

  completeTask(taskId) {
    let task = this.tasks.find((task) => task.id == taskId)
    task.completed = true;
  }

  deleteTask(taskId) {
    let index = this.tasks.indexOf((task) => task.id == taskId);
    this.tasks.splice(index-1,1);
  }

  listPendingTasks() {
    console.log("Pending tasks:")
    let pendingTasks = this.tasks.filter(task => task.completed === false)
    pendingTasks.forEach((task) => console.log(`${task.id}: ${task.description}`))
  }

  setPriority(taskId, priority){
    let task = this.tasks.find((task) => task.id == taskId)
    task.priority = priority
  }

  listTasksByPriority() {
    let sortedTasks = this.tasks.sort((a, b) => a.priority == 0 ? 1 : a.priority - b.priority)
    sortedTasks.forEach(task => console.log(task.description))
  }

  // deadline format: YYYY-MM-DD
  setDeadline(taskId, deadline) {
    let task = this.tasks.find((task) => task.id == taskId)
    task.deadline = deadline;
  }

  listTodaysTasks() {
    console.log("Today's tasks:")

    this.tasks.forEach((task)=> new Date().toISOString().split('T')[0] == task.deadline && console.log(`${task.id}: ${task.description}`))

  }
}


module.exports = TaskList;
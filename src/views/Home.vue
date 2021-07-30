<template>
  <div class="home container">
    <div class="col-12" id="main-page">
      <button type="submit" class="btn btn-primary login-btn mt-5 mx-5" id="add-task" @click.prevent="addTask()">+</button>
      <div v-for="task in tasks" :key="task.id">
        <h3 class="my-5 mx-5">{{ task.name }}</h3>
        <div class="row my-5 mx-5">
          <div class="col-sm-3">
            <div class="card" id="main-task-card">
              <div class="card-body">
                <a id="task-done" @click.prevent="taskDone(task.id)">X</a>
                <h5 class="card-title">{{ task.task }}</h5>
              </div>
            </div>
          </div>
        </div>
        <div class="dropdown-divider"></div>
        <div>
          <button type="submit" class="btn btn-primary login-btn mt-5 mx-5" id="add-task" @click.prevent="addSubtask(task.id)">+</button>
          <div class="row my-5 mx-5 overflow-auto">
            <h4>Subtask</h4>
            <div class="col-sm-3" v-for="subtask in subtasks" :key="subtask.id">
              <div class="card" id="subtask-card">
                <div class="card-body">
                  <a id="subtask-done" @click.prevent="subtaskDone(subtask.id)">X</a>
                  <h5 class="card-title">{{ subtask.subtask }}</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  sockets: {
    tasks (data) {
      this.$store.commit('SET_TASKS', data)
    },
    subtasks (data) {
      this.$store.commit('SET_SUBTASKS', data)
    }
  },
  created () {
    this.$socket.emit('fetchTasks')
    this.$socket.emit('fetchSubtasks')
  },
  computed: {
    tasks () {
      return this.$store.state.tasks
    },
    subtasks () {
      return this.$store.state.subtasks
    }
  },
  methods: {
    subtaskDone (id) {
      this.$socket.emit('deleteSubtask', id)
    },
    taskDone (id) {
      this.$socket.emit('deleteTask', id)
      this.tasks = null
    },
    addTask () {
      this.$router.push('/add')
    },
    addSubtask (id) {
      this.$store.commit('SET_TASKID', id)
      this.$router.push('/subtask')
    }
  }
}
</script>

<style>
.container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

#add-task {
  background-color: #D9ADAD;
  border-color: #ad8c8c;
  color: #5D5D5A;
}

#add-task:hover {
  background-color: #ad8c8c;
  border-color: #D9ADAD;
  color: #5D5D5A;
}

#main-page {
  background-color: #FFCDAB;
  height: 200vh;
  width: 95vw;
}

#main-task-card {
  background-color: #EF4F4F;
}

#task-done {
  color: #5D5D5A;
  cursor: pointer;
}

#task-done:hover {
  color: #D9ADAD;
  cursor: pointer;
}

#subtask-card {
  background-color: #74C7B8;
}

#subtask-done {
  color: #5D5D5A;
  cursor: pointer;
}

#subtask-done:hover {
  color: #D9ADAD;
  cursor: pointer;
}
</style>

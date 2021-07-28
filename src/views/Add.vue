<template>
  <div class="home container">
    <div class="col-12" id="add-page">
      <form class="login-form" id="add-task-form" @submit.prevent="addNewTask">
        <h4 class="login-here" id="add-new-task">Add new task</h4>
        <br>
        <div class="row mb-3">
          <label for="emailLogin" class="col-sm-12 col-form-label" id="task-label">Name</label>
          <div class="col-sm-12">
            <input type="text" class="form-control" id="task-name" v-model="name">
          </div>
          <div class="col-sm-12">
            <div class="form-group">
              <label for="exampleFormControlTextarea1">Task</label>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" v-model="task"></textarea>
            </div>
          </div>
        </div>
        <button type="submit" class="btn btn-primary login-btn" id="add-task-submit">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Add',
  data () {
    return {
      task: '',
      name: ''
    }
  },
  methods: {
    addNewTask () {
      const payload = {
        name: this.name,
        task: this.task
      }
      this.$store.dispatch('addNewTask', payload)
        .then(_ => {
          this.$router.push('/')
        })
        .catch(err => {
          console.log(err.response)
        })
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
#add-page {
  background-color: #FFCDAB;
  width: 95vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>

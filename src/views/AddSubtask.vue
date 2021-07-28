<template>
    <div class="home container">
    <div class="col-12" id="add-subtask-page">
      <form class="login-form" id="add-subtask-form" @submit.prevent="addNewSubtask(taskId)">
        <h4 class="login-here" id="add-new-subtask">Add new subtask</h4>
        <br>
        <div class="row mb-3">
          <div class="col-sm-12">
            <div class="form-group">
              <label for="exampleFormControlTextarea1">Subtask</label>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" v-model="subtask"></textarea>
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
  name: 'AddSubtask',
  data () {
    return {
      subtask: ''
    }
  },
  methods: {
    addNewSubtask (id) {
      const payload = {
        TaskId: id,
        subtask: this.subtask
      }
      this.$store.dispatch('addNewSubtask', payload)
        .then(_ => {
          this.$router.push('/')
        })
        .catch(err => {
          console.log(err.response)
        })
    }
  },
  computed: {
    taskId () {
      return this.$store.state.taskId
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

#add-subtask-page {
  background-color: #FFCDAB;
  width: 95vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>

<template>

    <section>
      <div class="container">
        <div class="card shadow" id="card-table">
          <div class="card-header">
            <h1 style="display:inline-block;" class="text-center">Histories List</h1>  
            <div class="d-flex justify-content-end"> 
            </div>
    <!-- End filter section -->
            </div>
            <div>
                <table class="table table-striped shadow" id="table1">
                    <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Updated By</th>
                        <th>Created At</th>

                    </tr>
                    </thead>
                    <tbody>

                    </tbody>
                </table>
              </div>
        </div>
      </div>  
    </section>
</template>

<script>
import instanceServer from "../apis/server.js"

export default {
    name: "HistoryPage",
  created() {
    if (!localStorage.access_token) {
      this.$store.commit('LOGIN_STATUS', false)
    } else {
      this.$store.commit('LOGIN_STATUS', true)
    }
  }
}
</script>

<style>
.container {
    height: 100%
}
</style>
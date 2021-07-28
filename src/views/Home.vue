<template>
  <div class="home container">
    <div class="col" id="sidebar">
    </div>
    <div class="col-12" id="main-page">
      <div>
        <h3 class="my-5 mx-5">MAIN TASK</h3>
        <div class="row my-5 mx-5">
          <div class="col-sm-3">
            <div class="card" id="main-task-card">
              <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" class="btn btn-primary">Done</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="dropdown-divider"></div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home'
}
</script>

<style>
.container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

#sidebar {
  height: 100vh;
  width: 20vw;
}

#main-page {
  background-color: #FFCDAB;
  height: 100vh;
  width: 80vw;
}

#main-task-card {
  background-color: #EF4F4F;
}
</style>

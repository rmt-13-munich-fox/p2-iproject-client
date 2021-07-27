<template>
  <div class="news-card">
    <img src="../assets/images/news_portal.jpg" alt="" />
    <div class="news-info">
      <div class="news-title">
        Ada apa dengan cinta
      </div>
      <hr />
      <div class="news-description">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus
        assumenda eligendi amet harum placeat pariatur, corrupti voluptatum
        animi deserunt hic expedita obcaecati dicta quaerat itaque non odio
        dolorem sapiente in magni recusandae quis. Ratione nemo, expedita
        tempora assumenda quam a harum nostrum consequuntur voluptates hic
        accusantium dolor ullam facere in corrupti dicta esse repellendus beatae
        provident quas aspernatur? Explicabo voluptatibus quibusdam dolor? Amet
        repellendus, vel non quos, eaque mollitia quod a, distinctio magni
        minima debitis?
      </div>
      <div class="card-menu">
        <a href="#">
          <i class="bx bx-heart"></i>
        </a>
        <a href="#">
          <i class="bx bx-user-voice"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card"
};
</script>

<style scoped>
  .news-card{
    width: 25rem;
    transition: all 0.5s ease-out;
  }
  .sidebar.active ~ .home_content .news-card{
    width:350px;
  }
</style>

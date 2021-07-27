<template>
  <div class="content-wrapper">
    <div class="content-wrapper-header">
      <div class="content-wrapper-context">
        <h3 class="img-content">Corona virus news and information</h3>
        <div class="content-text">
          the world is together facing the corona virus, let's together care about this outbreak
        </div>
        <button class="content-button"><small><em>powered by</em></small> Hacktiv8</button>
      </div>
      <img
        class="content-wrapper-img mt-0"
        :src="require(`@/assets/h8.png`)"
        alt=""
      />
    </div>
  </div>
</template>

<script>
export default {
  name : 'Jumbotron'
};
</script>

<style scoped>
.content-wrapper {
  display: flex;
  flex-direction: column;
  color: var(--theme-color);
  padding: 20px 40px;
  height: 100%;
  overflow: auto;
  background-color: var(--theme-bg-color);
}
@media screen and (max-width: 510px) {
  .content-wrapper {
    padding: 20px;
  }
}
.content-wrapper-header {
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  background-image: url("https://www.transparenttextures.com/patterns/cubes.png"),
    linear-gradient(
      to right top,
      #cf4af3,
      #e73bd7,
      #f631bc,
      #fd31a2,
      #ff3a8b,
      #ff4b78,
      #ff5e68,
      #ff705c,
      #ff8c51,
      #ffaa49,
      #ffc848,
      #ffe652
    );
  border-radius: 14px;
  padding: 20px 40px;
}
@media screen and (max-width: 415px) {
  .content-wrapper-header {
    padding: 20px;
  }
}
.content-wrapper.overlay {
  pointer-events: none;
  transition: 0.3s;
  background-color: var(--overlay-bg);
}
.content-text {
  font-weight: 400;
  font-size: 14px;
  margin-top: 16px;
  line-height: 1.7em;
  color: #ebecec;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
.content-wrapper-context {
  max-width: 350px;
}
.content-button {
  background-color: #3a6df0;
  border: none;
  padding: 8px 26px;
  color: #fff;
  border-radius: 20px;
  margin-top: 16px;
  cursor: pointer;
  transition: 0.3s;
  white-space: nowrap;
  cursor: none;
}
.content-wrapper-img {
  width: 186px;
  object-fit: cover;
  margin-top: -25px;
  object-position: center;
}
@media screen and (max-width: 570px) {
  .content-wrapper-img {
    width: 110px;
  }
}
</style>
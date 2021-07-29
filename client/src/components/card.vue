<template>
  <div class="card">
    <div class="card-header text-primary">{{chat.chat[1]}}</div>
    <div class="card-body">
      <blockquote class="blockquote mb-0">
        <p>{{chat.chat[0]}}</p>
      </blockquote>
    </div>
  </div>
</template>

<script>
export default {
  name : 'Card',
  props: ['chat'],
  computed: {
    get_name() {
      return localStorage.username
    }
  }
};
</script>

<style>
</style>
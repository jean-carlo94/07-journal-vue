
<template>
  <main>
    <h1>Hello HOME</h1>

    <button @click="goToDaybook" class="btn btn-primary">Primary</button>
    <button @click="goToDaybook" class="btn btn-secondary">Secondary</button>
    <button @click="goToDaybook" class="btn btn-success">Success</button>
  </main>
</template>

  <script lang="ts">
    export default {
      methods: {
        goToDaybook() {
          this.$router.push({ name: 'no-entry' })
        }
      }
    }
  </script>


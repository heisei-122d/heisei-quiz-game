<template>
  <div class="home">
    <HelloWorld></HelloWorld>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '../components/pages/test.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>

<template>
<v-container>
  <search-box/>
  <div v-if="this.resultados.length > 0">
    <resultados></resultados>
  </div>
  <v-btn @click="test()">
    Test
  </v-btn>
</v-container>
</template>

<script>
import Resultados from '../components/Resultados.vue'
  import SearchBox from '../components/SearchBox.vue'

  export default {
    name: 'Home',
    components: {
      SearchBox,
      Resultados,
    },
    computed: {
      resultados(){
        return this.$store.state.resultados;
      }
    },
    methods: {
      test: function(){
        console.log(this.$store.state.resultados);
      }
    }
  }
</script>

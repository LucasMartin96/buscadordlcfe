<template>
  <v-container>
    <form>
      <v-text-field
        hide-details
        prepend-icon="mdi-magnify"
        single-line
        v-model="words"
        required
        @keydown.enter.prevent="submit">
        </v-text-field>
        <br/>
        <v-btn class="text-center" @click="submit">Search</v-btn>
    </form>
    <br>
    <v-alert
      border="top"
      color="red lighten-2"
      dark
      v-model="dialog"
    >
      Search text field cannot be empty
    </v-alert>
  </v-container>
</template>

<script>
import axios from "axios";
  export default {
    name: 'SearchBox',

    data: function() {
      return {
        words:"",
        dialog:false
      }
    }
    ,
    methods: {
      submit: async function (){
        if(this.words === ""){
          this.dialog = true;
          return;
        }
        var url = "http://desktop-9r81r6b:8080/Buscador/buscador/" + this.words;
        console.log(this.words);
        let w = this.words;
        let data = await axios.get(url).then(function(response){
          return response.data;
        })
        .catch(err => {
          console.log(err);
          return null;
        });
        console.log(data);
        if (data != null) this.save(data);
      },
      save: function(data){
        this.$store.state.resultados = data;
      }
    }
  }
</script>

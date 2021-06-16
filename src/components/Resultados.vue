<template>
  <v-container class="grey lighten-5">
    <v-simple-table dark>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">
              Titulo
            </th>
            <th class="text-left">
              CantidadPalabras
            </th>
            <th class="text-left">
              Palabras
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="r in resultados" :key="r.documento.titulo">
            <td>{{ r.documento.titulo }}</td>
            <td>{{ r.documento.cantidadPalabras }}</td>
            <td><v-btn @click="showHideDialog(r)">Detalle</v-btn></td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    <v-dialog v-model="dialog" width="500">
      <v-card >
        <div>
          <v-toolbar color="primary" dark >{{this.chosen.documento.titulo}}</v-toolbar>
        </div>
        
        <v-card-text>
          <v-simple-table>
            <thead>
              <tr>
                <th class="text-left">
                  Palabra
                </th>
                <th class="text-left">
                  Peso
                </th>
                <th class="text-left">
                  Frecuencia
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="palabra in chosen.palabras" :key="palabra.palabra">
                <td>{{palabra.palabra}}</td>
                <td>{{palabra.peso}}</td>
                <td>{{palabra.frecuencia}}</td>
              </tr>
            </tbody>
          </v-simple-table>
        </v-card-text>
        <v-card-actions class="justify-end">
          <v-btn text @click="dialog = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  name: 'Resultados',
  data: function() {
    return {
      dialog: false,
      chosen: {
        documento: {
        cantidadPalabras: 0,
        path:"",
        titulo:"",
        palabras: [],
        peso:0
        },
      },
      words:"",
    };
  },
  computed: {
    resultados() {
      return this.$store.state.resultados;
    },
  },
  methods: {
    showHideDialog: function(r) {
      this.dialog = !this.dialog;
      this.chosen = r;
    },
  },
};
</script>

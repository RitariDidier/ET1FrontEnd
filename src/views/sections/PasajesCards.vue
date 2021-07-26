<template>
  <v-responsive
    id="PasajeCards"
    class="pasajesPage"
  >
    <v-row
      class="v-row"
    >
      <v-card
        class="card"
        outlined
        rounded
      >
        <v-img
          :src="require(`../../assets/Antofagasta.jpg`)"
          class="white--text"
          gradient="to bottom, rgba(11, 28, 61, .9), rgba(0,0,0,.4)"
        >
          <v-container
            fluid
            class="campo"
          >
            <label>
              Origen:
            </label>
            <label>
              ' Origen'
            </label>
          </v-container>
          <v-container
            fluid
            class="campo"
          >
            <label>
              Destino:
            </label>
            <label>
              ' Destino'
            </label>
          </v-container>
          <v-container
            fluid
            class="campo"
          >
            <label>
              Fecha:
            </label>
            <label>
              ' Fecha'
            </label>
          </v-container>
          <v-container
            fluid
            class="campo"
          >
            <label>
              Hora:
            </label>
            <label>
              ' Hora'
            </label>
          </v-container>
        </v-img>
      </v-card>
    </v-row>
  </v-responsive>
</template>

<script>
  export default {
    name: 'PasajesCards',
    data: () => ({
      pasajes: [],
      pasaje: {
        origen: '',
        destino: '',
        fecha: '',
        hora: '',
      },
    }),
    methods: {
    },
    provide: {
      heading: { align: 'center' },
    },
  }
</script>

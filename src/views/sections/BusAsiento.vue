<template>
  <v-responsive
    class="section-bus"
  >
    <v-container
      class="contenedor-cards"
    >
      <v-row
        class="contenedor-responsive"
      >
        <v-card
          class="card1"
        >
          <base-btn
            color="orange"
            :ripple="false"
            class="font-weight-bold mt-2 base-btn"
            min-width="96"
            text
            @click="recorrer"
          >
            Viaje Ida
          </base-btn>
          <ul
            id="v-for-object"
            class="asientos"
          >
            <li
              v-for="(asiento, index) in bus.asientos"
              :key="asiento.id"
              @click="seleccionar(index)"
            >
              <v-img
                v-if="asiento.seleccionado"
                :src="require(`../../assets/Asiento-Seleccionado.png`)"
                class="asientos--iconos"
              />
              <v-img
                v-if="!asiento.seleccionado"
                :src="require(`../../assets/${asiento.avatar}`)"
                class="asientos--iconos"
              />
              {{ index+1 }}
            </li>
          </ul>
        </v-card>
        <v-card
          class="card2"
        >
          <base-btn
            color="green"
            :ripple="false"
            class="font-weight-bold mt-2 base-btn"
            min-width="96"
            text
          >
            Viaje Vuelta
          </base-btn>
        </v-card>
      </v-row>
    </v-container>
  </v-responsive>
</template>

<script>
  export default {
    name: 'BusAsiento',
    data: () => ({
      bus: {
        asientos: [],
        patente: '',
        conductor: '',
      },
      asiento: {
        _id: '1',
        disponiblidad: '',
        seleccionado: false,
        numero: '',
        avatar: 'Asiento-Vacio.png',
      },
      asiento2: {
        _id: '2',
        disponiblidad: '',
        seleccionado: false,
        numero: '',
        avatar: 'Asiento-Vacio.png',
      },
      asiento3: {
        _id: '3',
        disponiblidad: '',
        seleccionado: false,
        numero: '',
        avatar: 'Asiento-Vacio.png',
      },
    }),
    mounted () {
      this.llenar()
    },
    methods: {
      llenar () {
        this.bus.asientos = [
          this.asiento,
          this.asiento2,
          this.asiento3,
        ]
      },
      seleccionar (i) {
        if (this.bus.asientos[i].seleccionado) {
          this.bus.asientos[i].seleccionado = false
        } else {
          this.bus.asientos[i].seleccionado = true
        }
      },
      recorrer () {
        for (let i = 0; i < this.bus.asientos.length; i++) {
          console.log(this.bus.asientos[i].seleccionado)
        }
      },
    },
  }
</script>

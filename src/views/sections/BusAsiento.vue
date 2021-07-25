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
            @click="enviar"
          >
            Viaje Ida
          </base-btn>
          <v-container
            class="campo--conductor"
          >
            <base-btn
              color="blue"
              :ripple="false"
              class="font-weight-bold mt-2"
              min-width="96"
              text
            >
              Conductor
            </base-btn>
            <base-btn
              color="orange"
              :ripple="false"
              class="font-weight-bold mt-2"
              min-width="96"
              text
            >
              {{ viaje.bus.conductor }}
            </base-btn>
          </v-container>
          <ul
            id="v-for-object"
            class="asientos"
          >
            <li
              v-for="(asiento) in viaje.bus.asientos"
              :key="asiento.id"
              @click="!asiento.ocupado ? seleccionar(asiento) : 2 "
            >
              <div
                v-if="!asiento.ocupado"
              >
                <v-img
                  :src="asiento.avatar"
                  class="asientos--iconos"
                />
                {{ asiento.numero }}
              </div>
              <div
                v-else-if="asiento.ocupado"
              >
                <v-img
                  :src="asiento.avatar"
                  class="asientos--iconos"
                />
                {{ asiento.numero }}
              </div>
            </li>
          </ul>
        </v-card>
        <v-card
          v-if="isViajeVuelta"
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
  import busService from '@/services/bus.service'
  import { mapState, mapGetters, mapMutations } from 'vuex'
  export default {
    name: 'BusAsiento',
    data: () => ({
      viaje: JSON.parse(localStorage.getItem('viajeIda')),
      asientoSelected: null,
      asientoAnterior: null,
    }),
    computed: {
      ...mapGetters(['isViajeIda', 'isViajeVuelta']),
    },
    mounted () {
      console.log(this.isViajeIda)
      console.log(this.isViajeVuelta)
    },
    methods: {
      seleccionar (asiento) {
        console.log(asiento)
        asiento.ocupado = true
        asiento.avatar = 'http://localhost:3000/public/asiento/asiento_selec.png'
        this.asientoAnterior = this.asientoSelected
        this.asientoSelected = asiento
        if (this.asientoAnterior) {
          this.viaje.bus.asientos[this.asientoAnterior.numero - 1].ocupado = false
          this.viaje.bus.asientos[this.asientoAnterior.numero - 1].avatar = 'http://localhost:3000/public/asiento/asiento_vacio.png'
        }
      },
      enviar () {
        this.asientoSelected.avatar = 'http://localhost:3000/public/asiento/asiento_vendido.png'
        busService
          .updateAsiento(this.asientoSelected)
          .then((response) => {
            console.log(response)
          })
          .catch((error) => {
            console.log(error.response.data.error)
          })
      },
    },
  }
</script>

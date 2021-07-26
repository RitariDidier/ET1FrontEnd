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
          :disabled="enviado[0]"
        >
          <v-container
            class="card1-contenedor"
          >
            <base-btn
              color="orange"
              :ripple="false"
              class="font-weight-bold base-btn"
              min-width="96"
              text
            >
              Viaje Ida
            </base-btn>
            <v-container
              class="campo campo--fecha"
            >
              <base-btn
                color="blue"
                :ripple="false"
                class="font-weight-bold btn--label"
                min-width="96"
                text
              >
                Origen
              </base-btn>
              <base-btn
                color="orange"
                :ripple="false"
                class="font-weight-bold btn--content"
                min-width="96"
                text
              >
                {{ viaje.origen }}
              </base-btn>
            </v-container>
            <v-container
              class="campo campo--fecha"
            >
              <base-btn
                color="blue"
                :ripple="false"
                class="font-weight-bold btn--label"
                min-width="96"
                text
              >
                Destino
              </base-btn>
              <base-btn
                color="orange"
                :ripple="false"
                class="font-weight-bold btn--content"
                min-width="96"
                text
              >
                {{ viaje.destino }}
              </base-btn>
            </v-container>
            <v-container
              class="campo campo--fecha"
            >
              <base-btn
                color="blue"
                :ripple="false"
                class="font-weight-bold btn--label"
                min-width="96"
                text
              >
                Fecha de Viaje
              </base-btn>
              <base-btn
                color="orange"
                :ripple="false"
                class="font-weight-bold btn--content"
                min-width="96"
                text
              >
                {{ viaje.fecha }}
              </base-btn>
            </v-container>
            <v-container
              class="campo campo--hora"
            >
              <base-btn
                color="blue"
                :ripple="false"
                class="font-weight-bold btn--label"
                min-width="96"
                text
              >
                Hora de Salida
              </base-btn>
              <base-btn
                color="orange"
                :ripple="false"
                class="font-weight-bold btn--content"
                min-width="96"
                text
              >
                {{ viaje.horaSalida }}
              </base-btn>
            </v-container>
            <v-container
              class="campo campo--fecha"
            >
              <base-btn
                color="blue"
                :ripple="false"
                class="font-weight-bold btn--label"
                min-width="96"
                text
              >
                Conductor
              </base-btn>
              <base-btn
                color="orange"
                :ripple="false"
                class="font-weight-bold btn--content"
                min-width="96"
                text
              >
                {{ viaje.bus.conductor }}
              </base-btn>
            </v-container>
            <v-container
              class="campo campo--patente"
            >
              <base-btn
                color="blue"
                :ripple="false"
                class="font-weight-bold btn--label "
                min-width="96"
                text
              >
                Patente:
              </base-btn>
              <base-btn
                color="orange"
                :ripple="false"
                class="font-weight-bold btn--content"
                min-width="96"
                text
              >
                {{ viaje.bus.patente }}
              </base-btn>
            </v-container>
            <base-btn
              color="orange"
              :ripple="false"
              class="select-btn"
              min-width="96"
              @click="enviar"
            >
              Comprar Asiento
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
        <!-- CARD 2 -->
        <v-card
          v-if="isViajeVuelta"
          class="card2"
          :disabled="enviado[1]"
        >
          <v-container
            class="card2-contenedor"
          >
            <base-btn
              color="green"
              :ripple="false"
              class="font-weight-bold base-btn"
              min-width="96"
              text
            >
              Viaje Vuelta
            </base-btn>
            <v-container
              class="campo campo--fecha"
            >
              <base-btn
                color="blue"
                :ripple="false"
                class="font-weight-bold btn--label"
                min-width="96"
                text
              >
                Origen
              </base-btn>
              <base-btn
                color="green"
                :ripple="false"
                class="font-weight-bold btn--content"
                min-width="96"
                text
              >
                {{ viajeVuelta.origen }}
              </base-btn>
            </v-container>
            <v-container
              class="campo campo--fecha"
            >
              <base-btn
                color="blue"
                :ripple="false"
                class="font-weight-bold btn--label"
                min-width="96"
                text
              >
                Destino
              </base-btn>
              <base-btn
                color="green"
                :ripple="false"
                class="font-weight-bold btn--content"
                min-width="96"
                text
              >
                {{ viajeVuelta.destino }}
              </base-btn>
            </v-container>
            <v-container
              class="campo campo--fecha"
            >
              <base-btn
                color="blue"
                :ripple="false"
                class="font-weight-bold btn--label"
                min-width="96"
                text
              >
                Fecha de Viaje
              </base-btn>
              <base-btn
                color="green"
                :ripple="false"
                class="font-weight-bold btn--content"
                min-width="96"
                text
              >
                {{ viajeVuelta.fecha }}
              </base-btn>
            </v-container>
            <v-container
              class="campo campo--hora"
            >
              <base-btn
                color="blue"
                :ripple="false"
                class="font-weight-bold btn--label"
                min-width="96"
                text
              >
                Hora de Salida
              </base-btn>
              <base-btn
                color="green"
                :ripple="false"
                class="font-weight-bold btn--content"
                min-width="96"
                text
              >
                {{ viajeVuelta.horaSalida }}
              </base-btn>
            </v-container>
            <v-container
              class="campo campo--fecha"
            >
              <base-btn
                color="blue"
                :ripple="false"
                class="font-weight-bold btn--label"
                min-width="96"
                text
              >
                Conductor
              </base-btn>
              <base-btn
                color="green"
                :ripple="false"
                class="font-weight-bold btn--content"
                min-width="96"
                text
              >
                {{ viajeVuelta.bus.conductor }}
              </base-btn>
            </v-container>
            <v-container
              class="campo campo--patente"
            >
              <base-btn
                color="blue"
                :ripple="false"
                class="font-weight-bold btn--label "
                min-width="96"
                text
              >
                Patente:
              </base-btn>
              <base-btn
                color="green"
                :ripple="false"
                class="font-weight-bold btn--content"
                min-width="96"
                text
              >
                {{ viajeVuelta.bus.patente }}
              </base-btn>
            </v-container>
            <base-btn
              :ripple="false"
              color="green"
              class="select-btn"
              min-width="96"
              @click="enviarVuelta"
            >
              Comprar Asiento
            </base-btn>
          </v-container>
          <ul
            id="v-for-object"
            class="asientos"
          >
            <li
              v-for="(asiento) in viajeVuelta.bus.asientos"
              :key="asiento.id"
              @click="!asiento.ocupado ? seleccionarVuelta(asiento) : 2 "
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
      </v-row>
    </v-container>
  </v-responsive>
</template>

<script>
  import busService from '@/services/bus.service'
  import { mapGetters } from 'vuex'
  export default {
    name: 'BusAsiento',
    data: () => ({
      viaje: JSON.parse(localStorage.getItem('viajeIda')),
      asientoSelected: null,
      asientoAnterior: null,
      viajeVuelta: JSON.parse(localStorage.getItem('viajeVuelta')),
      asientoSelectedVuelta: null,
      asientoAnteriorVuelta: null,
      enviado: [false, false],
    }),
    computed: {
      ...mapGetters(['isViajeIda', 'isViajeVuelta']),
    },
    mounted () {
      console.log(this.enviado[0])
      // console.log(this.isViajeVuelta)
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
      seleccionarVuelta (asiento) {
        asiento.ocupado = true
        asiento.avatar = 'http://localhost:3000/public/asiento/asiento_selec.png'
        this.asientoAnteriorVuelta = this.asientoSelectedVuelta
        this.asientoSelectedVuelta = asiento
        if (this.asientoAnteriorVuelta) {
          this.viajeVuelta.bus.asientos[this.asientoAnteriorVuelta.numero - 1].ocupado = false
          this.viajeVuelta.bus.asientos[this.asientoAnteriorVuelta.numero - 1].avatar = 'http://localhost:3000/public/asiento/asiento_vacio.png'
        }
      },
      enviar () {
        this.asientoSelected.avatar = 'http://localhost:3000/public/asiento/asiento_vendido.png'
        this.enviado[0] = true
        busService
          .updateAsiento(this.asientoSelected)
          .then((response) => {
            console.log(response)
            this.$swal({
              icon: 'success',
              title: 'Asiento Comprado',
            }).then(() => {
              if (this.isViajeVuelta) {
                if (this.enviado[0] && this.enviado[1]) {
                  localStorage.removeItem('viajeVuelta')
                  localStorage.removeItem('viajeIda')
                  this.$router.push('/')
                }
              } else {
                if (this.enviado[0]) {
                  localStorage.removeItem('viajeVuelta')
                  localStorage.removeItem('viajeIda')
                  this.$router.push('/')
                }
              }
            })
          })
          .catch((error) => {
            console.log(error.response.data.error)
            this.$swal({
              icon: 'error',
              // eslint-disable-next-line quotes
              title: `Error`,
              text: error.response.data.error,
            })
          })
      },
      enviarVuelta () {
        this.asientoSelectedVuelta.avatar = 'http://localhost:3000/public/asiento/asiento_vendido.png'
        this.enviado[1] = true
        busService
          .updateAsiento(this.asientoSelectedVuelta)
          .then((response) => {
            console.log(response)
            this.$swal({
              icon: 'success',
              title: 'Asiento Asignado',
            }).then(() => {
              if (this.enviado[0] && this.enviado[1]) {
                localStorage.removeItem('viajeVuelta')
                localStorage.removeItem('viajeIda')
                this.$router.push('/')
              }
            })
          })
          .catch((error) => {
            console.log(error.response.data.error)
            this.$swal({
              icon: 'error',
              // eslint-disable-next-line quotes
              title: `Error`,
              text: error.response.data.error,
            })
          })
      },
    },
  }
</script>

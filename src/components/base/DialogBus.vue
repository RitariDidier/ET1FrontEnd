<template>
  <v-dialog
    v-model="dialog"
    width="600px"
  >
    <v-responsive
      class="section-busdialog"
    >
      <v-container
        class="contenedor-card"
      >
        <v-card
          class="card"
        >
          <v-container
            class="card1-contenedor"
          >
            <v-container
              class="campo title"
            >
              <base-btn
                color="orange"
                :ripple="false"
                class="font-weight-bold base-btn"
                min-width="96"
                text
              >
                Informacion del viaje
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
                Origen:
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
                Destino:
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
                Fecha de Viaje:
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
                Hora de Salida:
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
                Conductor:
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
          </v-container>
          <ul
            id="v-for-object"
            class="asientos-dialog"
          >
            <li
              v-for="(asiento) in viaje.bus.asientos"
              :key="asiento.id"
            >
              <div>
                <v-img
                  :src="asiento.avatar"
                  class="asientos--iconos"
                />
                {{ asiento.numero }}
              </div>
            </li>
          </ul>
          <v-btn
            color="green darken-1"
            text
            @click="dialog = false"
          >
            Disagree
          </v-btn>
          <v-btn
            color="green darken-1"
            text
            @click="dialog = false"
          >
            Agree
          </v-btn>
        </v-card>
      </v-container>
    </v-responsive>
  </v-dialog>
</template>

<script>
  export default {
    props: {
      title: String,
      dialog: Boolean,
      viaje: Object,
    },
    data () {
      return {
      }
    },
  }
</script>

<template>
  <v-responsive
    id="PasajeCards"
    class="pasajesPage"
  >
    <v-row
      class="v-row"
    >
      <h1>
        {{ pasajes.length==0 ? "No se encontraron pasajes" : "" }}
      </h1>
      <v-card
        v-for="(pasaje, index) in pasajes"
        :key="pasaje.id"
        class="card"
        outlined
        rounded
      >
        <v-img
          :src="require(`../../assets/${pasaje.destino}.jpg`)"
          class="white--text img-ciudad"
          gradient="to bottom, rgba(11, 28, 61, .9), rgba(0,0,0,.4)"
        >
          <div
            class="weasMiguel"
          >
            <base-btn
              color="orange"
              :ripple="false"
              class="info-btn"
              min-width="96"
            >
              comprado el: {{ pasaje.createdAt.substring(0,10) }}
            </base-btn>
            <base-btn
              v-if="valido[index]"
              color="green"
              :ripple="false"
              class="info-btn"
              min-width="96"
            >
              Vigente
            </base-btn>
            <base-btn
              v-if="!valido[index]"
              color="red"
              :ripple="false"
              class="info-btn"
              min-width="96"
            >
              No Vigente
            </base-btn>
          </div>
          <div>
            <v-container
              fluid
              class="campo"
            >
              <label
                class="campo--label"
              >
                Origen:
              </label>
              <label>
                {{ pasaje.origen }}
              </label>
            </v-container>
            <v-container
              fluid
              class="campo"
            >
              <label
                class="campo--label"
              >
                Destino:
              </label>
              <label>
                {{ pasaje.destino }}
              </label>
            </v-container>
            <v-container
              fluid
              class="campo"
            >
              <label
                class="campo--label"
              >
                Fecha:
              </label>
              <label>
                {{ pasaje.fecha }}
              </label>
            </v-container>
            <v-container
              fluid
              class="campo"
            >
              <label
                class="campo--label"
              >
                Hora:
              </label>
              <label>
                {{ pasaje.hora }}
              </label>
            </v-container>
          </div>
        </v-img>
      </v-card>
    </v-row>
  </v-responsive>
</template>

<script>
  import pasajeService from '@/services/pasajes.service'
  import { mapGetters } from 'vuex'
  export default {
    name: 'PasajesCards',
    data: () => ({
      pasajes: [],
      valido: [],
    }),
    computed: {
      ...mapGetters(['getUserID']),
    },
    mounted () {
      this.getPasajes()
    },
    methods: {
      getPasajes () {
        pasajeService
          .getPasajesByUser(this.getUserID)
          .then((response) => {
            console.log(response)
            this.pasajes = response.data
            this.compararFechas()
          })
          .catch((error) => {
            console.log(error)
          })
      },
      compararFechas () {
        this.pasajes.forEach(pasaje => {
          var año = pasaje.fecha.substring(0, 4)
          var mes = pasaje.fecha.substring(5, 7)
          var dia = pasaje.fecha.substring(8, 10)
          var fechaPasaje = new Date(año, mes - 1, dia)
          // otra
          var fechaNow = (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)
          var añoNow = fechaNow.substring(0, 4)
          var mesNow = fechaNow.substring(5, 7)
          var diaNow = fechaNow.substring(8, 10)

          var fechaAhora = new Date(añoNow, mesNow - 1, diaNow)
          console.log(fechaPasaje)
          console.log(fechaAhora)
          if (fechaPasaje > fechaAhora) {
            this.valido.push(true)
          } else {
            this.valido.push(false)
          }
        })
        console.log(this.valido)
      },
    },
    provide: {
      heading: { align: 'center' },
    },
  }
</script>

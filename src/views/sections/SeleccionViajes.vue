<template>
  <v-img
    v-if="select"
    :src="require(`../../assets/${select}.jpg`)"
    class="white--text"
    gradient="to bottom, rgba(11, 28, 61, .9), rgba(0,0,0,.4)"
  >
    <v-responsive
      class="section-viajes"
    >
      <v-container
        class="contenedor-cards"
      >
        <v-row
          class="contenedor-responsive"
        >
          <v-card
            class="card2"
          >
            <v-form
              ref="form"
              v-model="valid"
              lazy-validation
            >
              <base-btn
                :ripple="false"
                height="50"
                text
                class="button"
              >
                Escoge tu Viaje
              </base-btn>
              <v-select
                v-model="select"
                :items="Origenes"
                :rules="[v => !!v || 'Item is required']"
                label="Origen"
                required
                class="pa-0"
              />
              <v-select
                v-model="select2"
                :items="Destinos"
                :rules="[v => !!v || 'Item is required']"
                label="Destino"
                required
                class="pa-0"
              />
              <!-- Date Picker -->
              <template>
                <v-row>
                  <v-col
                    cols="12"
                    class="pa-0"
                  >
                    <v-dialog
                      ref="dialog1"
                      v-model="modal"
                      :return-value.sync="fechaIda"
                      persistent
                      width="290px"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                          v-model="fechaIda"
                          label="Fecha Ida"
                          prepend-icon="mdi-calendar"
                          readonly
                          v-bind="attrs"
                          v-on="on"
                        />
                      </template>
                      <v-date-picker
                        v-model="fechaIda"
                        scrollable
                        :min="(new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)"
                      >
                        <v-btn
                          text
                          color="primary"
                          @click="modal = false"
                        >
                          Cancel
                        </v-btn>
                        <v-btn
                          text
                          color="primary"
                          @click="$refs.dialog1.save(fechaIda)"
                        >
                          OK
                        </v-btn>
                      </v-date-picker>
                    </v-dialog>
                  </v-col>
                </v-row>
              </template>
              <!-- Date Picker -->
              <!-- Hour Picker -->
              <v-select
                v-model="horaIda"
                :items="horas"
                :rules="[v => !!v || 'Item is required']"
                label="Hora Ida"
                required
                class="pa-0"
              />
              <!-- Hour Picker -->
              <!-- checkbox -->
              <v-checkbox
                v-model="checkbox"
                label="Comprar Ida y Vuelta"
                required
                @click="check"
              />
              <!-- checkbox -->
              <!-- Date Picker -->
              <template
                v-if="checkbox"
              >
                <v-row>
                  <v-col
                    cols="12"
                    class="pa-0"
                  >
                    <v-dialog
                      ref="dialog2"
                      v-model="modal2"
                      :return-value.sync="fechaVuelta"
                      persistent
                      width="290px"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                          v-model="fechaVuelta"
                          label="Fecha Vuelta"
                          prepend-icon="mdi-calendar"
                          readonly
                          v-bind="attrs"
                          v-on="on"
                        />
                      </template>
                      <v-date-picker
                        v-model="fechaVuelta"
                        scrollable
                        :min="fechaIda"
                        :show-current="fechaIda"
                      >
                        <v-btn
                          text
                          color="primary"
                          @click="modal2 = false"
                        >
                          Cancel
                        </v-btn>
                        <v-btn
                          text
                          color="primary"
                          @click="$refs.dialog2.save(fechaVuelta)"
                        >
                          OK
                        </v-btn>
                      </v-date-picker>
                    </v-dialog>
                  </v-col>
                </v-row>
              </template>
              <!-- Date Picker -->
              <!-- Hour Picker -->
              <v-select
                v-if="checkbox"
                v-model="horaVuelta"
                :items="horas"
                :rules="[v => !!v || 'Item is required']"
                label="Hora Vuelta"
                required
                class="pa-0"
              />
              <!-- Hour Picker -->
              <v-btn
                :disabled="!valid"
                color="success"
                class="mr-4"
                @click="enviar"
              >
                Comprar
              </v-btn>
              <v-btn
                color="success"
                class="mr-4"
                @click="crearViaje"
              >
                crearViaje
              </v-btn>
            </v-form>
          </v-card>
        </v-row>
      </v-container>
    </v-responsive>
  </v-img>
</template>

<script>
  import { mapMutations } from 'vuex'
  import viajeService from '@/services/viaje.service'
  import moment from 'moment'
  export default {
    name: 'SeleccionViajes',
    data: () => ({
      valid: true,
      select: 'Iquique',
      select2: null,
      Origenes: [
        'Iquique',
        'Antofagasta',
        'Copiapo',
        'La Serena',
        'Valparaiso',
        'Santiago',
        'Rancagua',
        'Talca',
        'Concepcion',
        'Temuco',
        'Valdivia',
        'Puerto Montt',
      ],
      Destinos: [
        'Iquique',
        'Antofagasta',
        'Copiapo',
        'La Serena',
        'Valparaiso',
        'Santiago',
        'Rancagua',
        'Talca',
        'Concepcion',
        'Temuco',
        'Valdivia',
        'Puerto Montt',
      ],
      checkbox: false,
      // Fecha Ida
      fechaIda: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      modal: false,
      // Fecha Vuelta
      fechaVuelta: null,
      modal2: false,
      // Hora Ida
      horaIda: null,
      // Hora Vuelta
      horaVuelta: null,
      viaje: {
        origen: '',
        destino: '',
        fechaIda: '',
        fechaVuelta: '',
        horaIda: '',
        horaVuelta: '',
      },
      horas: ['08:30', '13:30', '16:45', '18:15', '21:15'],
    }),
    methods: {
      ...mapMutations(['setViajeIda', 'setViajeVuelta']),
      customFormatter (date) {
        return moment(date).format('D MMMM YYYY')
      },
      validate () {
        this.$refs.form.validate()
      },
      enviar () {
        this.viaje.fechaIda = this.fechaIda
        this.viaje.fechaVuelta = this.fechaVuelta
        this.viaje.horaIda = this.horaIda
        this.viaje.horaVuelta = this.horaVuelta
        this.viaje.origen = this.select
        this.viaje.destino = this.select2
        console.log(this.viaje)
        this.buscarViaje()
      },
      buscarViaje () {
        if (!this.viaje.fechaVuelta) {
          this.busIda()
        } else {
          this.busIda()
          this.busVuelta()
        }
      },
      busVuelta () {
        viajeService
          .findViajeVuelta(this.viaje)
          .then((response) => {
            console.log(response)
            this.setViajeVuelta(response.data)
            localStorage.setItem('viajeVuelta', JSON.stringify(response.data))
            this.$swal({
              icon: 'success',
              title: 'Bus Encontrado',
            }).then(() => {
              this.$router.push('/bus')
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
      busIda () {
        viajeService
          .findViaje(this.viaje)
          .then((response) => {
            console.log(response)
            this.setViajeIda(response.data)
            localStorage.setItem('viajeIda', JSON.stringify(response.data))
            this.$swal({
              icon: 'success',
              title: 'Viaje Encontrado',
            }).then(() => {
              this.$router.push('/bus')
            })
          })
          .catch((error) => {
            this.$swal({
              icon: 'error',
              // eslint-disable-next-line quotes
              title: `Error`,
              text: error.response.data.error,
            })
          })
      },
      check () {
        if (this.checkbox) {
          this.fechaVuelta = (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)
        } else {
          this.fechaVuelta = null
          this.horaVuelta = null
        }
      },
      crearViaje () {
        console.log('Viaje Creado')
        viajeService
          .viajes({
            origen: 'Antofagasta',
            destino: 'Temuco',
            fecha: '2021-07-30',
          })
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

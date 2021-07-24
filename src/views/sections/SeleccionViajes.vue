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
            class="card1"
          >
            Texto
          </v-card>
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
              <template>
                <v-row>
                  <v-col
                    cols="12"
                    class="pa-0"
                  >
                    <v-dialog
                      ref="dialog3"
                      v-model="modal3"
                      :return-value.sync="time"
                      persistent
                      width="290px"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                          v-model="time"
                          label="Hora de Ida"
                          prepend-icon="mdi-clock-time-four-outline"
                          readonly
                          v-bind="attrs"
                          v-on="on"
                        />
                      </template>
                      <v-time-picker
                        v-if="modal3"
                        v-model="time"
                        full-width
                      >
                        <v-btn
                          text
                          color="primary"
                          @click="modal3 = false"
                        >
                          Cancel
                        </v-btn>
                        <v-btn
                          text
                          color="primary"
                          @click="$refs.dialog3.save(time)"
                        >
                          OK
                        </v-btn>
                      </v-time-picker>
                    </v-dialog>
                  </v-col>
                </v-row>
              </template>
              <!-- Hour Picker -->
              <!-- :rules="[v => !!v || 'You must agree to continue!']" -->
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
              <template
                v-if="checkbox"
              >
                <v-row>
                  <v-col
                    cols="12"
                    class="pa-0"
                  >
                    <v-dialog
                      ref="dialog4"
                      v-model="modal4"
                      :return-value.sync="time2"
                      persistent
                      width="290px"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                          v-model="time2"
                          label="Hora de Vuelta"
                          prepend-icon="mdi-clock-time-four-outline"
                          readonly
                          v-bind="attrs"
                          v-on="on"
                        />
                      </template>
                      <v-time-picker
                        v-if="modal4"
                        v-model="time2"
                        full-width
                      >
                        <v-btn
                          text
                          color="primary"
                          @click="modal4 = false"
                        >
                          Cancel
                        </v-btn>
                        <v-btn
                          text
                          color="primary"
                          @click="$refs.dialog4.save(time2)"
                        >
                          OK
                        </v-btn>
                      </v-time-picker>
                    </v-dialog>
                  </v-col>
                </v-row>
              </template>
              <!-- Hour Picker -->
              <v-btn
                :disabled="!valid"
                color="success"
                class="mr-4"
                @click="enviar"
              >
                Aceptar
              </v-btn>
            </v-form>
          </v-card>
        </v-row>
      </v-container>
    </v-responsive>
  </v-img>
</template>

<script>
  export default {
    name: 'SeleccionViajes',
    data: () => ({
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
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
        'Antofagasta',
        'Coquimbo',
        'Temuco',
        'Santiago',
      ],
      checkbox: false,
      // Fecha Ida
      fechaIda: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      modal: false,
      // Fecha Vuelta
      fechaVuelta: null,
      modal2: false,
      // Hora Ida
      time: null,
      modal3: false,
      // Hora Vuelta
      time2: null,
      modal4: false,
      viaje: {
        origen: '',
        destino: '',
        fechaIda: '',
        fechaVuelta: '',
        horaIda: '',
        horaVuelta: '',
      },
    }),
    methods: {
      validate () {
        this.$refs.form.validate()
      },
      enviar () {
        this.viaje.fechaIda = this.fechaIda
        this.viaje.fechaVuelta = this.fechaVuelta
        this.viaje.horaIda = this.time
        this.viaje.horaVuelta = this.time2
        this.viaje.origen = this.select
        this.viaje.destino = this.select2
        console.log(this.viaje)
        if (this.viaje.fechaVuelta != null) {
          //    2 pasajes
          //    con ida = ida
          //    vuelta = vuelta
          //    despues
          //    ida = vuelta
          //    vuelta = ida
        } else {
          // 1 pasaje
        }
      },
      check () {
        if (this.checkbox) {
          this.fechaVuelta = (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)
        } else {
          this.fechaVuelta = null
          this.time2 = null
        }
      },
    },
  }
</script>

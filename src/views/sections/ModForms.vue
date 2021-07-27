<template>
  <v-responsive
    id="ModForms"
    class="modForm"
  >
    <v-row
      class="v-row"
    >
      <v-card
        class="cardCrear"
      >
        <v-form
          ref="form1"
          v-model="valid"
          lazy-validation
        >
          <base-btn
            :ripple="false"
            height="50"
            text
            color="green"
            class="button"
          >
            Crear Viaje
          </base-btn>
          <v-select
            v-model="origenCrear"
            :items="Origenes"
            :rules="[v => !!v || 'El Origen es requerido']"
            label="Origen"
            required
            class="pa-0"
          />
          <v-select
            v-model="destinoCrear"
            :items="Destinos"
            :rules="[v => !!v || 'El Destino es requerido']"
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
                  :return-value.sync="fechaIdaCrear"
                  persistent
                  width="290px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="fechaIdaCrear"
                      label="Fecha Ida"
                      prepend-icon="mdi-calendar"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                    />
                  </template>
                  <v-date-picker
                    v-model="fechaIdaCrear"
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
                      @click="$refs.dialog1.save(fechaIdaCrear)"
                    >
                      OK
                    </v-btn>
                  </v-date-picker>
                </v-dialog>
              </v-col>
            </v-row>
          </template>
          <!-- Date Picker -->
          <base-btn
            :ripple="false"
            color="green"
            class="button"
            @click="validateCrear"
          >
            Crear Viaje
          </base-btn>
        </v-form>
      </v-card>
      <!-- CARD 1 -->
      <!-- CARD 1 -->
      <!-- CARD 2 -->
      <v-card
        class="cardBuscar"
      >
        <v-form
          ref="form2"
          v-model="valid"
          lazy-validation
        >
          <base-btn
            :ripple="false"
            height="50"
            text
            class="button"
          >
            Buscar Bus
          </base-btn>
          <v-select
            v-model="origenBuscar"
            :items="Origenes"
            :rules="[v => !!v || 'El Origen es requerido']"
            label="Origen"
            required
            class="pa-0"
          />
          <v-select
            v-model="destinoBuscar"
            :items="Destinos"
            :rules="[v => !!v || 'El Destino es requerido']"
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
                  ref="dialog2"
                  v-model="modal2"
                  :return-value.sync="fechaIdaBuscar"
                  persistent
                  width="290px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="fechaIdaBuscar"
                      label="Fecha Ida"
                      prepend-icon="mdi-calendar"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                    />
                  </template>
                  <v-date-picker
                    v-model="fechaIdaBuscar"
                    scrollable
                    :min="(new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)"
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
                      @click="$refs.dialog2.save(fechaIdaBuscar)"
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
            v-model="horaIdaBuscar"
            :items="horas"
            :rules="[v => !!v || 'la Hora es requerida']"
            label="Hora Ida"
            required
            class="pa-0"
          />
          <!-- Hour Picker -->
          <base-btn
            :ripple="false"
            color="blue"
            class="button"
            @click="validateBuscar"
          >
            Buscar Viaje
          </base-btn>
        </v-form>
      </v-card>
      <!-- CARD 2 -->
      <!-- CARD 2 -->
      <!-- CARD 3 -->
      <v-card
        class="cardEliminar"
      >
        <v-form
          ref="form3"
          v-model="valid"
          lazy-validation
        >
          <base-btn
            :ripple="false"
            height="50"
            text
            class="button"
            color="red"
          >
            Eliminar Bus
          </base-btn>
          <v-select
            v-model="origenEliminar"
            :items="Origenes"
            :rules="[v => !!v || 'El Origen es requerido']"
            label="Origen"
            required
            class="pa-0"
          />
          <v-select
            v-model="destinoEliminar"
            :items="Destinos"
            :rules="[v => !!v || 'El Destino es requerido']"
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
                  ref="dialog3"
                  v-model="modal3"
                  :return-value.sync="fechaIdaEliminar"
                  persistent
                  width="290px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="fechaIdaEliminar"
                      label="Fecha Ida"
                      prepend-icon="mdi-calendar"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                    />
                  </template>
                  <v-date-picker
                    v-model="fechaIdaEliminar"
                    scrollable
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
                      @click="$refs.dialog3.save(fechaIdaEliminar)"
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
            v-model="horaIdaEliminar"
            :items="horas"
            :rules="[v => !!v || 'la Hora es requerida']"
            label="Hora Ida"
            required
            class="pa-0"
          />
          <!-- Hour Picker -->
          <base-btn
            :ripple="false"
            color="red"
            class="button"
            height="40"
            @click="validateEliminar"
          >
            Eliminar Viaje
          </base-btn>
        </v-form>
      </v-card>
      <!-- CARD 3 -->
      <!-- CARD 3 -->
    </v-row>
  </v-responsive>
</template>
<script>
  import modService from '@/services/mod.service'
  import viajeService from '@/services/viaje.service'
  export default {
    name: 'ModForms',
    data () {
      return {
        valid: true,
        // Crear
        origenCrear: null,
        destinoCrear: null,
        fechaIdaCrear: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
        modal: false,
        // Buscar
        origenBuscar: null,
        destinoBuscar: null,
        fechaIdaBuscar: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
        horaIdaBuscar: null,
        modal2: false,
        // Eliminar
        origenEliminar: null,
        destinoEliminar: null,
        fechaIdaEliminar: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
        horaIdaEliminar: null,
        modal3: false,
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
        horas: ['08:30', '13:30', '16:45', '18:15', '21:15'],
      }
    },
    methods: {
      crearViaje () {
        console.log('Viaje Creado')
        modService
          .viajes({
            origen: this.origenCrear,
            destino: this.destinoCrear,
            fecha: this.fechaIdaCrear,
          })
          .then((response) => {
            console.log(response)
            this.$swal({
              icon: 'success',
              title: 'Viaje Creado',
            }).then(() => {
              // Hacer algo
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
      BuscarBus () {
        viajeService
          .findViaje({
            origen: this.origenBuscar,
            destino: this.destinoBuscar,
            fechaIda: this.fechaIdaBuscar,
            horaIda: this.horaIdaBuscar,
          })
          .then((response) => {
            console.log(response)
            this.$swal({
              icon: 'success',
              title: 'Bus Encontrado',
            }).then(() => {
              // Hacer algo
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
      mostrarBuscar () {
        console.log(this.origenBuscar)
        console.log(this.destinoBuscar)
        console.log(this.fechaIdaBuscar)
        console.log(this.horaIdaBuscar)
      },
      mostrarEliminar () {
        console.log(this.origenEliminar)
        console.log(this.destinoEliminar)
        console.log(this.fechaIdaEliminar)
        console.log(this.horaIdaEliminar)
      },
      validateCrear () {
        this.$refs.form1.validate()
        if (this.$refs.form1.validate()) {
          this.crearViaje()
        }
      },
      validateBuscar () {
        this.$refs.form2.validate()
        if (this.$refs.form2.validate()) {
          console.log('enviando datos')
          this.mostrarBuscar()
          this.BuscarBus()
        }
      },
      validateEliminar () {
        this.$refs.form3.validate()
        if (this.$refs.form3.validate()) {
          console.log('enviando datos')
          this.mostrarEliminar()
        }
      },
    },
    provide: {
      heading: { align: 'center' },
    },
  }
</script>

<template>
  <div class="p-3">
    <v-data-table
      :headers="camposVisible"
      :items="usuarios"
      :items-per-page="paginas"
      :hide-default-footer="footer"
      :search="search"
      class="grey lighten-2"
      @page-count="$emit('pagination', $event)"
    >
      <template v-slot:top>
        <v-toolbar
          class="grey lighten-2"
          flat
        >
          <v-toolbar-title>
            <h1 class="headline font-weight-bold grey--text text--darken-3">
              {{ title }}
            </h1>
          </v-toolbar-title>
          <v-spacer />
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
          />
        </v-toolbar>
      </template>
      <template v-slot:[`item.actions`]="{ item }">
        <v-icon
          small
          @click="deleteItem(item)"
        >
          mdi-delete
        </v-icon>
      </template>
    </v-data-table>

    <v-dialog
      v-model="dialog"
      width="600"
      persistent
    >
      <div class="black p-1">
        <v-card class="grey lighten-2">
          <v-card-title>Informacion del usuario</v-card-title>
          <v-card-text>
            <v-row>
              <v-col
                cols="12"
                md="8"
              >
                <h4>Nombre: {{ user.name }} {{ user.surnames }}</h4>
              </v-col>
            </v-row>
            <v-row>
              <v-col
                cols="12"
                md="8"
              >
                <h4>Rut: {{ user.rut }}</h4>
              </v-col>
            </v-row>
            <div class="text-center mt-6">
              <div>
                <v-row>
                  <v-col
                    cols="12"
                    md="2"
                  >
                    <v-btn
                      dark
                      @click="reset"
                    >
                      Salir
                    </v-btn>
                  </v-col>
                </v-row>
              </div>
            </div>
          </v-card-text>
        </v-card>
      </div>
    </v-dialog>
  </div>
</template>

<script>
  import UserService from '@/services/auth.service'
  export default {
    props: {
      title: String,
      usuarios: { type: Array, default: () => [] },
      paginas: Number,
      footer: Boolean,
    },
    data () {
      return {
        search: '',
        user: '',
        dialog: '',
        nombreFilter: '',
        campos: [
          { text: 'Nombre', value: 'firstName', see: true },
          { text: 'Apellidos', value: 'lastName', see: true },
          { text: 'Email', value: 'email', see: true },
          { text: 'Fecha de registrado', value: 'created', see: true },
          { text: 'Actions', value: 'actions', sortable: false, see: true },
        ],
      }
    },
    computed: {
      camposVisible () {
        return this.campos.filter((field) => {
          if (field.see) {
            return field
          } else {
            return 0
          }
        })
      },
    },
    methods: {
      async deleteItem (item) {
        const index = this.usuarios.indexOf(item)
        const id = this.usuarios[index].id
        confirm('¿Esta seguro que desea eliminar este Item?') &&
          (await UserService.getDeleteUser(id))
        this.usuarios.splice(index, 1)
      },
      async verInformacion (item) {
        const index = this.usuarios.indexOf(item)
        const response = await UserService.getInfoUser(this.usuarios[index].rut)
        this.user = response.data
        console.log(this.user)
        this.dialog = true
      },
      reset () {
        this.dialog = false
        this.user = null
      },
    },
  }
</script>

<template>
  <v-responsive>
    <v-container>
      <v-row
        class="d-flex justify-content-center"
      >
        <v-col
          cols="3"
        >
          <v-card
            width="300"
            outlined
            height="200"
          >
            <base-btn
              weight="bold"
              text
              color="green"
              class="ml-7"
            >
              Informacion de Perfil
            </base-btn>
            <v-form>
              <v-container
                class="py-0"
                fluid
              >
                <base-subtitle
                  size="text-body-3"
                  align="left"
                  weight="bold"
                  class="pt-0"
                >
                  Nombre De Usuario
                </base-subtitle>
                <b-form-input
                  v-model="user2.username"
                  class="mb-3"
                  name="Password"
                  :rules="{ required: true, min: 6 }"
                  type="text"
                  :placeholder="user.nombre"
                />
              </v-container>
              <v-container
                class="py-0"
                fluid
              >
                <base-subtitle
                  size="text-body-3"
                  align="left"
                  weight="bold"
                  class="pt-0"
                >
                  Contraseña
                </base-subtitle>
                <b-form-input
                  v-model="user2.password"
                  class="mb-3"
                  name="Password"
                  :rules="{ required: true, min: 6 }"
                  type="password"
                  placeholder="Password"
                />
              </v-container>
              <base-btn
                :ripple="false"
                class="p-1 px-15 ml-3"
                height="auto"
                @click="update"
              >
                Guardar Datos
              </base-btn>
            </v-form>
          </v-card>
          <v-card
            v-if="isHuesped"
            width="300"
            height="200"
            outlined
            class="mt-5"
          >
            <v-col>
              <base-btn
                weight="bold"
                text
                color="green"
                class="ml-5"
              >
                Convierte en Anfitrion
              </base-btn>
              <base-icon
                class="d-flex justify-content-center"
                color="green"
              >
                mdi-home-floor-a
              </base-icon>
              <base-btn
                :ripple="false"
                class="pa-1 ml-7 mt-5"
                height="auto"
                text
              >
                Eres Huesped
              </base-btn>
              <base-btn
                :ripple="false"
                class="pa-1 mt-2"
                height="auto"
                block
                color="green"
              >
                Conviertete en Anfitrion
              </base-btn>
            </v-col>
          </v-card>
        </v-col>
        <v-card
          width="300"
          height="200"
          outlined
          class="mt-3"
        >
          <v-col>
            <base-btn
              weight="bold"
              text
              color="red"
              class="ml-14"
            >
              Desactivar Cuenta
            </base-btn>
            <base-icon
              class="d-flex justify-content-center"
            >
              mdi-delete
            </base-icon>
            <base-btn
              :ripple="false"
              class="pa-1 ml-3 mt-2"
              height="auto"
              text
            >
              Aqui puedes Desactivar tu cuenta
            </base-btn>
            <base-btn
              :ripple="false"
              class="pa-1 mt-2"
              height="auto"
              block
              color="red"
              @click="eliminar"
            >
              Borrar Cuenta
            </base-btn>
          </v-col>
        </v-card>
      </v-row>
    </v-container>
  </v-responsive>
</template>

<script>
  import { mapState, mapGetters, mapMutations } from 'vuex'
  import authService from '@/services/auth.service'
  export default {
    name: 'PerfilForm',
    provide: {
      heading: { align: 'center' },
    },
    props: {
      color: {
        type: String,
        default: 'primary',
      },
      rol: {
        type: String,
        default: localStorage.getItem('isAnfitrion'),
      },
    },
    data () {
      return {
        user: {
          nombre: '',
          rol: '',
          id: '',
        },
        user2: {
          nombre: '',
          password: '',
        },
      }
    },
    computed: {
      ...mapState({ currentUser: (state) => state.user }),
      ...mapGetters(['isHuesped']),
    },
    mounted () {
      this.setForm()
    },
    methods: {
      ...mapMutations(['setUser']),
      setForm () {
        // Seteamos nuestro formulario con los datos del usuario
        const { rol, id } = this.currentUser
        this.user.rol = rol
        this.user.id = id
      },
      update () {
        authService
          .updateProfile(this.user.id, this.user2)
          .then(({ data }) => {
            console.log(data)
            this.user.nombre = data.usuNombre
            localStorage.setItem('user', JSON.stringify(this.user))
            localStorage.setItem('user2', JSON.stringify(data))
            this.setUser(this.user2)
            this.$swal({
              title: 'Usuario actualizado con éxito',
              icon: 'success',
              showConfirmButton: false,
              position: 'bottom-end',
              timer: 3000,
              toast: true,
            })
            this.$router.go(0)
          })
          .catch((error) => {
            console.log(error)
            this.$swal({
              icon: 'error',
              // eslint-disable-next-line quotes
              title: `Error`,
              text: 'No se ha podido',
            })
          })
      },
      eliminar () {
        authService
          .delete(this.currentUser.nombre)
          .then(() => {
            this.$swal({
              icon: 'success',
              title: 'Usuario Eliminado con exito',
            }).then(() => {
              this.setUser(null)
              localStorage.clear()
              this.$router.push('/login')
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
    },
  }
</script>

<template>
  <v-responsive
    id="loginForm"
    class="loginForm"
  >
    <v-card
      outlined
      rounded
    >
      <v-container
        fluid
      >
        <v-row
          class="v-row"
        >
          <div
            class="logo"
          >
            <base-img
              :src="require(`@/assets/Perfect-Logo2.svg`)"
              fill
              max-width="150"
              width="100%"
            />
            <base-body>
              Que disfrutes tu Viaje!
            </base-body>
          </div>
          <ValidationObserver
            ref="observer"
            v-slot="{ handleSubmit }"
          >
            <b-form
              class="form"
              role="loginForm"
              @submit.prevent="handleSubmit(login)"
            >
              <base-input
                v-model="credenciales.username"
                class="form--inputNombre"
                name="nombre"
                type="text"
                placeholder="Nombre"
              />
              <base-input
                v-model="credenciales.password"
                class="mb-3"
                name="contraseña"
                type="password"
                placeholder="Contraseña"
                rules="required|min:6"
              />
              <v-container
                class="botones"
              >
                <base-btn
                  :ripple="false"
                  text
                  to="/register"
                >
                  ¿No tienes Cuenta?
                </base-btn>
                <v-btn
                  class="primary"
                  style="text-decoration: none;"
                  type="submit"
                >
                  Iniciar
                </v-btn>
              </v-container>
              <base-btn
                :ripple="false"
                text
                to="/recover"
              >
                Olvide Mí Contraseña
              </base-btn>
            </b-form>
          </ValidationObserver>
        </v-row>
      </v-container>
    </v-card>
  </v-responsive>
</template>

<script>
  import { mapMutations } from 'vuex'
  import authService from '@/services/auth.service'
  export default {
    name: 'LoginForm',
    data () {
      return {
        loginForm: true,
        credenciales: {
          username: '',
          password: '',
        },
      }
    },
    methods: {
      ...mapMutations(['setUser']),
      login () {
        authService
          .login(this.credenciales)
          .then((response) => {
            console.log(response)
            const { username, accessToken, roles, id } = response.data
            var localuser = {
              nombre: username,
              rol: roles[0],
              id: id,
            }
            this.setUser(localuser)
            localStorage.setItem('token', accessToken)
            localStorage.setItem('user', JSON.stringify(localuser))
            authService.getUserByID(localuser.id)
              .then((resp) => {
                localStorage.setItem('user2', JSON.stringify(resp.data))
              })
            this.$router.push('/')
            this.$swal({
              title: `Bienvenido ${username}`,
              icon: 'success',
              showConfirmButton: false,
              position: 'center',
              timer: 2000,
              toast: true,
            })
          })
          .catch((error) => {
            console.log(error.response.data.error)
            this.$swal({
              icon: 'error',
              // eslint-disable-next-line quotes
              title: `Error`,
              text: 'Usuario o Contraseña no encontrados',
            })
          })
      },
    },
    provide: {
      heading: { align: 'center' },
    },
  }
</script>

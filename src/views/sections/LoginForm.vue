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
              :src="require(`@/assets/BusesMidy.png`)"
              fill
              max-width="150"
              width="100%"
            />
            <base-img
              :src="require(`@/assets/icon1.png`)"
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
                v-model="credenciales.email"
                class="form--inputNombre"
                name="email"
                type="text"
                placeholder="Email"
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
          email: '',
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
            const { user, token } = response.data
            this.setUser(user)
            localStorage.setItem('token', token)
            localStorage.setItem('user', JSON.stringify(user))
            this.$router.push('/')
            this.$swal({
              title: `Bienvenido ${user.firstName}`,
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

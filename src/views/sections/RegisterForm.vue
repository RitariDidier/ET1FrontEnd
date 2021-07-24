<template>
  <v-responsive
    class="align-center mx-auto"
    max-width="750"
    height="100%"
    width="100%"
  >
    <v-card
      class="py-10"
      outlined
      rounded
      height="86vh"
    >
      <v-container
        fluid
        class="fill-height"
      >
        <v-row
          class="py-0"
          align="center"
        >
          <b-form
            class="px-15"
            role="registerForm"
            @submit.prevent="saveUser()"
          >
            <b-form-input
              v-model="user.usuNombre"
              class="mb-3"
              name="nombre"
              placeholder="Nombre"
            />
            <b-form-input
              v-model="user.usuClave"
              class="mb-3"
              name="Password"
              :rules="{ required: true, min: 6 }"
              type="password"
              placeholder="Contraseña"
            />
            <base-btn
              :ripple="false"
              class="pl-0 pt-1"
              height="auto"
              text
              to="/login"
            >
              ¿Ya tienes Cuenta?
            </base-btn>
            <base-btn
              class="primary"
              style="text-decoration: none;"
              type="submit"
            >
              Registrarse
            </base-btn>
          </b-form>
          <div
            class="mx-auto py-15 my-10"
            max-width="250"
            height="100%"
            width="100%"
          >
            <base-img
              :src="require(`@/assets/Perfect-Logo2.svg`)"
              contain
              max-width="200"
              width="100%"
            />
            <base-body>
              Registrate con nosotros!
            </base-body>
          </div>
        </v-row>
      </v-container>
    </v-card>
  </v-responsive>
</template>

<script>
  import authService from '@/services/auth.service'
  export default {
    name: 'RegisterForm',
    data () {
      return {
        user: {
          usuNombre: '',
          usuClave: '',
        },
      }
    },
    methods: {
      saveUser () {
        authService
          .register(this.user)
          .then(() => {
            this.$swal({
              icon: 'success',
              title: 'Usuario creado con exito',
            }).then(() => {
              this.$router.push('/login')
            })
          })
          .catch((error) => {
            console.log(error.response.data.error)
            this.$swal({
              icon: 'error',
              // eslint-disable-next-line quotes
              title: `Error`,
              text: 'Usuario ya registrado',
            })
          })
      },
    },
  }
</script>

<template>
  <v-responsive
    class="registerForm"
  >
    <v-card
      class="card1"
    >
      <v-container
        fluid
        class="register-container"
      >
        <v-row
          class="v-row"
        >
          <b-form
            class="form"
            role="registerForm"
            @submit.prevent="saveUser()"
          >
            <b-form-input
              v-model="user.firstName"
              class="mb-3"
              name="firstName"
              placeholder="Nombre"
            />
            <b-form-input
              v-model="user.lastName"
              class="mb-3"
              name="lastName"
              placeholder="Apellido"
            />
            <b-form-input
              v-model="user.email"
              class="mb-3"
              name="email"
              placeholder="Email"
            />
            <b-form-input
              v-model="user.password"
              class="mb-3"
              name="password"
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
          firstName: '',
          lastName: '',
          email: '',
          password: '',
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
              text: error.response.data.error,
            })
          })
      },
    },
  }
</script>

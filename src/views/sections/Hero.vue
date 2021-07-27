<template>
  <section id="hero">
    <v-img
      :min-height="minHeight"
      :src="require('@/assets/light.jpg')"
      class="white--text"
      gradient="to bottom, rgba(11, 28, 61, .9), rgba(0,0,0,.4)"
    >
      <v-container class="fill-height px-4">
        <v-responsive
          class="d-flex align-center mx-auto"
          height="100%"
          max-width="700"
          width="100%"
        >
          <base-subheading
            weight="regular"
            title="Viaja y vive"
          />

          <base-heading
            size="text-h2"
            title="Bienvenido a Buses Midy"
            weight="medium"
          />

          <base-body>
            Bienvenido a la pagina de Buses que necesitabas, encuentra tus buses para viajar a cualquier lugar del pais.
          </base-body>

          <div
            :class="$vuetify.breakpoint.smAndDown ? 'flex-column align-start' : 'align-center'"
            class="d-flex flex-wrap"
          >
            <base-btn
              :ripple="false"
              class="pa-1"
              height="auto"
              :to="isAuthenticated ? '/viajes' : '/login'"
            >
              {{ isAuthenticated ? 'Comprar pasaje' : 'Ingresar' }}
            </base-btn>

            <span class="font-weight-bold ml-6 mr-4 my-4">o</span>

            <base-btn
              :ripple="false"
              class="pa-1"
              height="auto"
              :to="isAuthenticated ? '/pasajes' : '/register'"
            >
              {{ isAuthenticated ? 'Pasajes' : 'Registrarse' }}
            </base-btn>
          </div>
        </v-responsive>
      </v-container>
    </v-img>
  </section>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    name: 'SectionHero',

    provide: {
      theme: { isDark: true },
    },

    computed: {
      minHeight () {
        const height = this.$vuetify.breakpoint.mdAndUp ? '100vh' : '50vh'

        return `calc(${height} - ${this.$vuetify.application.top}px)`
      },
      ...mapGetters(['isAuthenticated']),
    },
  }
</script>

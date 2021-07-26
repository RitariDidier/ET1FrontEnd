<template>
  <div>
    <v-app-bar
      v-if="isAuthenticated"
      id="home-app-bar"
      app
      elevation="1"
      elevate-on-scroll
      height="80"
    >
      <base-img
        :src="require(`@/assets/icon1.png`)"
        contain
        max-width="100"
        width="100%"
      />

      <v-spacer />

      <div
        v-if="isMod"
      >
        <v-tabs
          class="hidden-sm-and-down"
          optional
          background-color="transparent"
        >
          <v-tab
            v-if="isMod"
            to="/"
            :active="isActive('/')"
            :ripple="false"
            class="font-weight-bold"
            min-width="96"
            text
          >
            Home
          </v-tab>
          <v-tab
            v-if="isMod"
            to="/perfil"
            :active="isActive('/perfil')"
            :ripple="false"
            class="font-weight-bold"
            min-width="96"
            text
          >
            Perfil
          </v-tab>
          <base-btn
            v-if="isMod"
            id="rol"
            color="purple"
            :ripple="false"
            class="font-weight-bold mt-2"
            min-width="96"
            text
          >
            MOD
          </base-btn>
          <v-tab
            :ripple="false"
            class="font-weight-bold"
            min-width="96"
            @click="logout()"
          >
            Cerrar Sesión
          </v-tab>
        </v-tabs>
      </div>
      <div
        v-if="isUser"
      >
        <v-tabs
          class="hidden-sm-and-down"
          optional
          background-color="transparent"
        >
          <v-tab
            v-if="isUser"
            to="/"
            :active="isActive('/')"
            :ripple="false"
            class="font-weight-bold"
            min-width="96"
            text
          >
            Home
          </v-tab>
          <v-tab
            v-if="isUser"
            to="/viajes"
            :active="isActive('/viajes')"
            :ripple="false"
            class="font-weight-bold"
            min-width="96"
            text
          >
            Viajes
          </v-tab>
          <v-tab
            v-if="isUser"
            to="/pasajes"
            :active="isActive('/pasajes')"
            :ripple="false"
            class="font-weight-bold"
            min-width="96"
            text
          >
            Tus Pasajes
          </v-tab>
          <base-btn
            v-if="isUser"
            id="rol"
            color="orange"
            :ripple="false"
            class="font-weight-bold mt-2"
            min-width="96"
            text
          >
            {{ nombre }}
          </base-btn>
          <v-tab
            :ripple="false"
            class="font-weight-bold"
            min-width="96"
            @click="logout()"
          >
            Cerrar Sesión
          </v-tab>
        </v-tabs>
      </div>
      <div
        v-if="isAdmin"
      >
        <v-tabs
          class="hidden-sm-and-down"
          optional
          background-color="transparent"
        >
          <v-tab
            v-if="isAdmin"
            to="/pro"
            :active="isActive('/pro')"
            :ripple="false"
            class="font-weight-bold"
            min-width="96"
          >
            Admin
          </v-tab>
          <base-btn
            v-if="isAdmin"
            id="rol"
            color="green"
            :ripple="false"
            class="font-weight-bold mt-2"
            min-width="96"
            text
          >
            ADMIN
          </base-btn>
          <v-tab
            :ripple="false"
            class="font-weight-bold"
            min-width="96"
            @click="logout()"
          >
            Cerrar Sesión
          </v-tab>
        </v-tabs>
      </div>
      <v-app-bar-nav-icon
        class="hidden-md-and-up"
        @click="drawer = !drawer"
      />
    </v-app-bar>
    <v-app-bar
      v-if="!isAuthenticated"
    >
      <v-tabs>
        <v-tab
          :active="isActive('/')"
          :ripple="false"
          class="font-weight-bold"
          min-width="96"
          to="/"
        >
          Home
        </v-tab>
        <v-tab
          :active="isActive('/login')"
          :ripple="false"
          class="font-weight-bold"
          min-width="96"
          to="/login"
        >
          login
        </v-tab>
      </v-tabs>
    </v-app-bar>
  </div>
</template>

<script>
  import { mapState, mapGetters, mapMutations } from 'vuex'
  export default {
    name: 'HomeAppBar',
    data: () => ({
      drawer: null,
      items: [
        'Home',
        'Perfil',
      ],
    }),
    computed: {
      ...mapState(['user']),
      ...mapGetters(['isAuthenticated', 'isMod', 'isUser', 'isAdmin', 'nombre']),
    },
    methods: {
      // eslint-disable-next-line no-undef
      ...mapMutations(['setUser']),
      isActive (route) {
        return this.$route.path === route
      },
      logout () {
        this.setUser(null)
        localStorage.clear()
        location.reload()
      },
    },
  }
</script>

<style lang="sass">
  #home-app-bar
    .v-tabs-slider
      max-width: 24px
      margin: 0 auto

    .v-tab
      &::before
        display: none

    #rol
      font-size: 1rem

</style>

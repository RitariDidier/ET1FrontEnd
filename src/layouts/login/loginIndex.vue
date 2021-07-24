<template>
  <v-app>
    <home-view />

    <home-footer />
  </v-app>
</template>

<script>
  export default {
    name: 'LoginLayout',

    components: {
      HomeFooter: () => import('@/layouts/home/Footer'),
      HomeView: () => import('@/layouts/home/View'),
    },
  }
</script>

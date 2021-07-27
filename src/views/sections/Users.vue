<template>
  <v-responsive>
    <div>
      <usuarios-tabla
        title="Usuarios Activos"
        :footer="false"
        :paginas="8"
        :usuarios="usuarios"
      />
    </div>
  </v-responsive>
</template>

<script>
  import UserService from '@/services/auth.service'
  import { mapGetters } from 'vuex'
  export default {
    name: 'Users',
    data: () => ({
      usuarios: [],
    }),
    computed: {
      ...mapGetters(['getUserID']),
    },
    mounted () {
      this.listarUsuarios()
    },
    methods: {
      listarUsuarios: async function () {
        const hola = await UserService.getUsers()
        this.usuarios = await hola.data
        console.log(this.usuarios)
      },

    },
    // eslint-disable-next-line vue/order-in-components
    components: {
      UsuariosTabla: () => import('@/components/base/TablaUsers'),
    },
    provide: {
      heading: { align: 'center' },
    },
  }
</script>

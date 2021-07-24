
<script>
  // Extensions
  import View from '@/views/View'

  // Mixins
  import LoadSections from '@/mixins/load-sections'

  export default {
    name: 'Perfil',

    metaInfo: { title: 'Perfil' },

    extends: View,

    mixins: [
      LoadSections([
        'PerfilForm',
      ]),
    ],

    props: {
      id: {
        type: String,
        default: 'perfil',
      },
    },
  }
</script>


<script>
  // Extensions
  import View from '@/views/View'

  // Mixins
  import LoadSections from '@/mixins/load-sections'

  export default {
    name: 'Viajes',

    metaInfo: { title: 'Viajes' },

    extends: View,

    mixins: [
      LoadSections([
        'seleccion-viajes',
      ]),
    ],

    props: {
      id: {
        type: String,
        default: 'viajes',
      },
    },
  }
</script>


<script>
  // Extensions
  import View from '@/views/View'

  // Mixins
  import LoadSections from '@/mixins/load-sections'

  export default {
    name: 'Bus',

    metaInfo: { title: 'Bus' },

    extends: View,

    mixins: [
      LoadSections([
        'BusAsiento',
      ]),
    ],

    props: {
      id: {
        type: String,
        default: 'bus',
      },
    },
  }
</script>

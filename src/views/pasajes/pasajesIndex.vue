
<script>
  // Extensions
  import View from '@/views/View'

  // Mixins
  import LoadSections from '@/mixins/load-sections'

  export default {
    name: 'Pasajes',

    metaInfo: { title: 'Pasajes' },

    extends: View,

    mixins: [
      LoadSections([
        'pasajes-cards',
      ]),
    ],

    props: {
      id: {
        type: String,
        default: 'pasajes',
      },
    },
  }
</script>

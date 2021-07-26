
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
        'section-pasajes',
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

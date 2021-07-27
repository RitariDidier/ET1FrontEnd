
<script>
  // Extensions
  import View from '@/views/View'

  // Mixins
  import LoadSections from '@/mixins/load-sections'

  export default {
    name: 'Mod',

    metaInfo: { title: 'Mod' },

    extends: View,

    mixins: [
      LoadSections([
        'mod-forms',
      ]),
    ],

    props: {
      id: {
        type: String,
        default: 'mod',
      },
    },
  }
</script>

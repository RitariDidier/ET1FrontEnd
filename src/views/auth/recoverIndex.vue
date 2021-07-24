
<script>
  // Extensions
  import View from '@/views/View'

  // Mixins
  import LoadSections from '@/mixins/load-sections'

  export default {
    name: 'Recover',

    metaInfo: { title: 'Recover' },

    extends: View,

    mixins: [
      LoadSections([
        'RecoverForm',
      ]),
    ],

    props: {
      id: {
        type: String,
        default: 'register',
      },
    },
  }
</script>

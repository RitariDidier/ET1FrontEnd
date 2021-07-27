
<script>
  // Extensions
  import View from '@/views/View'

  // Mixins
  import LoadSections from '@/mixins/load-sections'

  export default {
    name: 'Users',

    metaInfo: { title: 'Users' },

    extends: View,

    mixins: [
      LoadSections([
        'users',
      ]),
    ],

    props: {
      id: {
        type: String,
        default: 'Users',
      },
    },
  }
</script>

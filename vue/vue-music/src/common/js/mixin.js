export const searchMixin = {
  data() {
    return {
        query:''
    };
  },
  computed: {},
  methods: {
    onQueryChange(options) {
    //   console.log(options);
      this.query = options.trim()
    },
  },
};

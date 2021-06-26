const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastName: '',
      //fullName: ''
    };
  },
  computed: {
    fullName() {
      if(this.name ==='' || this.lastName === '') {
        return '';
      }
      return this.name + ' ' + this.lastName;
    }
  },
  watch: {
    // name(value, oldValue) {
    //   this.fullName = value + ' ' + this.lastName;
    // }
  },
  methods: {
    outputFullName() {
      if(this.name ==='') {
        return '';
      }
      return this.name + ' ' + this.lastName;
    },
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetName() {
      this.name = '';
    }
  }
});

app.mount('#events');

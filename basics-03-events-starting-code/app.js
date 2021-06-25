const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: '',
      confirmedName: ''
    };
  },
  methods: {
    addCounter() {
      this.counter++;
    },

    reduceCounter() {
      this.counter--;
    },
    subtract(num) {
      this.counter = this.counter -5;
    },
    setName(event,lastName) {
      this.name = event.target.value + " " + lastName;
    },
    submitForm(event) {
      //event.preventDefault();
      alert('Submitted!!!!')
    },
    confirmName() {
      this.confirmedName = this.name;
    }
  }
});

app.mount('#events');

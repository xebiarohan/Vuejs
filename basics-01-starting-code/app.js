const app = Vue.createApp({
    data() {
        return {
            courseGoal1: 'Learn Vue!',
            courseGoal2: 'Learn Angular!',
            htmlString: '<h3>complete the course!</h3>',
            vueLink: 'https://vuejs.org/'
        };
    },
    methods: {
        outputGoal() {
            const randomNumber = Math.random();
            if(randomNumber < 0.5) {
                return this.courseGoal1;
            } else {
                return this.courseGoal2;
            }
        }
    }

});

app.mount('#user-goal');
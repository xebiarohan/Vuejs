const app = Vue.createApp({
    data() {
        return {
            friends: [
                { id: 'Rohan', name: 'Rohan Aggarwal', phoneNumber: '123456789', emailId: 'rohan@localhost.com' },
                { id: 'Akash', name: 'Akash Arora', phoneNumber: '987654321', emailId: 'akash@localhost.com' }
            ]
        }
    }
});

app.component('friend-contact', {
    template: `
        <li>
          <h2>{{friend.name}}</h2>
          <button @click="toggleDetailVisibility">{{detailAreVisible ? 'Hide' : 'Show'}} Details</button>
          <ul v-if="detailAreVisible">
            <li><strong>Phone:</strong>{{friend.phoneNumber}}</li>
            <li><strong>Email:</strong>{{friend.emailId}}</li>
          </ul>
        </li>
    
    `,
    data() {
        return {
            friend: {
                id: 'Rohan', name: 'Rohan Aggarwal', phoneNumber: '123456789', emailId: 'rohan@localhost.com' 
            },
            detailAreVisible: false,
        };
    },
    methods: {
        toggleDetailVisibility() {
            this.detailAreVisible = !this.detailAreVisible;
        }
    }
})

app.mount('#app');
<template>
  <li>
    <h2>{{ friend.name }}</h2>
    <button @click="toggleDetails">{{detailsAreVisible ? 'Hide' : 'Show'}} Details</button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone:</strong> {{ friend.phoneNumber }}</li>
      <li><strong>Email:</strong>{{ friend.emailId }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  data() {
    return {
      detailsAreVisible: false,
      friend: {
        id: "Rohan",
        name: "Rohan Aggarwal",
        phoneNumber: 123456789,
        emailId: "rohan@localhost.com",
      },
    };
  },
  methods: {
      toggleDetails() {
          this.detailsAreVisible = !this.detailsAreVisible;
      }
  }
};
</script>

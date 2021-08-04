<template>
  <base-card>
    <base-button
      @click="setSelectedTab('stored-resources')"
      :mode="storedResButtonMode"
      >Stored Resources</base-button
    >
    <base-button
      @click="setSelectedTab('add-resource')"
      :mode="addResButtonMode"
      >Add Resources</base-button
    >
  </base-card>
  <keep-alive>
    <component :is="selectedtab"></component>
  </keep-alive>
</template>

<script>
import StoredResources from './StoredResources.vue';
import AddResource from './AddResource.vue';
export default {
  components: { StoredResources, AddResource },
  data() {
    return {
      selectedtab: 'stored-resources',
      storedResouces: [
        {
          id: 'official-guide',
          title: 'Official Guide',
          description: 'The official Vue Js documentation',
          link: 'https://vuejs.org'
        },
        {
          id: 'google',
          title: 'Google',
          description: 'Learn to google...',
          link: 'https://google.com'
        }
      ]
    };
  },
  provide() {
    return {
      resources: this.storedResouces,
      addResource: this.addResource,
      deleteResource: this.deleteResource
    };
  },
  computed: {
    storedResButtonMode() {
      return this.selectedtab === 'stored-resources' ? null : 'flat';
    },
    addResButtonMode() {
      return this.selectedtab === 'add-resource' ? null : 'flat';
    }
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedtab = tab;
    },
    addResource(title, description, url) {
      const newResource = {
        id: new Date().toISOString(),
        title: title,
        description: description,
        link: url
      };
      this.storedResouces.unshift(newResource);
      this.selectedtab = 'stored-resources';
    },
    deleteResource(resId) {
      const resIndex = this.storedResouces.findIndex(res => res.id === resId);
      this.storedResouces.splice(resIndex, 1);
    }
  }
};
</script>

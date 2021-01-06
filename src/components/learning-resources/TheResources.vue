<template>
  <base-card>
    <base-button @click="setSelectedTab('StoredResources')">
      Stored Resources
    </base-button>
    <base-button @click="setSelectedTab('AddResource')">
      Add Resource3
    </base-button>
  </base-card>
  <component :is="setSelectedTab"></component>
</template>

<script>
import StoredResources from './StoredResources';
import AddResource from './AddResource';

export default {
  components: { StoredResources, AddResource },

  data() {
    return {
      selectedTab: 'StoredResources',
      storedResources: [
        {
          id: 'official-guide',
          title: 'Official Guide',
          description: 'The official Vue.Js documentation',
          link: 'https://v3.vuejs.org/guide/introduction.html',
        },
        {
          id: 'vue-mastery',
          title: 'Vue Mastery',
          description:
            'As the ultimate resource for Vue.js developers, Vue Mastery produces weekly lessons so you can learn what you need to succeed as a Vue.js Developer.',
          link: 'https://www.vuemastery.com/',
        },
      ],
    };
  },
  provide() {
    return {
      resources: this.storedResources,
    };
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
  },
};
</script>
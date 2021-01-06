<template>
  <StoredResource :resources="storedResources" />
</template>

<script>
import StoredResource from './components/learning-resources/StoredResources';
export default {
  components: {
    StoredResource,
  },
  data() {
    return {
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
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>
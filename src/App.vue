<template>
  <TheHeader title="VueJS 3: Advanced Components Practice" />
  <TheReseources />
</template>

<script>
import TheHeader from './components/layout/TheHeader';
import TheReseources from './components/learning-resources/TheResources';
export default {
  components: {
    TheHeader,
    TheReseources,
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
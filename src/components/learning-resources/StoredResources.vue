<template>
  <LearningResource
    v-for="item in resources"
    :key="item.id"
    :title="item.title"
    :description="item.description"
    :link="item.link"
  />
</template>

<script>
import LearningResource from './LearningResource';
export default {
  components: { LearningResource },
  props: ['resources'],
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>
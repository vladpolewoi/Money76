<template>
<Page :actionBarHidden="true">
  <Home />
</Page>
</template>

<script>
import Home from '../views/Home';

export default {
  name: 'MainLayout',
  components: { Home },
};
</script>

<style lang="scss" scoped>
ActionBar {
  display: none;
  color: red;
}
</style>

<template>
<GridLayout>
  <Label class="message" :text="msg" col="0" row="0"/>
  <Card />
</GridLayout>
</template>

<script>
import Card from '@/components/Card';

export default {
  name: 'Home',
  components: {
    Card,
  },
  props: {

  },
  data() {
    return {
      msg: 'Hello from Home',
    };
  },
};
</script>

<style lang="scss" scoped>

</style>

<template>
<FlexboxLayout>
  <Label :text="count"/>
  <Button text="inc" @tap="inc"/>
</FlexboxLayout>
</template>

<script>
export default {
  name: 'Card',
  props: {

  },
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    inc() {
      this.count += 1;
    },
  },
};
</script>

<style lang="scss" scoped>

</style>

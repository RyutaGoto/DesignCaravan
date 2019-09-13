<template>
  <component :is="svg"/>
</template>

<script>
export default {
  name: "SvgElement",
  props: {
    name: {
      type: Number,
    },
  },
  computed: {
    svg() {
      return () => import(`~/assets/top/top_${this.name}.svg`)
    }
  }
}
</script>
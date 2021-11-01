<script lang="ts">
  export let gap: number = 0;
  export let colums: number = 12;
</script>

<div
  class="grid gap-{gap}"
  style="grid-template-columns: repeat({colums}, minmax(0, 1fr));"
>
  <slot />
</div>

<style lang="scss">
  .grid {
    display: grid;
    @for $i from 1 through 50 {
      &.gap-#{$i} {
        gap: #{$i}px;
      }
    }
  }
</style>

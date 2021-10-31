<script lang="ts">
  export let color:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'danger'
    | 'black'
    | 'white' = 'primary';
</script>

<div class="alert alert-{color}">
  <slot />
</div>

<style lang="scss">
  @import '../../scss/main.scss';

  .alert {
    border-radius: $border-radius;
    padding: 15px;
    @each $i, $color in $colors {
      &.alert-#{$i} {
        background: getColor($color, 0.3);
        color: $color;
      }
    }
  }
</style>

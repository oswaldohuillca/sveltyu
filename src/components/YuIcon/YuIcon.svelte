<script lang="ts">
  export let iconFamily: string = 'material-icons';
  export let icon: string = null;
  export let color:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'danger'
    | 'black'
    | 'white' = null;
</script>

<span class="icon icon-{color} {iconFamily}"> {icon} </span>

<style lang="scss">
  @import '../../scss/main.scss';

  .icon {
    padding: $padding;
    @each $i, $color in $colors {
      &.icon-#{'' + $i} {
        background: $color;
      }
    }
  }
</style>

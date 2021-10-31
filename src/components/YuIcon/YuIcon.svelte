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
  export let className: string = null;
</script>

<span class="icon icon-{color} {iconFamily} {className}"> {icon} </span>

<style lang="scss">
  @import '../../scss/main.scss';

  .icon {
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
      transform: translateY(-3px);
      box-shadow: getShadow($black);
    }
    @each $i, $color in $colors {
      &.icon-#{'' + $i} {
        background: $color;
      }
    }
  }
</style>

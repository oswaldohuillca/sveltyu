<script lang="ts">
  import { fly } from 'svelte/transition';
  export let color:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'danger'
    | 'black'
    | 'white' = 'primary';
  export let open: boolean = true;

  function setOpen() {
    open = false;
  }
</script>

{#if open}
  <div class="alert alert-{color}" transition:fly={{ y: 100, duration: 1000 }}>
    <span class="material-icons alert-close" on:click={setOpen}> clear </span>
    <slot />
  </div>
{/if}

<style lang="scss">
  @import '../../scss/main.scss';

  .alert {
    border-radius: $border-radius;
    padding: 15px;
    position: relative;
    padding-right: 40px;
    @each $i, $color in $colors {
      &.alert-#{'' + $i} {
        background: getColor($color, 0.3);
        color: $color;
      }
    }
    .alert-close {
      position: absolute;
      top: 9px;
      right: 9px;
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
    }
  }
</style>

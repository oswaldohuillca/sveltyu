<script lang="ts">
  export let checked = false;
  export let color = 'primary';
  export let label = 'foo';
  export let iconBefore = 'favorite';
</script>

<label class="switch switch-{checked && color}">
  <input type="checkbox" bind:checked />
  <span class="slider {checked && 'active'}">
    {label}
  </span>
  <div class="rounded {checked && 'active'}" />
  {#if !checked && !iconBefore}
    <span class="before">algo</span>
  {/if}
  {#if iconBefore}
    <span class="before material-icons {checked && 'active'}">{iconBefore}</span
    >
  {/if}
</label>

<style lang="scss">
  @import '../../scss/main';

  .switch {
    position: relative;
    display: inline-flex;
    min-width: 48px;
    height: 28px;
    border-radius: $border-radius;
    padding: $padding / 2;
    background: #ccc;
    @each $i, $color in $colors {
      &.switch-#{'' + $i} {
        background: $color;
        color: $white;
      }
    }
    input {
      opacity: 0;
      width: 0;
      height: 0;
    }
    .slider {
      cursor: pointer;
      transition: 0.4s;
      border-radius: 34px;
      display: flex;
      text-align: center;
      align-items: center;
      padding-left: 8px;
      padding-right: 8px;
      position: relative;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      font-size: 10px;
      width: 0px;
      &.active {
        width: 100%;
      }
    }
    .rounded {
      position: absolute;
      height: 20px;
      width: 20px;
      left: 4px;
      bottom: 4px;
      margin-right: auto;
      background-color: white;
      transition: all 0.4s ease;
      border-radius: 50%;
      pointer-events: none;
      &.active {
        transform: translateX(calc(60px - 26px));
      }
    }
    .before {
      font-size: 10px;
      cursor: pointer;
      margin-left: 4px;
      &.active {
        opacity: 0;
      }
    }
  }
</style>

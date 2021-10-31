<script lang="ts">
  import { getColor } from '../../helpers/colors';

  import YuIcon from '../YuIcon/YuIcon.svelte';

  export let color:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'danger'
    | 'black'
    | 'white' = 'white';
  export let placeholder: string = null;
  export let iconStart: string = null;
  export let iconEnd: string = null;
  let value = '';
</script>

<div class="input-container input-container-{color}">
  <input
    type="text"
    class="input input-{color}"
    style="padding-left: {iconStart && '40px'}; padding-right: {iconEnd &&
      '40px'}; color: rgb({getColor(color).value})"
    bind:value
  />

  <!--START PLACEHOLDER-->
  {#if placeholder && value.length === 0}
    <div class="input-placeholder-container">
      <span class="input-placeholder">{placeholder}</span>
    </div>
  {/if}
  <!--END PLACEHOLDER-->
  {value}
  <!--START ICON LEFT-->
  {#if iconStart}
    <span class="material-icons input-icon input-icon-{color} input-icon-left">
      {iconStart}
    </span>
  {/if}
  <!--END ICON LEFT-->

  <!--START ICON RIGHT-->
  {#if iconEnd}
    <span class="material-icons input-icon input-icon-{color} input-icon-right">
      {iconEnd}
    </span>
  {/if}
  <!--END ICON RIGHT-->
</div>

<style lang="scss">
  @import '../../scss/main.scss';

  .input-container {
    position: relative;
    width: 100%;
    @each $i, $color in $colors {
      &-#{$i} {
        @if $i == white {
          color: $black;
        } @else {
          color: $color;
        }
      }
    }
    .input {
      width: 100%;
      border: none;
      border-radius: $border-radius;
      padding: 7px 13px 7px 10px;
      @each $i, $color in $colors {
        &-#{$i} {
          background: rgba($color, 0.15);
        }
      }
      &:focus {
        outline: none;
        & ~ .input-placeholder-container {
          transform: translateX(3px);
          opacity: 0;
        }
      }
      &:focus ~ .input-icon-right {
        transform: translate(6px, -6px);
        box-shadow: getShadow($black);
        background: $white;
      }
      &:focus ~ .input-icon-left {
        transform: translate(-6px, -6px);
        box-shadow: getShadow($black);
        background: $white;
      }
    }
    & .input-icon {
      position: absolute;
      width: 36px;
      height: 36px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border: none;
      border-radius: $border-radius;
      cursor: pointer;
      transition: all 0.3s ease;
      @each $i, $color in $colors {
        &-#{$i} {
          background: rgba($color, 0.15);
        }
      }
      &.input-icon-left {
        top: 0;
        left: 0;
      }
      &.input-icon-right {
        top: 0;
        right: 0;
      }
    }
    & .input-placeholder-container {
      position: absolute;
      left: 45px;
      top: 0;
      height: 100%;
      display: flex;
      align-items: center;
      pointer-events: none;
      transition: all 0.3s ease;
    }
  }
</style>

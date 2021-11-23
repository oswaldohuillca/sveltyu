<script lang="ts">
  export let checked: boolean = false;
</script>

<div class="checkbox-container">
  <div class="checkbox-contain {checked && 'active'}">
    <input type="checkbox" bind:checked />
    {#if checked}
      <span class="background {checked && 'active'}" />
    {/if}
  </div>
</div>

<style lang="scss">
  @keyframes scaleToSquare {
    0% {
      transform: scale(0px);
    }
    50% {
      transform: scale(10px);
    }
    100% {
      transform: scale(23px);
    }
  }

  .checkbox-container {
    position: relative;
    .checkbox-contain {
      border-radius: 6px;
      overflow: hidden;
      width: 23px;
      height: 23px;
      background: #ccc;
      position: relative;
      z-index: 1;
      input {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        margin: 0;
        padding: 0;
        opacity: 0;
        z-index: 100;
        cursor: pointer;
      }
      &.active {
      }
      .background {
        width: 0px;
        height: 0px;
        position: absolute;
        background: red;
        transition: all 2s ease;
        &.active {
          transition: all 2s ease;
          width: 23px;
          height: 23px;
        }
      }
    }
  }
</style>

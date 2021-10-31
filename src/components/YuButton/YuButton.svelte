<script lang="ts">
  export let color:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'danger'
    | 'black'
    | 'white' = 'primary';
  export let icon: string = null;
  export let isIcon: boolean = false;
  export let iconStart: boolean = false;
  export let iconEnd: boolean = false;

  export let click: svelte.JSX.MouseEventHandler<HTMLButtonElement>;

  let ripples = [];
  let btn = null;

  const handleClick = (e) => {
    let pos = btn.getBoundingClientRect();
    ripples = [
      ...ripples,
      {
        x: e.clientX - pos.left,
        y: e.clientY - pos.top,
        show: true,
      },
    ];
  };
</script>

<button
  bind:this={btn}
  class="btn btn-{color} is-{isIcon && 'icon'}"
  on:click={handleClick}
  on:click={click}
>
  {#each ripples as val, i}
    {#if val.show == true}
      <span class="waves" style="top:{val.y}px; left:{val.x}px" />
    {/if}
  {/each}
  {#if iconStart}
    <span class="material-icons btn-icon" style="margin-right: 4px;">
      {icon}
    </span>
  {/if}
  <slot />
  {#if iconEnd}
    <span class="material-icons btn-icon" style="margin-left: 4px;">
      {icon}
    </span>
  {/if}
</button>

<style lang="scss">
  @import '../../scss/main.scss';

  @keyframes ripple {
    0% {
      transform: translate(-100%, -100%);
    }
    80% {
      transform: translate(-100%, -100%) scale(50);
    }
    100% {
      transform: translate(-100%, -100%) scale(50);
      opacity: 0;
    }
  }
  @keyframes fade {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  .btn {
    outline: none;
    border: none;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    font-size: $font-size;
    @each $i, $color in $colors {
      &.btn-#{'' + $i} {
        padding: 8px 12px;
        background: $color;
        @if $i == white {
          color: $black;
        } @else {
          color: $white;
        }
        border-radius: $border-radius;
        transition: all 0.3s ease;
        &:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 20px -10px rgba($color, 1);
        }
        &.is-icon {
          padding: $padding;
        }
        .btn-icon {
          font-size: 15px !important;
        }
      }
    }
    &:active {
      outline: none;
    }
    .waves {
      background-color: rgba($color: #fff, $alpha: 0.5);
      width: 4px;
      height: 4px;
      position: absolute;
      border-radius: 50%;
      transform: translateX(-100%) translateY(-100%);
      mix-blend-mode: normal;
      animation: ripple 1250ms ease-out forwards, fade 1500ms ease-out forwards;
    }
  }
</style>

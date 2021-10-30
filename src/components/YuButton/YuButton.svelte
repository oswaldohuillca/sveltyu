<script lang="ts">
  export let color:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'danger'
    | 'black'
    | 'white' = 'primary';

  let ripples = [];

  const handleClick = (e) => {
    console.log(e.clientX, e.clientY);
    let pos = btn.getBoundingClientRect();
    ripples = [
      ...ripples,
      {
        x: e.clientX - pos.left,
        y: e.clientY - pos.top,
        show: true,
      },
    ];

    console.log(ripples);
  };

  let btn = null;

  const animateRipple = (e) => {
    let el = this.$refs.tiBtn;
    let pos = el.getBoundingClientRect();

    this.ripples.push({
      x: e.clientX - pos.left,
      y: e.clientY - pos.top,
      show: true,
    });
  };
</script>

<button bind:this={btn} class="btn btn-{color}" on:click={handleClick}>
  {#each ripples as val, i}
    {#if val.show == true}
      <span class="waves" style="top:{val.y}px; left:{val.x}px" />
    {/if}
  {/each}
  <slot />
</button>

<style lang="scss">
  @import '../../scss/variables.scss';

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
    @each $i, $color in $colors {
      &.btn-#{$i} {
        padding: 0.8rem 1.5em;
        background: $color;
        color: $white;
        border-radius: $radius;
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
      mix-blend-mode: screen;
      animation: ripple 1250ms ease-out forwards, fade 1500ms ease-out forwards;
    }
  }
</style>

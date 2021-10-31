<script lang="ts">
  import { getColor } from '../../helpers/colors';

  export let component:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'p'
    | 'span'
    | 'sub'
    | 'sup' = 'p';
  export let color:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'danger'
    | 'black'
    | 'white' = null;
</script>

{#if component === 'h1'}
  <h1 style="color: rgba({getColor(color).value}, 1);"><slot /></h1>
{/if}

{#if component === 'h2'}
  <h2 style="color: rgba({getColor(color).value}, 1);"><slot /></h2>
{/if}

{#if component === 'h3'}
  <h3 style="color: rgba({getColor(color).value}, 1);"><slot /></h3>
{/if}

{#if component === 'h4'}
  <h4 style="color: rgba({getColor(color).value}, 1);"><slot /></h4>
{/if}

{#if component === 'h5'}
  <h5 style="color: rgba({getColor(color).value}, 1);"><slot /></h5>
{/if}

{#if component === 'h6'}
  <h6 style="color: rgba({getColor(color).value}, 1);"><slot /></h6>
{/if}

{#if component === 'p'}
  <p style="color: rgba({getColor(color).value}, 1);"><slot /></p>
{/if}

{#if component === 'span'}
  <span style="color: rgba({getColor(color).value}, 1);"><slot /></span>
{/if}

{#if component === 'sup'}
  <sup style="color: rgba({getColor(color).value}, 1);"><slot /></sup>
{/if}

{#if component === 'sup'}
  <sup style="color: rgba({getColor(color).value}, 1);"><slot /></sup>
{/if}

<style lang="scss">
  @import '../../scss/main.scss';

  h1 {
    font-size: $font-size-h1;
  }
  h2 {
    font-size: $font-size-h2;
  }

  h3 {
    font-size: $font-size-h3;
  }

  h4 {
    font-size: $font-size-h4;
  }

  h5 {
    font-size: $font-size-h5;
  }

  h6 {
    font-size: $font-size-h6;
  }
</style>

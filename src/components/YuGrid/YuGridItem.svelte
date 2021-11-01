<script lang="ts">
  export let colStar: number = null;
  export let colEnd: number = null;
  export let xs: number = null;
  export let sm: number = null;
  export let md: number = null;
  export let lg: number = null;
  export let xlg: number = null;
  function getMediaQuerys() {
    return `xs-col-span-${xs} sm-col-span-${sm} md-col-span-${md} lg-col-span-${lg} xlg-col-span-${xlg}`;
  }
</script>

<div
  class="col-start-{colStar} {colEnd && `col-end-${colEnd}`} {getMediaQuerys()}"
>
  <slot />
</div>

<style lang="scss">
  @import '../../scss/main.scss';
  $total: 50;

  @for $i from 0 through $total {
    .col-start-#{'' + $i} {
      grid-column-start: $i !important;
    }
    .col-end-#{'' + $i} {
      grid-column-end: $i !important;
    }
  }
  @each $media, $val in $screems {
    @media screen and(min-width: $val) {
      @for $i from 0 through $total {
        :global(.#{$media}-col-span-#{$i}) {
          grid-column: span $i/span $i;
        }
      }
    }
  }
  @for $i from 0 through 20 {
    .col-span-#{$i} {
      grid-column: span $i/span $i;
    }
  }
</style>

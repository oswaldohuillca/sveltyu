<script lang="ts"></script>

<div class="card">
  <slot />
</div>

<style lang="scss">
  @import '../../scss/main.scss';

  .card {
    border-radius: $radius;
    background: $white;
  }
</style>

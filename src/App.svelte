<script lang="ts">
  import YuButton from './components/YuButton/YuButton.svelte';
  import YuCard from './components/YuCard/YuCard.svelte';

  export let name: string;
</script>

<main>
  <h1>Hello {name}!</h1>
  <YuButton>hola como stas</YuButton>
  <YuButton color="danger">hola como stas</YuButton>
  <YuCard>card</YuCard>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

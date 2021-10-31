<script lang="ts">
  import YuAlert from './components/YuAlert/YuAlert.svelte';
  import YuButton from './components/YuButton/YuButton.svelte';
  import YuCard from './components/YuCard/YuCard.svelte';

  export let name: string;
  function handleclick(e) {
    console.log(e.target);
  }
</script>

<main>
  <h1>Hello {name}!</h1>
  <YuButton click={handleclick}>primary</YuButton>
  <YuButton click={handleclick} color="success" iconStart icon="favorite">
    success
  </YuButton>
  <YuButton click={handleclick} color="secondary">secondary</YuButton>
  <YuButton click={handleclick} color="warning">warning</YuButton>
  <YuButton click={handleclick} color="danger" iconEnd icon="shopping_cart"
    >danger</YuButton
  >
  <YuButton click={handleclick} color="black">black</YuButton>
  <YuButton click={handleclick} color="black" isIcon>
    <span class="material-icons"> favorite </span>
  </YuButton>
  <YuButton click={handleclick} color="white">white</YuButton>
  <YuCard>card</YuCard>
  <YuAlert>hola como estan</YuAlert>
  <YuAlert color="danger">hola como estan</YuAlert>
  <YuAlert color="warning">hola como estan</YuAlert>
</main>

<style>
  main {
    padding: 20px;
  }
  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }
  :global(.material-icons) {
    font-size: 20px !important;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

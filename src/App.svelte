<script lang="ts">
  import YuAlert from './components/YuAlert/YuAlert.svelte';
  import YuButton from './components/YuButton/YuButton.svelte';
  import YuCard from './components/YuCard/YuCard.svelte';
  import YuGrid from './components/YuGrid/YuGrid.svelte';
  import YuGridItem from './components/YuGrid/YuGridItem.svelte';
  import YuInput from './components/YuInput/YuInput.svelte';
  import YuTypography from './components/YuTypography/YuTypography.svelte';

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
  <YuButton click={handleclick} color="danger" iconEnd icon="shopping_cart">
    danger
  </YuButton>
  <YuButton click={handleclick} color="black">black</YuButton>
  <YuButton click={handleclick} color="black" isIcon>
    <span class="material-icons"> favorite </span>
  </YuButton>
  <YuButton click={handleclick} color="white">white</YuButton>
  <YuCard>card</YuCard>
  <YuAlert>
    <YuTypography component="h6">Title de title ?</YuTypography>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore quis pariatur
    in natus tempore rem, nobis eum tenetur maiores illum odio deserunt, officia
    dicta eligendi? Labore ipsa sunt fugiat voluptas! Illum qui quod ab quisquam
    tempora ad cupiditate facilis fugit exercitationem corporis unde quos quis nihil
    et distinctio, obcaecati reiciendis commodi doloremque eos. Doloremque rerum
    animi dicta ex magnam excepturi! Mollitia, recusandae dolores. Libero unde, eum
    beatae veritatis ullam maiores doloremque animi. Quo mollitia veritatis ex odit
    voluptatibus non quos, assumenda eaque accusantium, excepturi iste voluptatem
    nihil distinctio, tenetur recusandae!
  </YuAlert>
  <YuAlert color="danger">hola como estan</YuAlert>
  <YuAlert color="warning">hola como estan</YuAlert>
  <YuInput iconStart="favorite" iconEnd="phone" />
  <YuInput color="success" iconStart="phone" />
  <YuInput color="primary" iconStart="mail" />
  <YuInput color="danger" iconStart="person" placeholder="Usuario" />
  <YuGrid gap={10} colums={10}>
    <YuGridItem xs={10} sm={4} md={8} lg={3} xlg={2}>Item</YuGridItem>
    <div>asdas</div>
    <div>asdas</div>
    <div>asdas</div>
    <div>asdas</div>
  </YuGrid>
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
    font-size: 18px !important;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

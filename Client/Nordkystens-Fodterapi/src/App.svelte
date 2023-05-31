<script>
  import Hjem from "./pages/hjem/Hjem.svelte";
  import { Route, Router } from "svelte-navigator";
  import Navbar from "./components/Navbar.svelte";
  import Footer from "./components/Footer.svelte";
  import Kontakt from "./pages/kontakt/Kontakt.svelte";
  import Behandlinger from "./pages/behandlinger/Behandlinger.svelte";
  import Indlæg from "./pages/indlæg/Indlæg.svelte";
  import OmMig from "./pages/omMig/OmMig.svelte";
</script>

<main>
<Router>
  <div>
    <Navbar />
  </div>
  <Route path="/">
    <Hjem />
  </Route>
  <Route path="/kontakt">
    <Kontakt />
  </Route>
  <Route path="/behandlinger">
    <Behandlinger />
  </Route>
  <Route path="/indlæg">
    <Indlæg />
  </Route>
  <Route path="/ommig">
    <OmMig />
  </Route>
  <div>
    <Footer />
  </div>
</Router>


</main>

<style>
</style>

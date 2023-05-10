<script>
  import { Route, Router } from "svelte-navigator";
  import Navbar from "./components/Navbar.svelte";
  import Hjem from "./pages/hjem/Hjem.svelte";
  import Kontakt from "./pages/kontakt/Kontakt.svelte";
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
</Router>


</main>

<style>
</style>

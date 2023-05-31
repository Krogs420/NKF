<script>
  import { Router, Link, useNavigate } from "svelte-navigator";
  import toastr from "toastr";
</script>

<main>
  <Router>
    <nav>
      <Link to="/">Hjem</Link>
      <Link to="/behandlinger">Behandlinger</Link>
      <Link to="/indlæg">Indlæg</Link>
      <Link to="/kontakt">Kontakt</Link>
      <Link to="/ommig">Om Mig</Link>
    </nav>
  </Router>
</main>

<style>
  nav {
    position: fixed;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    top: 0;
    width: 100vw;
    height: 35px;
    background-color: #271983;
  }

</style>

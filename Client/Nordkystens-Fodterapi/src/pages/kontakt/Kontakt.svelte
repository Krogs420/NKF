<script>
  import { Router, useNavigate } from "svelte-navigator";
  import toastr, * as Toastr from "toastr";
  import "../../../node_modules/toastr/build/toastr.css";

  const navigate = useNavigate();

  let navn = "";
  let email = "";
  let besked = "";

  async function sendMail() {
    const url = "http://localhost:8081/email";

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ navn, email, besked }),
        credentials: "include",
      });
      navigate("/");
      Toastr.success("Din besked er nu sendt");
    } catch {
      Toastr.warning("Noget gik galt, prøv igen!");
    }
  }
</script>

<Router primary={false}>
  <div>
    <div>
      <h1>Kontakt os</h1>
    </div>
    <div class="container-footer">
      <form
        on:submit|preventDefault={sendMail}
        id="contact_form"
        method="POST"
        action="/contact"
      >
        <input type="name" bind:value={navn} placeholder="Dit navn. . ." />
        <input type="email" bind:value={email} placeholder="Din email. . ." />
        <textarea bind:value={besked} placeholder="Din besked. . ." />
        <button class="button-color" type="submit">Send besked</button>
      </form>
    </div>
  </div>
</Router>

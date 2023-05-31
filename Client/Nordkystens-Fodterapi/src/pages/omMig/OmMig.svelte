<script>
     import { useNavigate } from "svelte-navigator";

     const navigate = useNavigate();
</script>

<div class="about-section">
  <h1>About Us Page</h1>
  <p>Some text about who we are and what we do.</p>
  <p>
    Resize the browser window to see that this page is responsive by the way.
  </p>
</div>

<h2 style="text-align:center">Our Team</h2>
<div class="row">
  <div class="column">
    <div class="card">
      <img src="potræt.jpg" alt="Filler" style="width:100%" />
      <div class="container">
        <h2>Jacob Kryger</h2>
        <p class="title">CEO & Founder</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>jane@example.com</p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>
</div>

<!-- <style>
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  .column {
    float: left;
    width: 33.3%;
    margin-bottom: 16px;
    padding: 0 8px;
  }

  .card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    margin: 8px;
    background-color: white;
  }

  .about-section {
    padding: 50px;
    text-align: center;
    background-color: #474e5d;
    color: white;
  }

  .container {
    padding: 0 16px;
    background-color: white;
  }

  .container::after,
  .row::after {
    content: "";
    clear: both;
    display: table;
  }

  .button {
    border: none;
    outline: 0;
    display: block;
    margin: 0;
    padding: 8px;
    color: white;
    background-color: #000;
    text-align: center;
    cursor: pointer;
    width: 100%;
  }

  .button:hover {
    background-color: #555;
  }

  @media screen and (max-width: 650px) {
    .column {
      width: 100%;
      display: block;
    }
  }
</style> -->

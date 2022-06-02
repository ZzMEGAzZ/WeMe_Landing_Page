<script>
  import { Excutive } from "./Stores.js";

  AOS.init({
    offset: 400, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 1000, // values from 0 to 3000, with step 50ms
  });
</script>

<header class="main-header">
  <h1><span>WeMe</span> Excutive Team</h1>
  <p>
    You + Me = We <br />
    Wouldn't be me without you
  </p>
</header>

<main class="container">
  <section id="card" class="mb-top">
    <img src="https://i.ibb.co/VvC0vpN/paint-1.png" alt="" />
    <div>
      <h2>{$Excutive.CEO.nickname}</h2>
      <h3>{$Excutive.CEO.name} {$Excutive.CEO.lastname}</h3>
      <p>{$Excutive.CEO.position}</p>
      <p>{$Excutive.CEO.university}</p>
      <p>{$Excutive.CEO.faculty}</p>
      <p>{$Excutive.CEO.major}</p>
      <br />
      <p>{$Excutive.CEO.description}</p>
    </div>
  </section>

  <section id="card" class="mb-bottom" data-aos="fade-left">
    <img src="https://i.ibb.co/3NHjDcW/paint-2.png" alt="" />
    <div>
      <h2>{$Excutive.CMO.nickname}</h2>
      <h3>{$Excutive.CMO.name} {$Excutive.CMO.lastname}</h3>
      <p>{$Excutive.CMO.position}</p>
      <p>{$Excutive.CMO.university}</p>
      <p>{$Excutive.CMO.faculty}</p>
      <p>{$Excutive.CMO.major}</p>
      <br />
      <p>{$Excutive.CMO.description}</p>
    </div>
  </section>

  <section id="card" class="mb-top" data-aos="fade-right">
    <img src="https://i.ibb.co/0VywMkW/paint-3.png" alt="" />
    <div>
      <h2>{$Excutive.CCO.nickname}</h2>
      <h3>{$Excutive.CCO.name} {$Excutive.CCO.lastname}</h3>
      <p>{$Excutive.CCO.position}</p>
      <p>{$Excutive.CCO.university}</p>
      <p>{$Excutive.CCO.faculty}</p>
      <p>{$Excutive.CCO.major}</p>
      <br />
      <p>{$Excutive.CCO.description}</p>
    </div>
  </section>

  <section id="card" class="mb-bottom" data-aos="fade-left">
    <img src="https://i.ibb.co/5LkJFRP/paint-4.png" alt="" />
    <div>
      <h2>{$Excutive.COO.nickname}</h2>
      <h3>{$Excutive.COO.name} {$Excutive.COO.lastname}</h3>
      <p>{$Excutive.COO.position}</p>
      <p>{$Excutive.COO.university}</p>
      <p>{$Excutive.COO.faculty}</p>
      <p>{$Excutive.COO.major}</p>
      <br />
      <p>{$Excutive.COO.description}</p>
    </div>
  </section>

  <section id="card" class="mb-top" data-aos="fade-right">
    <img src="https://i.ibb.co/61R8Q2y/paint-5.png" alt="" />
    <div>
      <h2>{$Excutive.CTO.nickname}</h2>
      <h3>{$Excutive.CTO.name} {$Excutive.CTO.lastname}</h3>
      <p>{$Excutive.CTO.position}</p>
      <p>{$Excutive.CTO.university}</p>
      <p>{$Excutive.CTO.faculty}</p>
      <p>{$Excutive.CTO.major}</p>
      <br />
      <p>{$Excutive.CTO.description}</p>
    </div>
  </section>
</main>

<style>
  main {
    font-size: 1.3rem;
    font-family: "Oswald", sans-serif;
  }

  .container {
    max-width: 1100px;
    margin: auto;
    overflow: auto;
    padding: 0 2rem;
  }

  .main-header {
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    word-break: break-word;
  }

  .main-header h1 {
    font-size: 4rem;
    margin-bottom: 2rem;
    line-height: 1.2;
  }

  .main-header h1 span {
    color: #ef8e44;
  }

  .main-header p {
    font-size: 2rem;
  }

  img {
    width: 300px;
    padding: 10px;
  }

  .mb-top {
    display: flex;
    flex-direction: column;
  }

  .mb-bottom {
    display: flex;
    flex-direction: column-reverse;
  }

  #card {
    align-items: center;
    background: #f1f1f1;
    margin-bottom: 2rem;
    word-break: break-word;
  }

  #card h3 {
    margin-bottom: 2rem;
  }

  #card img {
    height: 400px;
  }

  #card > div {
    padding: 2rem;
  }

  #card:nth-child(even) img {
    order: 2;
  }

  @media only screen and (min-width: 767px) {
    #card {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 2rem;
      align-items: center;
      justify-items: center;
      word-break: break-word;
    }
  }
</style>

<script>
  import { Excutive } from "./Stores.js";

  // Const Members
  const M1 = $Excutive.CEO
  const M2 = $Excutive.CMO
  const M3 = $Excutive.CCO
  const M4 = $Excutive.CTO
  const M5 = $Excutive.DEV

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
  <!--Member 1-->
  <section id="card" class="mb-top">
    <img src="https://i.ibb.co/VvC0vpN/paint-1.png" alt="" />
    <div>
      <h2>{M1.nickname}</h2>
      <h3>{M1.name} {M1.lastname}</h3>
      <p>{M1.position}</p>
      <p>{M1.university}</p>
      <p>{M1.faculty}</p>
      <p>{M1.major}</p>
      <br />
      <p>{M1.description}</p>
    </div>
  </section>
  <!--Member 1-->

  <!--Member 2-->
  <section id="card" class="mb-bottom" data-aos="fade-left">
    <img src="https://i.ibb.co/3NHjDcW/paint-2.png" alt="" />
    <div>
      <h2>{M2.nickname}</h2>
      <h3>{M2.name} {M2.lastname}</h3>
      <p>{M2.position}</p>
      <p>{M2.university}</p>
      <p>{M2.faculty}</p>
      <p>{M2.major}</p>
      <br />
      <p>{M2.description}</p>
    </div>
  </section>
  <!--Member 2-->

  <!--Member 3-->
  <section id="card" class="mb-top" data-aos="fade-right">
    <img src="https://i.ibb.co/0VywMkW/paint-3.png" alt="" />
    <div>
      <h2>{M3.nickname}</h2>
      <h3>{M3.name} {M3.lastname}</h3>
      <p>{M3.position}</p>
      <p>{M3.university}</p>
      <p>{M3.faculty}</p>
      <p>{M3.major}</p>
      <br />
      <p>{M3.description}</p>
    </div>
  </section>
  <!--Member 3-->

  <!--Member 4-->
  <section id="card" class="mb-bottom" data-aos="fade-left">
    <img src="https://i.ibb.co/5LkJFRP/paint-4.png" alt="" />
    <div>
      <h2>{M4.nickname}</h2>
      <h3>{M4.name} {M4.lastname}</h3>
      <p>{M4.position}</p>
      <p>{M4.university}</p>
      <p>{M4.faculty}</p>
      <p>{M4.major}</p>
      <br />
      <p>{M4.description}</p>
    </div>
  </section>
  <!--Member 4-->

  <!--Member 5-->
  <section id="card" class="mb-top" data-aos="fade-right">
    <img src="https://i.ibb.co/61R8Q2y/paint-5.png" alt="" />
    <div>
      <h2>{M5.nickname}</h2>
      <h3>{M5.name} {M5.lastname}</h3>
      <p>{M5.position}</p>
      <p>{M5.university}</p>
      <p>{M5.faculty}</p>
      <p>{M5.major}</p>
      <br />
      <p>{M5.description}</p>
    </div>
  </section>
  <!--Member 5-->

</main>

<style>
  main {
    font-size: 1.3rem;
  }
  h1, h2, h3 {
    color: var(--title-color-gray);
  }

  p {
    color: var(--content-color-gray);
  }

  .container {
    max-width: 1100px;
    margin: auto;
    overflow: hidden;
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
    color: var(--primary-color-orange);
  }

  .main-header p {
    font-size: 2rem;
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
    margin-bottom: 2rem;
    word-break: break-word;
    background: #f1f1f1;
  }

  #card h3 {
    margin-bottom: 2rem;
  }

  #card img {
    max-inline-size: 90%;
    block-size: auto;
    aspect-ratio: 1/1.5;
    object-fit: cover;
    object-position: top center;
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

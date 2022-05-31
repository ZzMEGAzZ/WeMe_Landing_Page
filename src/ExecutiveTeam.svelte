<script>
    import { Excutive } from "./Stores.js";

    AOS.init({
        offset: 400, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 1000 // values from 0 to 3000, with step 50ms
      });

</script>

<header class="main-header">
    <h1><span>WeMe</span> Excutive Team</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
      quam!
    </p>
  </header>

  <main class="container">
    <section id="card" class="mb-top">
      <img src="https://i.ibb.co/VvC0vpN/paint-1.png" alt="" />
      <div>
        <h2>{$Excutive[0].nickname}</h2>
        <h3>{$Excutive[0].name} {$Excutive[0].lastname}</h3>
        <p>{$Excutive[0].position}</p>
        <p>{$Excutive[0].university}</p>
        <p>{$Excutive[0].faculty} {$Excutive[0].major}</p>
        <br />
        <p>
            {$Excutive[0].description}
        </p>
      </div>
    </section>

    <section id="card" class="mb-bottom" data-aos="fade-left">
      <img src="https://i.ibb.co/3NHjDcW/paint-2.png" alt="" />
      <div>
        <h2>{$Excutive[1].nickname}</h2>
        <h3>{$Excutive[1].name} {$Excutive[1].lastname}</h3>
        <p>{$Excutive[1].position}</p>
        <p>{$Excutive[1].university}</p>
        <p>{$Excutive[1].faculty} {$Excutive[1].major}</p>
        <br />
        <p>
            {$Excutive[1].description}
        </p>
      </div>
    </section>

    <section id="card" class="mb-top" data-aos="fade-right">
      <img src="https://i.ibb.co/0VywMkW/paint-3.png" alt="" />
      <div>
        <h2>{$Excutive[2].nickname}</h2>
        <h3>{$Excutive[2].name} {$Excutive[2].lastname}</h3>
        <p>{$Excutive[2].position}</p>
        <p>{$Excutive[2].university}</p>
        <p>{$Excutive[2].faculty} {$Excutive[2].major}</p>
        <br />
        <p>
            {$Excutive[2].description}
        </p>
      </div>
    </section>

    <section id="card" class="mb-bottom" data-aos="fade-left">
      <img src="https://i.ibb.co/5LkJFRP/paint-4.png" alt="" />
      <div>
        <h2>{$Excutive[3].nickname}</h2>
        <h3>{$Excutive[3].name} {$Excutive[3].lastname}</h3>
        <p>{$Excutive[3].position}</p>
        <p>{$Excutive[3].university}</p>
        <p>{$Excutive[3].faculty} {$Excutive[3].major}</p>
        <br />
        <p>
            {$Excutive[3].description}
        </p>
      </div>
    </section>

    <section id="card" class="mb-top" data-aos="fade-right">
      <img src="https://i.ibb.co/61R8Q2y/paint-5.png" alt="" />
      <div>
        <h2>{$Excutive[4].nickname}</h2>
        <h3>{$Excutive[4].name} {$Excutive[4].lastname}</h3>
        <p>{$Excutive[4].position}</p>
        <p>{$Excutive[4].university}</p>
        <p>{$Excutive[4].faculty} {$Excutive[4].major}</p>
        <br />
        <p>
            {$Excutive[4].description}
        </p>
      </div>
    </section>
  </main>

<style>
    * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

main {
  font-size: 1.3rem;
  font-family: 'Oswald', sans-serif;
  background: #f9f9f9;
}

.container {
  max-width: 1100px;
  margin: auto;
  overflow: auto;
  padding: 0 2rem;
}

.main-header {
  height: 55vh;
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
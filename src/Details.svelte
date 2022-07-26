<script>
  AOS.init({
    offset: 100, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 1000, // values from 0 to 3000, with step 50ms
  });
</script>

<header class="main-header">
  <h1><span>WeMe</span></h1>
  <p>
    WeMe แอปพลิเคชันหาเพื่อนทำกิจกรรม หาเพื่อนเล่นกีฬา พร้อมโปรโมชันสุดพิเศษสำหรับคุณ
  </p>
</header>

<main class="container">
  <!--Card 1-->
  <section id="card" class="mb-top">
    <div>
      <p>หาเพื่อนเล่นกีฬา</p>
    </div>
  </section>
  <!--Card 1-->

  <!--Card 2-->
  <section id="card" class="mb-bottom" data-aos="fade-left">
    <div>
      <p>หาเพื่อนเล่นกีฬา</p>
    </div>
  </section>
  <!--Card 2-->

  <!--Card 3-->
  <section id="card" class="mb-top" data-aos="fade-right">
    <div>
      <p>หาเพื่อนเล่นกีฬา</p>
    </div>
  </section>
  <!--Card 3-->

  <!--Card 4-->
  <section id="card" class="mb-bottom" data-aos="fade-left">
    <div>
      <p>หาเพื่อนเล่นกีฬา</p>
    </div>
  </section>
  <!--Card 4-->

  <!--Card 5-->
  <section id="card" class="mb-top" data-aos="fade-right">
    <div>
      <p>หาเพื่อนเล่นกีฬา</p>
    </div>
  </section>
  <!--Card 5-->

  <!--Card 6-->
  <section id="card" class="mb-bottom" data-aos="fade-left">
    <div>
      <p>หาเพื่อนเล่นกีฬา</p>
    </div>
  </section>
  <!--Card 6-->

</main>

<style>

  main {
    font-size: 1.3rem;
  }
  h1 {
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
    border-radius: 20px;
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
    border-radius: 20px;
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
<main>
    <h1>ช่องทางออนไลน์</h1>
    <div class="container">
        <section id="IG" class="social">
            <p>Instragram</p>
            <img src="img/IG-QR-Code.png" alt="" />
        </section>

        <section id="FB" class="social">
            <p>Facebook</p>
            <img src="img/IG-QR-Code.png" alt="" />
        </section>
    </div>
</main>

<style>
    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: var(--title-color-gray);
    }
    h1 {
        font-size: 2.5rem;
        font-weight: bold;
        margin-bottom: 1rem;
        color: white;
    }
    img {
        width: 40%;
        max-width: 500px;
        height: auto;
        margin: 20px;
        justify-content: center;
    }

    .container {
        display: grid;
    }

    .social {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: var(--title-color-gray);
        color: white;
        margin: 20px;
    }

    @media only screen and (min-width: 767px) {
        .container {
            grid-template-columns: 1fr 1fr;
            grid-gap: 20px;
        }
    }
</style>

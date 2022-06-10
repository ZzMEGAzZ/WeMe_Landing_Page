<script>
    import { mode } from "./Stores.js";  
    
    function setTo(page) {
        $mode = page;
        if (page == "home") {
      document.getElementById("home-btn").style.border = "#EF8E44 solid 4px";
    } else {
      document.getElementById("home-btn").style.border = "none";
    }
    if (page == "details") {
      document.getElementById("details-btn").style.border = "#EF8E44 solid 4px";
    } else {
      document.getElementById("details-btn").style.border = "none";
    }
    if (page == "contact") {
      document.getElementById("contact-btn").style.border = "#EF8E44 solid 4px";
    } else {
      document.getElementById("contact-btn").style.border = "none";
    }
    if (page == "donate") {
      document.getElementById("donate-btn").style.border = "#EF8E44 solid 4px";
    } else {
      document.getElementById("donate-btn").style.border = "none";
    }
    if (page == "subscribe") {
      document.getElementById("subscribe-btn").style.border = "#EF8E44 solid 4px";
    } else {
      document.getElementById("subscribe-btn").style.border = "none";
    }
    }

</script>

<div class="container">
    <div class="container_content">
        <div class="container_content_inner">
            <div class="title">
                <h1 id="we">We</h1>
                <h1 id="me">Me</h1>
            </div>
            <div class="par">
                <p>
                    WeMe แอปพลิเคชันหาเพื่อนทำกิจกรรม หาเพื่อนเล่นกีฬา พร้อมโปรโมชันสุดพิเศษสำหรับคุณ
                </p>
            </div>
            <div class="btns">
                <button class="btns_more" on:click={() => setTo("details")}> See more </button>
                <button class="btns_more" on:click={() => setTo("subscribe")}> Subscribe </button>
            </div>
        </div>
    </div>
    <div class="container_outer_img">
        <div class="img-inner">
            <img src="img/Hprototype.png" alt="" class="container_img" />
        </div>
    </div>
</div>
<div class="overlay" />

<style>
    .overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        height: 100vh;
        z-index: -10;
        background-color: var(--secondary-color-orange);
    }

    .container {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        color: var(--content-color-orange);
        animation: expand 0.8s ease forwards;
        background-color: white;
        position: relative;
        transition: all 0.8s ease;
    }

    #we {
        color: var(--primary-color-blue)
    }

    #me {
        color: var(--primary-color-orange)
    }

    .title {
        display: flex;
    }

    .container_content {
        width: 100%;
    }

    .container_content_inner {
        width: 100%;
        text-align: center;
    }

    .container_outer_img {
        margin: 20px;
        overflow: hidden;
    }

    .container_img {
        width: 100%;
        animation: slideIn 1.5s ease-in-out forwards;
    }

    .par {
        height: auto;
        overflow: hidden;
    }

    p {
        margin: 10px;
        word-break: break-word;
        font-size: 1em;
        line-height: 28px;
        transform: translateY(300px);
        animation: slideUp 0.8s ease-in-out forwards 0.8s;
        color: var(--content-color-gray);
    }

    .btns {
        height: 100%;
        position: relative;
        overflow: hidden;
    }

    .btns_more {
        background: transparent;
        border: 1px solid var(--primary-color-blue);
        border-radius: 50px;
        padding: 8px 12px;
        color: var(--content-color-orange);
        font-size: 16px;
        text-transform: uppercase;
        position: relative;
        margin-top: 15px;
        outline: none;
        transform: translateY(50px);
        animation: slideUp 0.8s ease-in-out forwards 1s;
    }

    .title {
        overflow: hidden;
        height: auto;
    }

    h1 {
        font-size: 3em;
        margin-top: 20px;
        margin-bottom: 20px;
        transform: translateY(100px);
        animation: slideUp 0.8s ease forwards 0.5s;
    }

    @media only screen and (min-width: 767px) {

        h1 {
            font-size: 5em;
        }

        p {
            font-size: 1.5em;
        }
        .container {
            width: 100%;
            height: 100vh;
            flex-direction: row;
            justify-content: space-evenly;
            align-items: center;
            background-color: white;
        }

        .container_content {
            width: 50%;
        }

        .container_content_inner {
            width: 80%;
            margin-left: 80px;
            text-align: left;
        }

        .container_outer_img {
            margin: 50px;
            width: 50%;
        }
    }

    @keyframes slideIn {
        0% {
            transform: translateX(500px) scale(0.2);
        }
        100% {
            transform: translateX(0px) scale(1);
        }
    }

    @keyframes slideUp {
        0% {
            transform: translateY(300px);
        }
        100% {
            transform: translateY(0px);
        }
    }

    @keyframes expand {
        0% {
            transform: translateX(1400px);
        }
        100% {
            transform: translateX(0px);
        }
    }
</style>

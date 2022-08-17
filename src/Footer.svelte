<footer class="footer-distributed">
    <div class="footer-right">
        <a href={"https://www.instagram.com/bydeval/"} target="_blank"
            ><img src="img/IG-Logo.png" alt="" /></a
        >
        <a href={"https://www.instagram.com/bydeval/"} target="_blank"
            ><img src="img/IG-Logo.png" alt="" /></a
        >
        <a href={"https://www.instagram.com/bydeval/"} target="_blank"
            ><img src="img/IG-Logo.png" alt="" /></a
        >
        <a href={"https://www.instagram.com/bydeval/"} target="_blank"
            ><img src="img/IG-Logo.png" alt="" /></a
        >
    </div>

    <div class="footer-left">
        <img class="weme" src="img/Logo.png" alt="" />
        <p class="description">
            WeMe แอปพลิเคชันหาเพื่อนเล่นกีฬา
            พร้อมโปรโมชันสุดพิเศษสำหรับคุณ
        </p>
        <p>By Deval &copy; 2022</p>
    </div>
</footer>

<style>
    .footer-distributed {
        display: flex;
        flex-direction: column;
        align-items: center;
        bottom: 0;
        background-color: #292c2f;
        box-sizing: border-box;
        width: 100%;
        text-align: left;
        padding: 45px 50px;
    }

    .footer-left {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding-left: 20px;
        padding-right: 20px;
    }

    .footer-distributed .footer-left p {
        color: #8f9296;
        font-size: 14px;
        margin: 0;
    }

    .footer-distributed .footer-right {
        float: right;
        margin-top: 6px;
        max-width: 180px;
    }

    .footer-distributed .footer-right a {
        display: inline-block;
        width: 35px;
        height: 35px;
        background-color: #33383b;
        border-radius: 2px;
        font-size: 20px;
        color: #ffffff;
        text-align: center;
        line-height: 35px;
        margin-left: 3px;
        transition: all 0.25s;
    }

    .footer-distributed .footer-right a:hover {
        transform: scale(1.1);
        -webkit-transform: scale(1.1);
    }

    img {
        width: 40px;
        height: 40px;
    }

    .weme {
        width: auto;
        height: 60px;
        text-align: center;
    }

    @media only screen and (min-width: 836px) {
        .footer-left {
            align-items: flex-start;
        }

        .footer-distributed {
            flex-direction: row-reverse;
            justify-content: space-between;
            align-items: center;
        }
    }
</style>

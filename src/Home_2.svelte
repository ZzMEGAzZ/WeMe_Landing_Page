<main>
    <h1>หากคุณมีปัญหาเหล่านี้</h1>
    <div class="container">
        <input type="radio" name="dot" id="one" />
        <input type="radio" name="dot" id="two" />
        <div class="button">
            <label for="one" class=" active one" />
            <label for="two" class="two" />
        </div>
        <div class="main-card">
            <div class="cards">
                <div class="card">
                    <div class="content">
                        <div class="img">
                            <img src="./img/Friend.png" alt="" />
                        </div>
                        <div class="details">
                            <div class="Problem-eng">Not Enough Friends</div>
                            <div class="Problem-th">
                                ไม่มีเพื่อนเล่นกีฬา เพื่อนผิดนัด เพื่อนไม่ว่าง
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="content">
                        <div class="img">
                            <img src="./img/Security.png" alt="" />
                        </div>
                        <div class="details">
                            <div class="Problem-eng">Low Security</div>
                            <div class="Problem-th">รู้สึกไม่ปลอดภัย</div>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="content">
                        <div class="img">
                            <img src="./img/Difficult.png" alt="" />
                        </div>
                        <div class="details">
                            <div class="Problem-eng">Difficult to use</div>
                            <div class="Problem-th">ใช้งานยากซับซ้อน</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="cards">
                <div class="card">
                    <div class="content">
                        <div class="img">
                            <img src="./img/Privacy.png" alt="" />
                        </div>
                        <div class="details">
                            <div class="Problem-eng">No Privacy</div>
                            <div class="Problem-th">รู้สึกไม่มีความเป็นส่วนตัว</div>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="content">
                        <div class="img">
                            <img src="./img/Inffective.png" alt="" />
                        </div>
                        <div class="details">
                            <div class="Problem-eng">Inffective</div>
                            <div class="Problem-th">ประสิทธิภาพต่ำทำงานช้า</div>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="content">
                        <div class="img">
                            <img src="./img/Expensive.png" alt="" />
                        </div>
                        <div class="details">
                            <div class="Problem-eng">Expensive Cost</div>
                            <div class="Problem-th">ค่าใช้จ่ายทำกิจกรรมแพง</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="button">
            <label for="one" class=" active one" />
            <label for="two" class="two" />
        </div>
    </div>
    <p>แอพพลิเคชันของเราสามารถช่วยคุณได้</p>
</main>

<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Poppins", sans-serif;
    }
    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background: #f2f2f2;
        position: relative;
    }
    main::before {
        content: "";
        position: absolute;
        width: 100%;
        background: #ff888c;
        clip-path: inset(47% 0 0 0);
        z-index: -1;
        height: 100%;
    }

    h1 {
        text-align: center;
        margin: 20px;
        color: var(--primary-color-blue);
    }

    p {
        text-align: center;
        margin: 20px;
        font-size: 2em;
        color: var(--primary-color-blue);
    }
    ::selection {
        background: #ff888c;
        color: #fff;
    }

    .container {
        max-width: 1440px;
        overflow: hidden;
        width: 100%;
    }
    .container .main-card {
        display: flex;
        justify-content: space-evenly;
        width: 200%;
        transition: 1s;
    }
    #two:checked ~ .main-card {
        margin-left: -100%;
    }
    .container .main-card .cards {
        width: calc(100% / 2 - 10px);
        display: flex;
        flex-wrap: wrap;
        margin: 0 20px;
        justify-content: space-between;
    }

    .main-card .cards .card {
        margin: 20px 0 10px 0;
        width: 100%;
    }
    .main-card .cards .card:hover {
        transform: translateY(-15px);
    }
    .cards .card .content {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
    .cards .card .content .img {
        height: 130px;
        width: 130px;
        border-radius: 50%;
        padding: 3px;
        background: #ff888c;
        margin-bottom: 14px;
    }
    .card .content .img img {
        height: 100%;
        width: 100%;
        border: 3px solid #ffff;
        border-radius: 50%;
        object-fit: cover;
    }
    .card .content .Problem-eng {
        font-size: 20px;
        font-weight: 500;
    }
    .card .content .Problem-th {
        font-size: 20px;
        color: #ff888c;
    }
    .container .button {
        width: 100%;
        display: flex;
        justify-content: center;
        margin: 20px;
    }
    .button label {
        height: 15px;
        width: 15px;
        border-radius: 20px;
        background: var(--primary-color-blue);
        margin: 0 4px;
        cursor: pointer;
        transition: all 0.5s ease;
    }
    .button label.active {
        width: 35px;
    }
    #one:checked ~ .button .one {
        width: 35px;
    }
    #one:checked ~ .button .two {
        width: 15px;
    }
    #two:checked ~ .button .one {
        width: 15px;
    }
    #two:checked ~ .button .two {
        width: 35px;
    }
    input[type="radio"] {
        display: none;
    }

    @media only screen and (min-width: 767px) {
        .main-card .cards .card {
            width: calc(100% / 3 - 10px);
            background: #fff;
            border-radius: 12px;
            padding: 30px;
            box-shadow: 0 5px 10px rgba(0, 0, 0, 0.25);
            transition: all 0.4s ease;
        }
    }
</style>

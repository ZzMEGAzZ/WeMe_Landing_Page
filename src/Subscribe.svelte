<script>

    function validate() {
        var name_v = document.forms["my-Form"]["name"].value;
        var last_v = document.forms["my-Form"]["lastname"].value;
        var age_v = document.forms["my-Form"]["age"].value;
        var email_v = document.forms["my-Form"]["email"].value;

        if(name_v =="" || last_v ==""|| age_v ==""|| email_v==""){
            alert("please fill all information");
            return false;
        }
        return true;
    }

    function submitForm() {

        if(validate()){          
            const form = document.getElementById("my-Form");
            form.addEventListener("submit", function (e) {
                console.log("sending data in progress ...");
                document.getElementById("send-data").style.display = "block";
                document.getElementById("my-Form").style.display = "none";
                e.preventDefault();
                const data = new FormData(form);
                const action = e.target.action;
                fetch(action, {
                    method: "POST",
                    body: data,
                }).then(() => {
                    console.log("sending data successfully");
                    document.getElementById("send-data").style.display = "none";
                    document.getElementById("send-data-success").style.display = "block";
                    alert("สมัครติดตามข่าวสารเรียบร้อยแล้ว");
                    //reset form
                    document.getElementById("my-Form").reset();
            });
        });
        };
    };
</script>

<!--Script คำสั่ง ดึงข้อมูลไป Google Sheet = https://script.google.com/macros/s/AKfycbxlZ5IZBp8DgChaEf0wnBr14OHaF6DylRJEeAkW5a8fzy5XcqvGIUWlnTvRnS_cuHCbag/exec -->

<main id="body">
    <h1 id="caution">ลงทะเบียนติดตาม ข่าวสารตอนนี้!</h1>
    <p>
        เพื่อพัฒนาแอปพลิเคชันต่อไปข้อมูลของคุณจะถูกจัดเก็บเพื่อยืนยันกับแหล่งทุนว่ามีผู้คนสนใจจริงโดยจะไม่ถูกเปิดเผยสู่สาธารณะโดยเด็ดขาด
    </p>
    <p id="head">สมัครติดตามข่าวสาร</p>
    <div id="container">
        <form
            name="my-Form"
            id="my-Form"
            method="POST"
            action="https://script.google.com/macros/s/AKfycbxlZ5IZBp8DgChaEf0wnBr14OHaF6DylRJEeAkW5a8fzy5XcqvGIUWlnTvRnS_cuHCbag/exec"
        >
            <div id="name-box" class="form-group">
                <input
                    type="text"
                    class="form-control"
                    id="name"
                    placeholder="*ชื่อ"
                    name="name"
                    required
                />
                <input
                    type="text"
                    class="form-control"
                    id="lastname"
                    placeholder="*นามสกุล"
                    name="lastname"
                    required
                />
                <input
                    type="number"
                    min="1"
                    class="form-control"
                    id="age"
                    placeholder="อายุ"
                    name="age"
                    required
                />
                <input
                    type="email"
                    class="form-control"
                    id="email"
                    placeholder="*อีเมล"
                    name="email"
                    required
                    
                />
            </div>
            <div id="etc-box" class="form-group">
                <textarea
                    type="text"
                    id="etc"
                    name="สิ่งที่อยากจะบอกเรา"
                    placeholder="สิ่งที่อยากจะบอกเรา"
                />
            </div>
            <button type="submit" value="Submit" on:click={() => submitForm()}>สมัครรับข้อมูล</button>
        </form>

        <p id="send-data">sending data in progress ...</p>
        <p id="send-data-success">Thank you for subscribing</p>
    </div>
</main>

<style>
    main {
        margin: 0 auto;
        padding: 10px;
        width: 100%;
        text-align: center;
        background-color: var(--title-color-gray);
        color: white;
    }

    #caution {
        margin: 10px 0;
        font-size: 2.5rem;
        font-weight: bold;
        color: var(--primary-color-orange);
    }

    p#head {
        font-size: 30px;
        color: white;
        text-align: center;
        margin: 0 20px;
    }
    #container {
        width: 100vw;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    form {
        width: 100vw;
        padding: 30px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    #name-box {
        padding: 20px;
        display: flex;
        flex-direction: column;
    }
    textarea {
        resize: both;
        min-width: 200px;
        min-height: 200px;
        max-width: 300px;
        max-height: 250px;
        margin-top: 20px;
        border-radius: 20px;
    }
    input {
        border-radius: 20px;
    }
    button {
        border-radius: 20px;
        background-color: rgb(0, 0, 0);
        color: rgb(255, 255, 255);
        font-size: 20px;
        font-family: "Mitr", sans-serif;
        margin-top: 20px;
    }
    #send-data, #send-data-success {
        text-align: center;
        font-family: "Mitr", sans-serif;
        font-size: 20px;
        color: rgb(0, 0, 0);
        display: none;
    }
    @media only screen and (min-width: 767px) {
        #container {
            flex-direction: row;
        }
        form {
            flex-direction: row;
            justify-content: center;
            padding: 0;
        }

        textarea {
            margin-left: 20px;
            margin-right: 20px;
        }
    }
</style>

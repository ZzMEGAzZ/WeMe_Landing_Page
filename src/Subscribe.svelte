<script>
    window.addEventListener("load", function () {
        const form = document.getElementById("my-Form");
        form.addEventListener("submit", function (e) {
            console.log("send data inprogress");
            document.getElementById("send-data").style.display = "block";
			document.getElementById("body").style.display = "none";
            e.preventDefault();
            const data = new FormData(form);
            const action = e.target.action;
            fetch(action, {
                method: "POST",
                body: data,
            }).then(() => {
                console.log("send data success");
				document.getElementById("send-data").style.display = "none";
				document.getElementById("body").style.display = "block";
                alert("สมัครติดตามข่าวสารเรียบร้อยแล้ว")
                document.getElementById("name").value = "";
				document.getElementById("lastname").value = "";
				document.getElementById("age").value = "";
				document.getElementById("email").value = "";
				document.getElementById("etc").value = "";
            });
        });
    });
</script>

<p id="send-data" >send data inprogress ...</p>

<body id="body">
    <p id="head">สมัครติดตามข่าวสาร</p>
    <div id="container">
        <form
            id="my-Form"
            method="POST"
            action="https://script.google.com/macros/s/AKfycbz5fEv3gwQ9uj7B_JQPbAPw06XUn4re2Hv2Zo5Kk8TGOhaC4PjKOqg-2V78VDNAfWezTQ/exec"
        >
            <div id="name-box" class="form-group">
                <input
                    type="text"
                    class="form-control"
                    id="name"
                    placeholder="ชื่อ"
                    name="ชื่อ"
                    required
                />
                <input
                    type="text"
                    class="form-control"
                    id="lastname"
                    placeholder="นามสกุล"
                    name="นามสกุล"
                    required
                />
                <input
                    type="number"
                    min="1"
                    class="form-control"
                    id="age"
                    placeholder="อายุ"
                    name="อายุ"
                    required
                />
            </div>
            <div id="email-box" class="form-group">
                <input
                    type="email"
                    class="form-control"
                    id="email"
                    placeholder="อีเมล"
                    name="Email"
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
            <button type="submit" value="Submit"
                >สมัครรับข้อมูล</button>
        </form>
    </div>
</body>

<style>
    body {
        background-color: #f2f2f2;
        font-family: "Mitr", sans-serif;
        font-family: "Righteous", cursive;
    }
    p#head {
        font-family: "Mitr", sans-serif;
        font-size: 30px;
        color: rgb(0, 0, 0);
        text-align: center;
        margin-top: 20px;
    }
    #container {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    form {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;
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
        margin-left: 20px;
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
        margin-left: 20px;
    }
    #send-data{
        text-align: center;
        font-family: 'Mitr', sans-serif;
        font-size: 20px;
        color: rgb(0, 0, 0);
        display: none;
    }
</style>

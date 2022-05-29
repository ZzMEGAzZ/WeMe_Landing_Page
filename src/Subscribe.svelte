<head>
<script
  src="https://code.jquery.com/jquery-3.4.1.js"
  integrity="sha256-WpOohJOqMqqyKL9FccASB9O0KwACQJpFTUBLTYOVvVU="
  crossorigin="anonymous"></script>
<script>
    function SubForm (){
        $.ajax({
            url:'https://api.apispreadsheets.com/data/MnEvtAO1LBqeZmDc/',
            type:'post',
            data:$("#myForm").serializeArray(),
            success: function(){
            alert("สมัครติดตามข่าวสารเรียบร้อยแล้ว")
            },
            error: function(){
            alert("There was an error :(")
            }
        });
}
</script>
</head>
<body>
    <p id="head">สมัครติดตามข่าวสาร</p>
    <div id="container">
  <form id="myForm">
    <div id="name-box" class="form-group">

      <input type="text" class="form-control" id="name" placeholder="ชื่อ" name="ชื่อ">
      <input type="text" class="form-control" id="lastname" placeholder="นามสกุล" name="นามสกุล">
      <input type="number" min="1" class="form-control" id="age" placeholder="อายุ" name="อายุ">
    </div>
    <div id="email-box" class="form-group">
      <input type="email" class="form-control" id="email" placeholder="อีเมล" name="email">
    </div>
    <div id="etc-box" class="form-group">
      <textarea type="text" id="etc" name="สิ่งที่อยากจะบอกเรา" placeholder="สิ่งที่อยากจะบอกเรา"/>
    </div>
  </form>
  <button onclick="SubForm()">Submit</button>
    </div>
</body>

<style>
    body {
        background-color: #f2f2f2;
        font-family: 'Mitr', sans-serif;
        font-family: 'Righteous', cursive;
    }
    p#head{
        font-family: 'Mitr', sans-serif;
        font-size: 30px;
        color: rgb(0, 0, 0);
        text-align: center;
        margin-top: 20px;
    }
    #container{
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
    #name-box{
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
        font-family: 'Mitr', sans-serif;
        margin-top: 20px;
        margin-left: 20px;
    }
</style>
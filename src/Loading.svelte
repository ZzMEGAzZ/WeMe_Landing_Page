<body>
  <div class="box">
    <div class="container">
      <span class="circle" />
      <span class="circle" />
      <span class="circle" />
      <span class="circle" />
    </div>
  </div>
</body>

<style>
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 60vh;
    background: white;
  }
  .container {
    height: 15px;
    width: 105px;
    display: flex;
    position: relative;
  }
  .container .circle {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: #ef8e44;
    animation: move 500ms linear 0ms infinite;
    margin-right: 30px;
  }
  .container .circle:first-child {
    position: absolute;
    top: 0;
    left: 0;
    animation: grow 500ms linear 0ms infinite;
  }
  .container .circle:last-child {
    position: absolute;
    top: 0;
    right: 0;
    margin-right: 0;
    animation: grow 500ms linear 0s infinite reverse;
  }
  @keyframes grow {
    from {
      transform: scale(0, 0);
      opacity: 0;
    }
    to {
      transform: scale(1, 1);
      opacity: 1;
    }
  }
  @keyframes move {
    from {
      transform: translateX(0px);
    }
    to {
      transform: translateX(45px);
    }
  }
</style>

<script>
  import { mode } from "./Stores.js";

  function setTo(page) {
    //set color of navbar
    if (page == "home") {
      document.getElementById("home-btn").style.border = "white solid 4px";
    } else {
      document.getElementById("home-btn").style.border = "none";
    }
    if (page == "details") {
      document.getElementById("details-btn").style.border = "white solid 4px";
    } else {
      document.getElementById("details-btn").style.border = "none";
    }
    if (page == "contact") {
      document.getElementById("contact-btn").style.border = "white solid 4px";
    } else {
      document.getElementById("contact-btn").style.border = "none";
    }
    if (page == "donate") {
      document.getElementById("donate-btn").style.border = "white solid 4px";
    } else {
      document.getElementById("donate-btn").style.border = "none";
    }
    if (page == "subscribe") {
      document.getElementById("subscribe-btn").style.border = "white solid 4px";
    } else {
      document.getElementById("subscribe-btn").style.border = "none";
    }
    if (page == "donate" || page == "subscribe") {
      document.getElementById("main").style.backgroundColor = "var(--title-color-gray)";
    } else {
      document.getElementById("main").style.backgroundColor = "transparent";
    }

    //set mode
    document.getElementById("checkbox").checked = false;
    $mode = page;
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    
  }
</script>

<main id="main">
  <nav>
    <div class="navbar">
      <div class="container nav-container">
        <input class="checkbox" type="checkbox" name="" id="checkbox" />
        <div class="hamburger-lines">
          <span class="line line1" />
          <span class="line line2" />
          <span class="line line3" />
        </div>
        <div class="menu-items">
          <ul>
            <li>
              <img src="img/White-Logo.png" alt="logo" width="100" />
            </li>
            <li>
              <button id="home-btn" on:click={() => setTo("home")}
                >หน้าหลัก</button
              >
            </li>
            <li>
              <button id="details-btn" on:click={() => setTo("details")}
                >รายละเอียด</button
              >
            </li>
            <li>
              <button id="contact-btn" on:click={() => setTo("contact")}
                >ทีมของเรา</button
              >
            </li>
            <li>
              <button id="donate-btn" on:click={() => setTo("donate")}
                >สนับสนุน</button
              >
            </li>
            <li>
              <button id="subscribe-btn" on:click={() => setTo("subscribe")}
                >ติดตามข่าวสาร</button
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</main>

<style>

  main {
    background-color: transparent;
  }
  nav {
    background-color: var(--primary-color-blue);
    overflow-x: unset;
    box-shadow: 20px 20px 20px rgba(0, 0, 0, 0.2);
    border-bottom-right-radius: 20px;
    border-bottom-left-radius: 20px;
  }

  img {
    padding: 10px;
  }

  .container {
    width: 100vw;
    margin: auto;
  }

  ul {
    padding: 0;
  }

  .nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    width: 100vw;
  }

  .navbar .menu-items {
    display: flex;
  }

  .navbar .nav-container li {
    list-style: none;
  }

  .navbar .nav-container button {
    text-decoration: none;
    color: white;
    font-weight: 500;
    font-size: 1.2rem;
    padding: 0.3rem;
  }

  .navbar .nav-container button:hover {
    font-weight: bolder;
    color: var(--secondary-color-orange);
    transition: 0.1s;
    cursor: pointer;
  }

  button {
    background-color: transparent;
    border: none;
    border-radius: 20px;
    margin: 10px;
  }

  #home-btn {
    border: white solid 4px;
  }

  .nav-container {
    display: block;
    position: relative;
    height: 60px;
  }

  .nav-container .checkbox {
    position: absolute;
    display: block;
    height: 32px;
    width: 32px;
    top: 20px;
    left: 40px;
    z-index: 5;
    opacity: 0;
    cursor: pointer;
  }

  .nav-container .hamburger-lines {
    display: block;
    height: 26px;
    width: 32px;
    position: absolute;
    top: 7px;
    left: 20px;
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px 20px 10px 20px;
  }

  .nav-container .hamburger-lines .line {
    display: block;
    height: 4px;
    width: 100%;
    border-radius: 10px;
    background: white;
  }

  .nav-container .hamburger-lines .line1 {
    transform-origin: 0% 0%;
    transition: transform 0.4s ease-in-out;
  }

  .nav-container .hamburger-lines .line2 {
    transition: transform 0.2s ease-in-out;
  }

  .nav-container .hamburger-lines .line3 {
    transform-origin: 0% 100%;
    transition: transform 0.4s ease-in-out;
  }

  .navbar .menu-items {
    padding-top: 120px;
    display: block;
    background-color: var(--primary-color-blue);
    height: 100vh;
    width: 100vw;
    transform: translate(-150%);
    display: flex;
    flex-direction: column;
    transition: transform 0.5s ease-in-out;
    text-align: center;
  }

  .navbar .menu-items li {
    margin-bottom: 1.2rem;
    font-size: 1.5rem;
    font-weight: 500;
  }

  .nav-container input[type="checkbox"]:checked ~ .menu-items {
    transform: translateX(0);
  }

  .nav-container input[type="checkbox"]:checked ~ .hamburger-lines .line1 {
    transform: rotate(45deg);
  }

  .nav-container input[type="checkbox"]:checked ~ .hamburger-lines .line2 {
    transform: scaleY(0);
  }

  .nav-container input[type="checkbox"]:checked ~ .hamburger-lines .line3 {
    transform: rotate(-45deg);
  }

  @media only screen and (min-width: 767px) {
    ul {
      display: flex;
      padding-left: 50px;
    }

    .nav-container {
      height: 90px;
    }
    
    .navbar .menu-items {
      padding: 0px;
      background-color: var(--primary-color-blue);
      height: 0%;
      width: 100vw;
      display: flex;
      flex-direction: row;
      text-align: center;
    }
    .nav-container .hamburger-lines {
      display: none;
    }
    .navbar .menu-items {
      transform: none;
      transition: none;
    }
    #checkbox {
      display: none;
    }
  }
</style>

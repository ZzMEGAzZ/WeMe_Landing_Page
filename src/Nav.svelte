<script>
    import { onMount } from "svelte";
    import { mode } from "./Stores.js";
  
    // Show mobile icon and display menu
    let showMobileMenu = false;
  
    // Mobile menu click event handler
    const handleMobileIconClick = () => (showMobileMenu = !showMobileMenu);
  
    // Media match query handler
    const mediaQueryHandler = e => {
      // Reset mobile state
      if (!e.matches) {
        showMobileMenu = false;
      }
    };
  
    // Attach media query listener on mount hook
    onMount(() => {
      const mediaListener = window.matchMedia("(max-width: 767px)");
  
      mediaListener.addListener(mediaQueryHandler);
    });


  function setTo(page) {
    //set color of navbar
    if (page == "home") {
      document.getElementById("home-btn").style.color = "#EF8E44";
    } else {
      document.getElementById("home-btn").style.color = "#FFFFFF";
    }
    if (page == "details") {
      document.getElementById("details-btn").style.color = "#EF8E44";
    } else {
      document.getElementById("details-btn").style.color = "#FFFFFF";
    }
    if (page == "contact") {
      document.getElementById("contact-btn").style.color = "#EF8E44";
    } else {
      document.getElementById("contact-btn").style.color = "#FFFFFF";
    }
    if (page == "donate") {
      document.getElementById("donate-btn").style.color = "#EF8E44";
    } else {
      document.getElementById("donate-btn").style.color = "#FFFFFF";
    }

    //set mode
    $mode = page
    showMobileMenu = false;
    }
  </script>
  
  <nav>
    <div class="inner">
      <div on:click={handleMobileIconClick} class={`mobile-icon${showMobileMenu ? ' active' : ''}`}>
        <div class="middle-line"></div>
      </div>
      <ul class={`navbar-list${showMobileMenu ? ' mobile' : ''}`}>
        <li>
					<img src="img/Logo.png" alt="logo" width="100" />
				</li>
				<li>
					<button id="home-btn" on:click={() => setTo("home")}>หน้าหลัก</button>
				</li>
				<li>
					<button id="details-btn" on:click={() => setTo("details")}>รายละเอียด</button>
				</li>
				<li>
					<button id="contact-btn" on:click={() => setTo("contact")}>ติดต่อเรา</button>
				</li>
				<li>
					<button id="donate-btn" on:click={() => setTo("donate")}>สนับสนุน</button>
				</li>
        <li>
					<button id="donate-btn" on:click={() => setTo("subscribe")}>ติดตามข่าวสาร</button>
				</li>
      </ul>
    </div>
  </nav>
  
  <style>
    nav {
      background-color: rgba(0, 0, 0);
      font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif;
      height: 60px;
    }
  
    .inner {
      max-width: 980px;
      padding-left: 20px;
      padding-right: 20px;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      height: 100%;
    }
  
    .mobile-icon {
      width: 25px;
      height: 14px;
      position: relative;
      cursor: pointer;
    }
  
    .mobile-icon:after,
    .mobile-icon:before,
    .middle-line {
      content: "";
      position: absolute;
      width: 100%;
      height: 2px;
      background-color: #fff;
      transition: all 0.4s;
      transform-origin: center;
    }
  
    .mobile-icon:before,
    .middle-line {
      top: 0;
    }
  
    .mobile-icon:after,
    .middle-line {
      bottom: 0;
    }
  
    .mobile-icon:before {
      width: 66%;
    }
  
    .mobile-icon:after {
      width: 33%;
    }
  
    .middle-line {
      margin: auto;
    }
  
    .mobile-icon:hover:before,
    .mobile-icon:hover:after,
    .mobile-icon.active:before,
    .mobile-icon.active:after,
    .mobile-icon.active .middle-line {
      width: 100%;
    }
  
    .mobile-icon.active:before,
    .mobile-icon.active:after {
      top: 50%;
      transform: rotate(-45deg);
    }
  
    .mobile-icon.active .middle-line {
      transform: rotate(45deg);
    }
  
    .navbar-list {
      display: none;
      width: 100%;
      justify-content: space-between;
      margin: 0;
      padding: 0 40px;
    }
  
    .navbar-list.mobile {
      background-color: rgba(0, 0, 0);
      position: fixed;
      display: block;
      height: calc(100% - 45px);
      bottom: 0;
      left: 0;
    }
  
    .navbar-list li {
      list-style-type: none;
      position: relative;
    }
  
    .navbar-list li:before {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 1px;
      background-color: #424245;
    }
  
    .navbar-list button {
      color: #fff;
      background-color: transparent;
      border: none;
      text-decoration: none;
      display: flex;
      height: 45px;
      align-items: center;
      padding: 0 10px;
      font-size: 13px;
    }

    #home-btn {
      color: #EF8E44;
    }
  
    @media only screen and (min-width: 767px) {
      .mobile-icon {
        display: none;
      }
  
      .navbar-list {
        display: flex;
        padding: 0;
      }
  
      .navbar-list button {
        display: inline-flex;
      }
    }
  </style>
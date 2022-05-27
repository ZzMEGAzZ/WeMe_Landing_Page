<script>
	//import app element
	import Home from "./Home.svelte";
	import Details from "./Details.svelte";
	import Contact from "./Contact.svelte";
	import Donate from "./Donate.svelte";

	// Import the functions you need from the SDKs you need
	import { initializeApp } from "firebase/app";
	import { getAnalytics } from "firebase/analytics";
	// TODO: Add SDKs for Firebase products that you want to use
	// https://firebase.google.com/docs/web/setup#available-libraries

	// Your web app's Firebase configuration
	// For Firebase JS SDK v7.20.0 and later, measurementId is optional
	const firebaseConfig = {
	apiKey: "AIzaSyDET893Ktp7yVTng8YLtMfiEGYTJmC5bkQ",
	authDomain: "weme-application.firebaseapp.com",
	projectId: "weme-application",
	storageBucket: "weme-application.appspot.com",
	messagingSenderId: "612017618545",
	appId: "1:612017618545:web:cbdb0720480239a9fc25d0",
	measurementId: "G-4YK2KKYY8G"
	};

	// Initialize Firebase
	const app = initializeApp(firebaseConfig);
	const analytics = getAnalytics(app);

	//define routes
	let mode = "home";

	function setTo(page) {
		//set color of navbar
		if (page == "home") {
			document.getElementById("home").style.color = "#EF8E44";
		} else {
			document.getElementById("home").style.color = "#FFFFFF";
		}
		if (page == "details") {
			document.getElementById("details").style.color = "#EF8E44";
		} else {
			document.getElementById("details").style.color = "#FFFFFF";
		}
		if (page == "contact") {
			document.getElementById("contact").style.color = "#EF8E44";
		} else {
			document.getElementById("contact").style.color = "#FFFFFF";
		}
		if (page == "donate") {
			document.getElementById("donate").style.color = "#EF8E44";
		} else {
			document.getElementById("donate").style.color = "#FFFFFF";
		}

		//set mode
		mode = page;
	}


</script>

<main>
	<!--Nav Bar-->
	<div class="sticky">
		<nav>
			<ul>
				<li>
					<img src="img/Logo.png" alt="logo" width="100"/>
				</li>
				<li>
					<button id="home" on:click={() => setTo("home")}>หน้าหลัก</button>
				</li>
				<li>
					<button id="details" on:click={() => setTo("details")}>รายละเอียด</button>
				</li>
				<li>
					<button id="contact" on:click={() => setTo("contact")}>ติดต่อเรา</button>
				</li>
				<li>
					<button id="donate" on:click={() => setTo("donate")}>สนับสนุน</button>
				</li>
			</ul>
		</nav>
	</div>

	<!--set page mode-->
	{#if mode == "home"}
		<Home />
		<Home />
	{:else if mode == "details"}
		<Details />
	{:else if mode == "contact"}
		<Contact />
	{:else if mode == "donate"}
		<Donate />
	{/if}

</main>

<style>

	:global(body) {
		margin: 0;
		padding: 0;
		font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
			Helvetica, sans-serif;
	}

	nav {
		background: #444444;
		border-bottom: 1px solid #ddd;
		box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
		padding: 0.5em;
		padding-left: 1em;

	}

	nav ul {
		list-style: none;
		margin: 0;
		padding: 0;

		width: 600px;

		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	nav ul li {
		display: inline-block;
		margin: 0;
		padding: 0;
	}

	nav ul li button {
		display: block;
		padding: 0.5em;
		background-color: transparent;
		border: none;
		text-decoration: none;
		color: white;
		font-size: 1em;
		font-weight: bold;
		cursor: pointer;
	}

	nav ul li button#home {
		color: #EF8E44;
	}

	nav ul li button:hover {
		color: #68BDE1;
	}

	.sticky {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 100;
  }
</style>
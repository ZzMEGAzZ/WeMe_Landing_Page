<script>
	//import app element
	import Home_1 from "./Home_1.svelte";
	import Home_2 from "./Home_2.svelte";
	import Details from "./Details.svelte";
	import Contact from "./Contact.svelte";
	import Donate from "./Donate.svelte";
	import Loading from "./Loading.svelte";

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
		measurementId: "G-4YK2KKYY8G",
	};

	// Initialize Firebase
	const app = initializeApp(firebaseConfig);
	const analytics = getAnalytics(app);

	//define routes
	let mode = "home";

	async function setTo(page) {

		if (mode != page) {
			document.getElementById(mode).style.display = "none";
			document.getElementById("loading").style.display = "block"
			setTimeout(function(){document.getElementById("loading").style.display = "none"},1000);
		};
	
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
		setTimeout(function(){mode = page},1000);
	}
	
</script>

<main>
	<!--Nav Bar-->
	<div class="sticky">
		<nav id="nav">
			<ul>
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
			</ul>
		</nav>
	</div>
	
	<div id="loading"><Loading /></div>
	
	<!--set page mode-->
	{#if mode == "home"}
		<div id="home">
			<Home_1 />
			<Home_2 />
		</div>
	{:else if mode == "details"}
		<div id="details">
			<Details />
		</div>
	{:else if mode == "contact"}
		<div id="contact">
			<Contact />
		</div>
	{:else if mode == "donate"}
		<div id="donate">
			<Donate />
		</div>
	{/if}
</main>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Mitr&family=Righteous&display=swap');
	:global(body) {
		margin: 0;
		padding: 0;
		font-family: 'Mitr', sans-serif;
	}

	nav {
		background: #b38268;
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

	nav ul li button:hover {
		color: #68bde1;
	}

	nav ul li button#home-btn {
		color: #ef8e44;
	}

	.sticky {
		position: sticky;
		top: 0;
		z-index: 100;
	}
	#loading {
		display: none;
	}
</style>

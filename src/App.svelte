<script>
	//import app element
	import { mode } from "./Stores.js";
	import Animate from "./Animate.svelte";
	import Home_1 from "./Home_1.svelte";
	import Home_2 from "./Home_2.svelte";
	import Nav from "./Nav.svelte";
	import Details from "./Details.svelte";
	import ExecutiveTeam from "./ExecutiveTeam.svelte";
	import Contact from "./Contact.svelte";
	import Donate from "./Donate.svelte";
	import Subscribe from "./Subscribe.svelte";

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

	// Set mode
	$mode = "home";
</script>

<main>
	<!--Nav Bar sticky-->
	<div class="sticky">
		<Nav />
	</div>
	<!--Nav Bar sticky-->

	<!--set page mode-->
	{#if $mode == "home"}
		<div id="home">
			<Home_1 />
			<Home_2 />
			<Subscribe />
		</div>
	{:else if $mode == "details"}
		<div id="details">
			<Details />
		</div>
	{:else if $mode == "contact"}
		<div id="contact">
			<ExecutiveTeam />
		</div>
	{:else if $mode == "donate"}
		<div id="donate">
			<Donate />
			<Subscribe />
		</div>
	{:else if $mode == "subscribe"}
		<div id="subscribe">
			<Subscribe />
			<Contact />
		</div>
	{/if}
	<!--set page mode-->
</main>

<style>
	@import url("https://fonts.googleapis.com/css2?family=Mitr&family=Righteous&display=swap");

	:root {
		--primary-color-orange: #ff8022;
		--primary-color-blue: #2bbfff;
		--primary-color-gray: #dfdfdf;

		--secondary-color-orange: #ffb67f;
		--secondary-color-blue: #7ed8ff;

		--content-color-orange: #ff6f00;
		--content-color-blue: #00b3ff;
		--content-color-gray: #7f7f7f;
		
		--title-color-gray: #4e4e4e;
	}
	:global(body) {
		overflow-x: hidden;
		margin: 0;
		padding: 0;
		font-family: "Mitr", sans-serif;
		width: 100vw;
	}
	.sticky {
		position: sticky;
		top: 0;
		z-index: 100;
	}

	/* Hide scrollbar for Chrome, Safari and Opera */
	:global(body)::-webkit-scrollbar {
		display: none;
	}

	/* Hide scrollbar for IE, Edge and Firefox */
	:global(body) {
		-ms-overflow-style: none; /* IE and Edge */
		scrollbar-width: none; /* Firefox */
	}
</style>

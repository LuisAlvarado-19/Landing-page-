import React from "react";
import { Navbar } from "./Navbar";
import { Jumbotron } from "./Jumbotron";
import { Cards } from "./Cards";
import { Footer } from "./Footer";
//create your first component
export function Home() {
	return (
		<div className="">
			<Navbar />
			<Jumbotron />
			<Cards />
			<Footer />
		</div>
	);
}

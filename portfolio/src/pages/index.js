import Head from "next/head"

// COMPONENTS
import Navbar from "@/components/Navbar"
import Home from "@/components/Home"
import Projects from "@/components/Projects"
import Certifications from "@/components/Certifications"
import Contact from "@/components/Contact"

export default function Index() {
	return <>
		<Head>
			<link rel="icon" href="/favicon.ico" />
			<title>Portfolio - Armaghan</title>
		</Head>
		<Navbar />
		<Home />
		<Projects />
		<Certifications />
		<Contact />
	</>
}
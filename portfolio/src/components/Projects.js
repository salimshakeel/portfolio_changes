import data from "../data/projects"
import Image from "next/image";

function Projects() {
	return (
		<section id="projects" className="project">
			<div className="container">
				<div className="project-content">
					<p>portfolio</p>
					<h3 className="font-bold">Each project is a unique piece of development 🧩</h3>
					<div className="projects-grid">

						{data.map((project, i) => {
							return (
								<div className={`border border-gray-300 lg:flex-row ${(i % 2 == 0) ? "lg:flex-row" : "lg:flex-row-reverse"} space-y-2 lg:space-y-0 flex-col shadow-2xl rounded-3xl flex justify-evenly py-10 items-center ${(i % 0 == 0) ? "reversed-proj" : ""}`} key={i}>
									<video
										className="rounded-xl px-10"
										autoPlay
										muted
										loop
										playsInline
										style={{ height: '40rem', width: 'auto' }}
									>
										<source src={project.src} type="video/mp4" />
										Your browser does not support the video tag.
									</video>
									<div className="pro__text space-y-5">
										<h3 className="font-bold">{project.name}</h3>
										<p>{project.description}</p>
										<div className="text-xl flex flex-row flex-wrap justify-center items-center">
											{project.techs.map((tech, j) => {
												return <span className="border m-1 bg-gray-100 p-1 rounded shadow-3xl" key={j}>{tech}</span>
											})}
										</div>
										<div className="flex flex-row flex-wrap justify-center items-center">
											{project.tools.map((tool, i) => {
												return <Image
													className="relative m-2"
													src={tool.icon}
													alt={tool.name}
													width={30}
													height={30}
													style={{ width: "auto" }}
													key={i}
												/>
											})}
										</div>
										<div className="text-2xl flex flex-row flex-wrap justify-evenly items-center">
											{project.links.map((link, i) => {
												return <a href={link.link} target="_blank" className="m-3 space-x-3 flex flex-row justify-center items-center" key={i}>
													<span>{link.name}</span>
													<Image className="relative" src={link.icon} width={16} height={16} style={{ width: "auto" }} alt={link.name} />
												</a>
											})}

										</div>
									</div>
								</div>
							)
						})}


						{/* <ProBox
                title="Car Rental"
                // img={CarRental}
                description="A car rental website is an online platform that allows users to rent cars for personal or business use. The website provides an interface for searching, comparing, and reserving cars."
                techno1="React"
                techno2="SCSS"
                code="https://github.com/stefvndev/car-rental"
                demo="https://car-rental-ten.vercel.app/"
                scrollY="-83%"
                icon="🚗"
              />

              <ProBox
                title="coindom"
                // img={CoinDom}
                description="Coindom is a crypto app that allows users to search for information about various cryptocurrencies in real-time."
                techno1="React"
                techno2="SCSS"
                code="https://github.com/stefvndev/coindom-crypto"
                demo="https://coindom-crypto-search.vercel.app/"
                scrollY="-74%"
                icon="🪙"
                cName="reversed-proj"
              />

              <ProBox
                title="gymate"
                // img={Gymate}
                description="A gym website is a comprehensive resource for fitness information, class schedules, membership options, and tools to help users achieve their fitness goals."
                techno1="React"
                techno2="Tailwind CSS"
                code="https://github.com/stefvndev/Gymate"
                demo="https://gymate-iota.vercel.app/"
                scrollY="-89%"
                icon="🏋️"
              />

              <ProBox
                title="Raouf Ecommerce"
                // img={Raouf}
                description="With a focus on simplicity and clean design, this store prioritize user experience, making it easy for customers to find and purchase the products they need."
                techno1="React"
                techno2="Vanila CSS"
                code="https://github.com/stefvndev/Minimalist-E-commerce"
                demo="https://minimalist-e-commerce.vercel.app/"
                scrollY="-71%"
                icon="🛒"
                cName="reversed-proj"
              /> */}



					</div>
				</div>
			</div>
		</section>
	);
}

export default Projects;

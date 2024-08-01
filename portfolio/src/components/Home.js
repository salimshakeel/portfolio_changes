import data from "../data/home"
import Image from "next/image";

function Home() {
	return (
		<>
			<section id="home" className="pt-[15rem]">
				<div className="mb-10 hero-main">
					<div className="hero-text text-center">
						<h1 className="font-bold">{data.information.title}</h1>
						<p>{data.information.description}</p>
						<div className="flex space-x-3 py-6 mb-10 justify-center">
							{data.contacts.map((contact, i) => {
								return (<a
									aria-label="linkedin"
									rel="noreferrer"
									target="_blank"
									href={contact.profile}
									key={i}
									title={contact.name}
									className="cursor-pointer"
								>
									<Image src={contact.icon} width={30} height={30} alt={contact.name} />
								</a>)
							})}
						</div>
					</div>
					<div className="hero-img"></div>
				</div>
				<div className="skills w-[80vw] mx-auto my-[10rem]">
					<p>Tech Stack</p>
					<ul>
						{data.tools.map((tool, i) => {
							return <li title={tool.name} key={i}>
								<Image placeholder="fdfasd" src={tool.icon} width={100} height={100} style={{ width: "auto" }} alt={tool.name}></Image>
							</li>
						})}
					</ul>
				</div>
			</section>
			<div className="text-center w-[80vw] lg:w-[60vw] mx-auto py-16 space-y-10">
				<h3 className="text-4xl font-bold text-blue-500">{data.information.about_title}</h3>
				<p className="text-gray-600 text-3xl font-thin" style={{ fontFamily: 'sans-serif' }}>{data.information.about_description}</p>
			</div>
		</>
	);
}

export default Home;

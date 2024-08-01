import data from "../data/contact"
import Image from "next/image";

function Contact() {
	return (
		<section id="contact" className="contact">
			<div className="container">
				<div className="contact__content">
					<div className="contact__title mb-16">
						<p>contact</p>
						<h3>Don't be shy! Hit me up! 👇</h3>
					</div>
					<div className="flex flex-row flex-wrap justify-evenly">
						{data.formal.concat(data.informal).map((item, i)=>{
							return <a key={i} target="_blank" href={item.profile} className="w-1/3 md:w-1/4 flex flex-row justify-center items-center py-10 m-2 space-x-10">
								<Image
									src={item.icon}
									width={50}
									height={50}
									alt={item.name}
									style={{width: "auto"}}
								/>
								<div className="">
									<h3 className="text-3xl">{item.name}</h3>
									<p className="text-xl">{item.line}</p>
								</div>
							</a>
						})}
					</div>
				</div>
			</div>
		</section>
	);
}

export default Contact;

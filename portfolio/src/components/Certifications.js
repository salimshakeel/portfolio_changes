import Image from "next/image"
import data from "../data/certifications"

export default function Certifications() {

	return (
		<section id='certifications' className="py-10 my-10">
			{data.map((item, i) => {
				return <div key={i}>
					<h1 className="mt-16 mb-2 text-center text-4xl text-slate-900 font-bold py-10">{item.title}</h1>
					<div className={`
						mx-auto w-[90vw]
						grid grid-cols-2 lg:grid-cols-3 gap-4
					`}>{item.certs.map((cert, i) => {
						return <a
							href={cert.link}
							target="_blank"
							key={i}
							className={`
								space-x-5 px-5 py-3
								border border-gray-300 rounded-xl
								flex justify-start items-center
							`}
						>
							<Image
								src={cert.icon}
								width={30}
								height={30}
								style={{ width: "auto" }}
								alt={cert.name}
							/>
							<div>
								<h1 className="font-bold text-2xl">{cert.name}</h1>
								<p className="text-xl">{cert.organization}</p>
							</div>

						</a>
					})}</div>
				</div>
			})}
		</section>
	)
}

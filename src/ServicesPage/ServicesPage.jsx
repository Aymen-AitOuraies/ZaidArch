import { useEffect } from "react";
import serviceImage1 from "/assets/images/ServicesPage/1.png";
import serviceImage2 from "/assets/images/ServicesPage/2.png";
import serviceImage3 from "/assets/images/ServicesPage/3.png";
import serviceImage4 from "/assets/images/ServicesPage/4.png";
import ImageWithLoader from "../components/ImageWithLoader";
import "./ServicesPage.css";

const services = [
	{
		image: serviceImage1,
		title: "Architecture",
		description: "Conception architecturale unique, alliant modernité et tradition locale.",
	},
	{
		image: serviceImage2,
		title: "Design intérieur",
		description: "Aménagements intérieurs raffinés, personnalisés pour votre confort.",
	},
	{
		image: serviceImage3,
		title: "Design Accompagnement de Projet Professionnel",
		description: "Suivi et coordination experts à chaque étape de votre projet.",
	},
	{
		image: serviceImage4,
		title: "Urbanisme",
		description: "Conception d’espaces urbains fonctionnels, durables et agréables à vivre.",
	},
];

export default function ServicesPage() {
	useEffect(() => {
		const cards = document.querySelectorAll("#services [data-service-card]");

		if (!("IntersectionObserver" in window)) {
			cards.forEach((card) => card.classList.add("is-visible"));
			return;
		}

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (!entry.isIntersecting) {
						return;
					}

					entry.target.classList.add("is-visible");
					observer.unobserve(entry.target);
				});
			},
			{ threshold: 0.25, rootMargin: "0px 0px -8% 0px" }
		);

		cards.forEach((card) => observer.observe(card));

		return () => observer.disconnect();
	}, []);

	return (
		<section
			id="services"
			className="scroll-mt-32 bg-neutral-backgroundAlt px-6 py-20 sm:px-10 lg:px-16 lg:py-24"
		>
			<div className="mx-auto w-full max-w-6xl">
				<div className="mb-10 flex items-center gap-2 font-heading text-sm font-bold tracking-[0.2em] text-primary-default sm:text-base">
					<span className="h-2 w-2 rounded-full bg-primary-default" aria-hidden="true"></span>
					<span>NOS SERVICES</span>
				</div>

				<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
					{services.map((service, index) => (
						<article
							key={service.title}
							data-service-card
							className="service-card group overflow-hidden rounded-3xl bg-neutral-backgroundAlt shadow-[0_14px_30px_rgba(26,36,44,0.2)]"
							style={{ "--card-delay": `${index * 120}ms` }}
						>
							<ImageWithLoader
								src={service.image}
								alt={service.title}
								className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-56"
							/>
							<div className="p-5 sm:p-6">
								<h3 className="font-heading text-2xl font-semibold text-neutral-text">{service.title}</h3>
								<p className="mt-2 text-sm leading-relaxed text-neutral-text/85 sm:text-base">
									{service.description}
								</p>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}

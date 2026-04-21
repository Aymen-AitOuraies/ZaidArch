import moroccoImage from "../assets/images/AgencyPage/morocco.png";
import compassImage from "../assets/images/AgencyPage/compass.png";
import architectureImage from "../assets/images/AgencyPage/agency.webp";
import creativiteIcon from "../assets/images/AgencyPage/icons/creativite.png";
import ecouteIcon from "../assets/images/AgencyPage/icons/l'ecoute.png";
import riguerIcon from "../assets/images/AgencyPage/icons/riguer.png";
import { useState } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import useScrollReveal from "../hooks/useScrollReveal";
import ImageWithLoader from "../components/ImageWithLoader";
import "../animations/scrollReveal.css";
import "./AgencyPage.css";

export default function AgencyPage() {
	const [showPptAgencyContent, setShowPptAgencyContent] = useState(false);
	const [slideDirection, setSlideDirection] = useState("rtl");

	const handleToggleContent = () => {
		setSlideDirection(showPptAgencyContent ? "ltr" : "rtl");
		setShowPptAgencyContent((prev) => !prev);
	};

	useScrollReveal("agency");

	return (
		<section id="agency" className="scroll-mt-32 bg-neutral-background px-6 py-20 sm:px-10 lg:px-16 lg:py-24">
			<div className="mx-auto flex w-full max-w-6xl flex-col items-start text-left">
				<div
					data-reveal
					className="reveal-on-scroll mb-4 flex items-center font-heading gap-2 text-sm font-bold tracking-[0.2em] text-primary-default sm:text-base"
				>
					<span className="h-2 w-2 rounded-full bg-primary-default" aria-hidden="true"></span>
					<span>Zaid ARCHITECTURE</span>
				</div>

				<div className="mb-6 flex w-full justify-end">
					<button
						type="button"
						onClick={handleToggleContent}
						aria-label={showPptAgencyContent ? "Revenir au contenu actuel" : "Afficher le contenu du dernier slide"}
						className="flex items-center gap-2 rounded-full bg-primary-default px-3 py-2 text-sm font-semibold text-neutral-background transition-transform duration-200 hover:scale-105 sm:px-4 sm:text-base"
					>
						<span>Présentation de l’agence</span>
						<ArrowForwardIcon className={`transition-transform duration-300 ${showPptAgencyContent ? "rotate-180" : "rotate-0"}`} fontSize="small" />
					</button>
				</div>

				<div
					key={showPptAgencyContent ? "ppt-content" : "default-content"}
					className={`${slideDirection === "rtl" ? "agency-slide-rtl" : "agency-slide-ltr"} w-full`}
				>
					{showPptAgencyContent ? (
					<div className="w-full max-w-5xl space-y-6 text-neutral-text">
						<h2 className="font-heading text-3xl font-semibold leading-tight text-primary-default sm:text-4xl lg:text-5xl">
							Présentation de l’agence
						</h2>

						<p className="text-base leading-relaxed sm:text-lg">
							ZAID ARCHITECTURE est une agence d’architecture fondée par Fayçal Zaid. Diplômé de l’École nationale supérieure d’architecture de
							 Paris-La Villette, il choisit, à l’issue de ses études, de revenir s’installer dans son pays natal, le Maroc. Il débute alors sa
							 carrière au sein de l’administration de la ville de Casablanca, à une période marquée par un fort développement urbain, qui lui
							 permet d’acquérir une compréhension fine des dynamiques territoriales et des enjeux de la métropole.
						</p>

						<p className="text-base leading-relaxed sm:text-lg">
							En 1985, il fonde sa propre agence à Casablanca, installée au dixième et dernier étage d’un immeuble situé au 46 boulevard Rahal
							 El Meskini, au cœur de la ville blanche. Depuis, ZAID ARCHITECTURE développe une pratique ancrée dans la diversité des programmes
							 et des échelles : immeubles de logements, bureaux, équipements publics (notamment dans les secteurs de la santé et de la
							 formation), villas privées, ainsi que projets urbains d’envergure.
						</p>

						<p className="text-base leading-relaxed sm:text-lg">
							Au fil des années, l’agence a su construire une expertise solide et une connaissance approfondie du contexte marocain, lui
							 permettant d’apporter des réponses adaptées aux réalités locales, aux contraintes réglementaires et aux ambitions de développement
							 des territoires.
						</p>

						<h3 className="font-heading text-2xl font-semibold text-neutral-text sm:text-3xl">Expertise</h3>

						<p className="text-base leading-relaxed sm:text-lg">
							ZAID ARCHITECTURE intervient sur un large spectre de missions, allant de la conception stratégique à la réalisation opérationnelle.
							 L’agence accompagne notamment les collectivités dans l’élaboration de plans d’aménagement, comme à Benguerir, et dispose d’une
							 expertise reconnue dans la conception d’établissements de santé, publics (Centre hospitalier régional Al Farabi d’Oujda, Hôpital
							 Mohammed VI de Aroui) comme privés (Clinique Al Hayat à Casablanca, clinique MGEN de Rabat).
						</p>

						<p className="text-base leading-relaxed sm:text-lg">
							Elle assiste également les opérateurs immobiliers tout au long du cycle de vie des projets, de l’étude de faisabilité jusqu’à la
							 livraison, avec à son actif une centaine d’immeubles de logements réalisés à travers le Maroc. Par ailleurs, l’agence conçoit et
							 développe des projets de villas, tant pour des promoteurs que pour des particuliers, ainsi que des équipements scolaires.
						</p>

						<p className="text-base leading-relaxed sm:text-lg">
							Depuis les années 1980, ZAID ARCHITECTURE contribue activement au développement urbain des villes marocaines, en conjuguant rigueur
							 architecturale, compréhension du territoire et engagement durable au service des usagers.
						</p>
					</div>
				) : (

					<>
						<h2
							data-reveal
							className="reveal-on-scroll is-visible max-w-4xl font-heading text-3xl font-semibold leading-tight text-neutral-text sm:text-4xl lg:text-5xl"
							style={{ "--reveal-delay": "100ms" }}
						>
							Fond&eacute; &agrave; Casablanca,<br className="hidden sm:block" /> intervient partout au Maroc.
						</h2>

						<div
							data-reveal
							className="reveal-on-scroll is-visible mt-20 flex w-full max-w-6xl flex-col items-center gap-10 lg:flex-row lg:items-end lg:justify-between lg:gap-12"
							style={{ "--reveal-delay": "220ms" }}
						>
							<div className="flex items-end gap-2 sm:gap-4">
								<ImageWithLoader
									src={moroccoImage}
									alt="Carte du Maroc"
									className="h-full w-auto"
									wrapperClassName="h-48 sm:h-56 lg:h-64"
								/>
								<ImageWithLoader
									src={compassImage}
									alt="Boussole"
									className="h-full w-auto translate-y-2"
									wrapperClassName="h-16 sm:h-20 lg:h-24"
								/>
							</div>

							<ul className="max-w-2xl space-y-2 text-left text-lg font-medium leading-snug text-neutral-text sm:text-xl lg:ml-auto lg:max-w-136 lg:pl-4">
								<li className="flex items-start gap-3">
									<span className="mt-2.5 h-2 w-2 rounded-full bg-neutral-text shrink-0" aria-hidden="true"></span>
									<span>Plus de 35 ans d&rsquo;exp&eacute;rience combin&eacute;s avec le regard neuf d&rsquo;un nouvel associ&eacute;.</span>
								</li>
								<li className="flex items-start gap-3">
									<span className="mt-2.5 h-2 w-2 rounded-full bg-neutral-text shrink-0" aria-hidden="true"></span>
									<span>Parfaite connaissance du contexte marocain.</span>
								</li>
								<li className="flex items-start gap-3">
									<span className="mt-2.5 h-2 w-2 rounded-full bg-neutral-text shrink-0" aria-hidden="true"></span>
									<span>Ma&icirc;trise experte des sujets environnementaux.</span>
								</li>
								<li className="flex items-start gap-3">
									<span className="mt-2.5 h-2 w-2 rounded-full bg-neutral-text shrink-0" aria-hidden="true"></span>
									<span>Vision &agrave; 360&deg; du projet architectural et urbain.</span>
								</li>
								<li className="flex items-start gap-3">
									<span className="mt-2.5 h-2 w-2 rounded-full bg-neutral-text shrink-0" aria-hidden="true"></span>
									<span>Expertise interne sur la fabrique du projet.</span>
								</li>
							</ul>
						</div>

						<div
							data-reveal
							className="reveal-on-scroll is-visible mt-20 flex w-full flex-col gap-10 lg:flex-row lg:items-center lg:justify-between"
							style={{ "--reveal-delay": "320ms" }}
						>
							<div className="w-full max-w-2xl text-left ">
								<div className="mb-4 flex items-center justify-start gap-2 text-sm font-bold font-heading tracking-[0.2em] text-primary-default sm:text-base">
									<span className="h-2 w-2 rounded-full bg-primary-default" aria-hidden="true"></span>
									<span>VALEURS &amp; AVANTAGES</span>
								</div>

								<div className="mt-6 flex flex-wrap justify-start gap-10 sm:gap-20">
									<div className="flex flex-col items-center text-center">
										<img src={riguerIcon} alt="Riguer" className="h-14 w-14 object-contain sm:h-16 sm:w-16" />
										<p className="mt-2 text-sm font-semibold text-neutral-text">RIGUER</p>
									</div>

									<div className="flex flex-col items-center text-center">
										<img src={ecouteIcon} alt="L'ecoute" className="h-14 w-14 object-contain sm:h-16 sm:w-16" />
										<p className="mt-2 text-sm font-semibold text-neutral-text">L'ÉCOUTE</p>
									</div>

									<div className="flex flex-col items-center text-center">
										<img src={creativiteIcon} alt="Creativite" className="h-14 w-14 object-contain sm:h-16 sm:w-16" />
										<p className="mt-2 text-sm font-semibold text-neutral-text">CRÉATIVITÉ</p>
									</div>
								</div>
							</div>

							<div className="w-full max-w-md lg:ml-auto">
								<ImageWithLoader
									src={architectureImage}
									alt="Architecture moderne"
									className="h-56 w-full rounded-3xl object-cover shadow-[0_20px_45px_rgba(46,58,69,0.22)] sm:h-64"
								/>
								<blockquote className="mt-4 text-base italic leading-relaxed text-neutral-text/90 sm:text-lg">
									"Nous concevons des espaces qui racontent votre vision et s&rsquo;inscrivent durablement dans leur environnement."
								</blockquote>
							</div>
						</div>
					</>
				)}
				</div>
			</div>
		</section>
	);
}

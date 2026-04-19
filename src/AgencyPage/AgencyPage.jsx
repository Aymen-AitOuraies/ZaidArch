import moroccoImage from "../assets/images/AgencyPage/morocco.png";
import compassImage from "../assets/images/AgencyPage/compass.png";
import architectureImage from "../assets/images/AgencyPage/agency.webp";
import creativiteIcon from "../assets/images/AgencyPage/icons/creativite.png";
import ecouteIcon from "../assets/images/AgencyPage/icons/l'ecoute.png";
import riguerIcon from "../assets/images/AgencyPage/icons/riguer.png";
import useScrollReveal from "../hooks/useScrollReveal";
import "../animations/scrollReveal.css";

export default function AgencyPage() {
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

				<h2
					data-reveal
					className="reveal-on-scroll max-w-4xl font-heading text-3xl font-semibold leading-tight text-neutral-text sm:text-4xl lg:text-5xl"
					style={{ "--reveal-delay": "100ms" }}
				>
					Fond&eacute; &agrave; Casablanca,<br className="hidden sm:block" /> intervient partout au Maroc.
				</h2>

				<div
					data-reveal
					className="reveal-on-scroll mt-20 flex w-full max-w-6xl flex-col items-center gap-10 lg:flex-row lg:items-end lg:justify-between lg:gap-12"
					style={{ "--reveal-delay": "220ms" }}
				>
					<div className="flex items-end gap-2 sm:gap-4">
						<img
							src={moroccoImage}
							alt="Carte du Maroc"
							className="h-48 w-auto sm:h-56 lg:h-64"
						/>
						<img
							src={compassImage}
							alt="Boussole"
							className="h-16 w-auto translate-y-2 sm:h-20 lg:h-24"
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
					className="reveal-on-scroll mt-20 flex w-full flex-col gap-10 lg:flex-row lg:items-start lg:justify-between"
					style={{ "--reveal-delay": "320ms" }}
				>
					<div className="w-full max-w-2xl text-left">
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
						<img
							src={architectureImage}
							alt="Architecture moderne"
							className="h-56 w-full rounded-3xl object-cover shadow-[0_20px_45px_rgba(46,58,69,0.22)] sm:h-64"
						/>
						<blockquote className="mt-4 text-base italic leading-relaxed text-neutral-text/90 sm:text-lg">
							"Nous concevons des espaces qui racontent votre vision et s&rsquo;inscrivent durablement dans leur environnement."
						</blockquote>
					</div>
				</div>
			</div>
		</section>
	);
}

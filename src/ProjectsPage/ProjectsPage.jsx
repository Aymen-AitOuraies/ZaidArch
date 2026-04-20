import EastIcon from "@mui/icons-material/East";
import projectImageOne from "../assets/images/ProjectsPage/1.png";
import projectImageTwo from "../assets/images/ProjectsPage/2.png";
import projectImageThree from "../assets/images/ProjectsPage/3.png";
import useScrollReveal from "../hooks/useScrollReveal";
import ImageWithLoader from "../components/ImageWithLoader";
import "../animations/scrollReveal.css";

export default function ProjectsPage() {
	useScrollReveal("projects");

	return (
		<section id="projects" className="scroll-mt-32 bg-primary-soft px-6 py-10 pb-14 sm:px-10 sm:py-12 sm:pb-16 lg:px-16 lg:py-14 lg:pb-20">
			<section className="mx-auto flex w-full max-w-6xl flex-col items-center gap-4 text-center">
				<h1
					data-reveal
					className="reveal-on-scroll max-w-4xl font-heading text-3xl font-semibold leading-tight text-neutral-text sm:text-4xl lg:text-5xl"
				>
					L&rsquo;architecture qui transforme votre vision en r&eacute;alit&eacute;
				</h1>

				<p
					data-reveal
					className="reveal-on-scroll max-w-2xl text-base leading-relaxed text-neutral-text/80 sm:text-lg"
					style={{ "--reveal-delay": "120ms" }}
				>
					Explorez nos projets o&ugrave; cr&eacute;ativit&eacute;, pr&eacute;cision et excellence<br className="hidden sm:block" /> architecturale se combinent.
				</p>

				<button
					type="button"
					onClick={() => {
						window.location.hash = "#projects-all";
					}}
					data-reveal
					className="reveal-on-scroll inline-flex items-center gap-2 rounded-full bg-primary-default px-7 py-3 text-base font-semibold text-neutral-background shadow-[0px_4px_16px_rgba(17,17,26,0.1),0px_8px_24px_rgba(17,17,26,0.1),0px_16px_56px_rgba(17,17,26,0.1)] transition-transform duration-200 hover:scale-105 cursor-pointer"
					style={{ "--reveal-delay": "220ms" }}
				>
					<span>Savoir Plus</span>
					<EastIcon fontSize="small" />
				</button>

				<div
					data-reveal
					className="reveal-on-scroll relative mt-6 w-full max-w-5xl"
					style={{ "--reveal-delay": "320ms" }}
				>
					<div className="flex flex-col items-center gap-4 md:min-h-120 md:justify-center">
					<article className="w-72 rounded-3xl bg-neutral-background p-5 text-left shadow-[0_20px_45px_rgba(46,58,69,0.22)] transition-all duration-300 hover:z-50 hover:scale-105 md:absolute md:left-1/2 md:top-16 md:z-10 md:-translate-x-full md:rotate-[-10deg] md:hover:rotate-0 sm:w-76 md:w-80">
						<ImageWithLoader
							src={projectImageTwo}
							alt="Projet architectural premium"
							className="h-48 w-full rounded-2xl object-cover"
						/>
						<h3 className="mt-3 text-base font-heading font-semibold text-neutral-text">Maison Signature</h3>
						<p className="mt-1 text-xs leading-relaxed text-neutral-text/80">
							Une r&eacute;alisation au caract&egrave;re unique, pens&eacute;e pour le confort et l&rsquo;esth&eacute;tique.
						</p>
					</article>

					<article className="w-72 rounded-3xl bg-neutral-background p-5 text-left shadow-[0_20px_45px_rgba(46,58,69,0.22)] transition-all duration-300 hover:z-50 hover:scale-105 md:absolute md:left-1/2 md:-top-3 md:z-30 md:-translate-x-1/2 sm:w-76 md:w-80">
						<ImageWithLoader
							src={projectImageOne}
							alt="Projet architectural moderne"
							className="h-48 w-full rounded-2xl object-cover"
						/>
						<h3 className="mt-3 text-base font-heading font-semibold text-neutral-text">Villa Contemporaine</h3>
						<p className="mt-1 text-xs leading-relaxed text-neutral-text/80">
							Un projet &eacute;l&eacute;gant qui associe lignes modernes, lumi&egrave;re naturelle et fonctionnalit&eacute; raffin&eacute;e.
						</p>
					</article>

					<article className="w-72 rounded-3xl bg-neutral-background p-5 text-left shadow-[0_20px_45px_rgba(46,58,69,0.22)] transition-all duration-300 hover:z-50 hover:scale-105 md:absolute md:left-1/2 md:top-16 md:z-20 md:translate-x-[2%] md:rotate-[8deg] md:hover:rotate-0 sm:w-76 md:w-80">
							<ImageWithLoader
								src={projectImageThree}
								alt="Projet architectural urbain"
								className="h-48 w-full rounded-2xl object-cover"
							/>
							<h3 className="mt-3 text-base font-heading font-semibold text-neutral-text">R&eacute;sidence Urbaine</h3>
							<p className="mt-1 text-xs leading-relaxed text-neutral-text/80">
								Un design contemporain qui harmonise volumes, mati&egrave;res et lumi&egrave;re.
							</p>
						</article>
					</div>

					<div
						data-reveal
						className="reveal-on-scroll mt-8 flex justify-center md:absolute md:left-1/2 md:top-100 md:z-40 md:-translate-x-1/2 md:mt-0"
						style={{ "--reveal-delay": "420ms" }}
					>
						<button
							type="button"
							className="inline-flex items-center rounded-full bg-primary-default px-6 py-2.5 text-base font-semibold text-neutral-background shadow-[0px_4px_16px_rgba(17,17,26,0.1),0px_8px_24px_rgba(17,17,26,0.1),0px_16px_56px_rgba(17,17,26,0.1)] transition-transform duration-200 hover:scale-105 cursor-pointer sm:px-8 sm:py-3 sm:text-lg"
						>
							Discuter de votre projet
						</button>
					</div>

				</div>
			</section>
		</section>
	);
}

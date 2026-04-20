import EastIcon from "@mui/icons-material/East";
import Header from "../header/header";
import FooterPage from "../FooterPage/FooterPage";
import ImageWithLoader from "../components/ImageWithLoader";
import projectsData from "./projectsData";
import { getProjectImageSrc } from "./projectImages";

export default function AllProjectsPage() {
    return (
        <main id="top" className="min-h-screen bg-neutral-backgroundAlt pt-28 sm:pt-32">
            <Header />

            <section className="px-6 py-12 sm:px-10 lg:px-16 lg:py-16">
                <div className="mx-auto w-full max-w-7xl text-left">
                    <div className="mb-4 flex items-center gap-2 font-heading text-sm font-bold tracking-[0.2em] text-primary-default sm:text-base">
                        <span className="h-2 w-2 rounded-full bg-primary-default" aria-hidden="true"></span>
                        <span>NOS PROJETS</span>
                    </div>
                </div>

                <div className="mx-auto mt-8 grid w-full max-w-7xl grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
                    {projectsData.map((project) => (
                        <article
                            key={project.id}
                            className="flex h-full flex-col overflow-hidden rounded-3xl bg-neutral-background p-4 text-left shadow-[0_14px_30px_rgba(46,58,69,0.18)] sm:p-5"
                        >
                            <ImageWithLoader
                                src={getProjectImageSrc(project.image)}
                                alt={project.title}
                                className="h-44 w-full rounded-2xl object-cover sm:h-48"
                            />
                            <h2 className="mt-3 font-heading text-xl font-semibold text-neutral-text sm:text-2xl">
                                {project.title}
                            </h2>
                            <p className="mt-2 flex-1 text-sm leading-relaxed text-neutral-text/80">
                                {project.description[0]}
                            </p>
                            <div className="mt-auto flex justify-end pt-4">
                                <button
                                    type="button"
                                    onClick={() => {
                                        window.location.hash = `#project-detail-${project.id}`;
                                    }}
                                    className="inline-flex items-center gap-2 bg-transparent p-0 text-sm font-semibold text-primary-default transition-all duration-200 hover:translate-x-0.5 hover:text-primary-dark cursor-pointer"
                                >
                                    <span>Savoir Plus</span>
                                    <EastIcon fontSize="small" />
                                </button>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            <FooterPage />
        </main>
    );
}
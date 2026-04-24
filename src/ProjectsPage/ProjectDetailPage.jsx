import Header from "../header/header";
import FooterPage from "../FooterPage/FooterPage";
import ImageWithLoader from "../components/ImageWithLoader";
import projectsData from "./projectsData";
import { getProjectImageSrc } from "./projectImages";
import { useEffect } from "react";

export default function ProjectDetailPage({ projectId }) {
    const project = projectsData.find((item) => item.id === projectId) || projectsData[0];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [projectId]);

    const projectFacts = [
        { label: "Programme", value: project.facts.programme },
        { label: "Maitre d'ouvrage", value: project.facts.maitreDOuvrage },
        { label: "Etat", value: project.facts.etat },
        { label: "Montant travaux", value: project.facts.montantTravaux },
    ];

    return (
        <main id="top" className="min-h-screen bg-neutral-backgroundAlt pt-28 sm:pt-32">
            <Header />

            <section className="px-6 py-10 sm:px-10 lg:px-16 lg:py-14">
                <div className="mx-auto w-full max-w-7xl">
                    <div className="mb-5 flex items-center justify-between gap-4">
                        <div className="flex items-center gap-2 font-heading text-sm font-bold tracking-[0.2em] text-primary-default sm:text-base">
                            <span className="h-2 w-2 rounded-full bg-primary-default" aria-hidden="true"></span>
                            <span>NOS PROJETS</span>
                        </div>
                        <button
                            type="button"
                            onClick={() => {
                                window.location.hash = "#projects-all";
                            }}
                            className="rounded-full bg-neutral-background px-4 py-2 text-sm font-semibold text-neutral-text shadow-[0_4px_12px_rgba(17,17,26,0.12)] transition-transform duration-200 hover:scale-105"
                        >
                            Retour
                        </button>
                    </div>

                    <h1 className="font-heading text-3xl font-semibold leading-tight text-neutral-text sm:text-4xl">
                        {project.title}
                    </h1>

                    <div className="mt-6 grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
                        <div>
                            {project.description.map((paragraph, index) => (
                                <p
                                    key={`${project.id}-paragraph-${index}`}
                                    className={`text-base leading-relaxed text-neutral-text/90 sm:text-lg ${index > 0 ? "mt-3" : ""}`}
                                >
                                    {paragraph}
                                </p>
                            ))}

                            <div className="mt-6 overflow-hidden rounded-2xl border border-neutral-text/20 bg-neutral-background">
                                {projectFacts.map((fact) => (
                                    <div
                                        key={fact.label}
                                        className="grid gap-1 border-b border-neutral-text/20 p-4 last:border-b-0 sm:grid-cols-[14rem_1fr] sm:items-start"
                                    >
                                        <p className="font-semibold text-neutral-text">{fact.label}</p>
                                        <p className="text-neutral-text/90">{fact.value}</p>
                                    </div>
                                ))}
                            </div>

                        </div>

                        <div className="overflow-hidden rounded-3xl shadow-[0_20px_45px_rgba(46,58,69,0.22)]">
                            <ImageWithLoader
                                src={getProjectImageSrc(project.image)}
                                alt={project.title}
                                className="h-full w-full object-cover"
                                wrapperClassName="h-[22rem] sm:h-[26rem] lg:h-[30rem]"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <FooterPage />
        </main>
    );
}
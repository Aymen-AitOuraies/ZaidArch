import Header from "../header/header";
import HeroTitleSection from "./HeroTitleSection";
import ImgsAnimation from "./ImgsAnimation";
import ProjectsPage from "../ProjectsPage/ProjectsPage";
import AgencyPage from "../AgencyPage/AgencyPage";
import ServicesPage from "../ServicesPage/ServicesPage";
import BlogsPage from "../BlogsPage/BlogsPage";
import FooterPage from "../FooterPage/FooterPage";
import "./PageLoadAnimation.css";

export default function HomePage() {
    return (
        <main id="top" className="flex min-h-screen flex-col overflow-hidden bg-[#111820] pt-28 sm:pt-32">
            <Header />
            <div className="flex min-h-[calc(100vh-7rem)] flex-1 flex-col justify-center bg-[linear-gradient(180deg,#111820_0%,#18212a_55%,#111820_100%)] text-primary-soft/85 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] sm:min-h-[calc(100vh-8rem)]">
                <div className="page-enter page-enter-1">
                    <HeroTitleSection />
                </div>
                <div className="page-enter page-enter-2">
                    <ImgsAnimation />
                </div>
            </div>
            <ProjectsPage />
            <AgencyPage />
            <ServicesPage />
            <BlogsPage />
            <FooterPage />
        </main>
    );
}
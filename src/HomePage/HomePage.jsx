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
        <main id="top" className="min-h-screen flex flex-col pt-28 sm:pt-32">
            <Header />
            <div className="page-enter page-enter-1">
                <HeroTitleSection />
            </div>
            <div className="page-enter page-enter-2">
                <ImgsAnimation />
            </div>
            <ProjectsPage />
            <AgencyPage />
            <ServicesPage />
            <BlogsPage />
            <FooterPage />
        </main>
    );
}
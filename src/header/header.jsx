import { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import logoImage from "/assets/images/HomePage/logo.png";


export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState("#top");
    const [isHeaderVisible, setIsHeaderVisible] = useState(true);

    useEffect(() => {
        const syncActiveLink = () => {
            setActiveLink(window.location.hash || "#top");
        };

        syncActiveLink();
        window.addEventListener("hashchange", syncActiveLink);

        return () => window.removeEventListener("hashchange", syncActiveLink);
    }, []);

    useEffect(() => {
        const sectionIds = ["top", "projects", "agency", "services", "blogs", "contact"];
        let animationFrameId = 0;

        const updateActiveLinkFromScroll = () => {
            const triggerPoint = window.innerHeight * 0.32;
            let nextActiveLink = "#top";

            sectionIds.forEach((id) => {
                const section = document.getElementById(id);
                if (!section) {
                    return;
                }

                const rect = section.getBoundingClientRect();
                if (rect.top <= triggerPoint) {
                    nextActiveLink = `#${id}`;
                }
            });

            setActiveLink(nextActiveLink);
        };

        const handleScroll = () => {
            window.cancelAnimationFrame(animationFrameId);
            animationFrameId = window.requestAnimationFrame(updateActiveLinkFromScroll);
        };

        updateActiveLinkFromScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });
        window.addEventListener("resize", handleScroll);

        return () => {
            window.cancelAnimationFrame(animationFrameId);
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleScroll);
        };
    }, []);

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const updateHeaderVisibility = () => {
            const currentScrollY = window.scrollY;

            if (isMenuOpen || currentScrollY <= 24) {
                setIsHeaderVisible(true);
                lastScrollY = currentScrollY;
                return;
            }

            if (currentScrollY < lastScrollY - 2) {
                setIsHeaderVisible(true);
            } else if (currentScrollY > lastScrollY + 2) {
                setIsHeaderVisible(false);
            }

            lastScrollY = currentScrollY;
        };

        updateHeaderVisibility();
        window.addEventListener("scroll", updateHeaderVisibility, { passive: true });

        return () => {
            window.removeEventListener("scroll", updateHeaderVisibility);
        };
    }, [isMenuOpen]);

    const getLinkClassName = (href) =>
        `transition-all duration-200 ${activeLink === href ? "font-bold" : "font-normal"}`;

    const getContactClassName = () =>
        `bg-neutral-text text-neutral-backgroundAlt px-6 py-2 rounded-full text-lg font-medium transition-all duration-200 hover:bg-neutral-dark hover:scale-105 cursor-pointer ${activeLink === "#contact" ? "font-bold" : "font-medium"}`;

    const handleLinkClick = (href) => {
        setActiveLink(href);
        setIsMenuOpen(false);
        setIsHeaderVisible(true);
    };

    const handleLogoClick = (event) => {
        event.preventDefault();
        setActiveLink("#top");
        setIsMenuOpen(false);
        setIsHeaderVisible(true);
        window.location.hash = "#top";
        window.scrollTo(0, 0);
    };

    return (
        <header className={`fixed top-0 left-1/2 z-100 w-[90%] -translate-x-1/2 bg-primary-soft/80 p-5 sm:p-6 px-6 sm:px-10 rounded-b-[50px] shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] backdrop-blur-sm transition-all duration-300 ${isHeaderVisible || isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"}`}>
            <div className="relative flex items-center justify-between gap-4">
                <a
                    href="#top"
                    aria-label="Retour a l'accueil"
                    onClick={handleLogoClick}
                    className="inline-flex items-center"
                >
                    <img src={logoImage} alt="Zaid Architecture" className="h-10 w-auto origin-left scale-[2.25] transform-gpu sm:h-12" />
                </a>

                <button
                    type="button"
                    className="lg:hidden text-neutral-text"
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    onClick={() => setIsMenuOpen((prev) => !prev)}
                >
                    {isMenuOpen ? <CloseIcon fontSize="large" /> : <MenuIcon fontSize="large" />}
                </button>

                <div className="hidden lg:flex lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:items-center lg:gap-6">
                    <nav className="flex items-center gap-8 text-neutral-text text-[20px] leading-none">
                        <a href="#top" className={getLinkClassName("#top")}>Accueil</a>
                        <a href="#projects" className={getLinkClassName("#projects")}>Projets</a>
                        <a href="#agency" className={getLinkClassName("#agency")}>Agence</a>
                        <a href="#services" className={getLinkClassName("#services")}>Services</a>
                        <a href="#blogs" className={getLinkClassName("#blogs")}>Blogs</a>
                    </nav>
                    <a href="#contact" className={getContactClassName()}>
                        Contact
                    </a>
                </div>

                <div className="hidden lg:flex lg:items-center lg:gap-5 lg:ml-auto">
                    <span className="h-6 w-px bg-neutral-text/40" aria-hidden="true"></span>
                    <div className="flex items-center gap-3 text-neutral-text">
                        <a href="#" aria-label="LinkedIn" className="transition-transform duration-200 hover:scale-110 hover:text-neutral-dark">
                            <LinkedInIcon />
                        </a>
                        <a href="#" aria-label="Instagram" className="transition-transform duration-200 hover:scale-110 hover:text-neutral-dark">
                            <InstagramIcon />
                        </a>
                    </div>
                </div>
            </div>

            {isMenuOpen && (
                <div className="mt-5 lg:hidden border-t border-neutral-text/30 pt-5 text-neutral-text">
                    <nav className="flex flex-col gap-4 text-2xl">
                        <a href="#top" className={getLinkClassName("#top")} onClick={() => handleLinkClick("#top")}>Accueil</a>
                        <a href="#projects" className={getLinkClassName("#projects")} onClick={() => handleLinkClick("#projects")}>Projets</a>
                        <a href="#agency" className={getLinkClassName("#agency")} onClick={() => handleLinkClick("#agency")}>Agence</a>
                        <a href="#services" className={getLinkClassName("#services")} onClick={() => handleLinkClick("#services")}>Services</a>
                        <a href="#blogs" className={getLinkClassName("#blogs")} onClick={() => handleLinkClick("#blogs")}>Blogs</a>
                    </nav>
                    <div className="mt-5 flex items-center justify-between gap-4">
                        <a href="#contact" onClick={() => setIsMenuOpen(false)} className={`${activeLink === "#contact" ? "font-bold" : "font-medium"} bg-neutral-text text-neutral-backgroundAlt px-5 py-2 rounded-full text-base transition-all duration-200 hover:bg-neutral-dark hover:scale-105`}>
                            Contact
                        </a>
                        <div className="flex items-center gap-3">
                            <a href="#" aria-label="LinkedIn" className="text-neutral-text transition-transform duration-200 hover:scale-110 hover:text-neutral-dark">
                                <LinkedInIcon />
                            </a>
                            <a href="#" aria-label="Instagram" className="text-neutral-text transition-transform duration-200 hover:scale-110 hover:text-neutral-dark">
                                <InstagramIcon />
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
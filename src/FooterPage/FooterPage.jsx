import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import useScrollReveal from "../hooks/useScrollReveal";
import "../animations/scrollReveal.css";

const mapsEmbedApiKey = import.meta.env.VITE_GOOGLE_MAPS_EMBED_API_KEY;
const mapQuery = "46 boulevard Rahal El Meskini, Casablanca";
const mapSrc = mapsEmbedApiKey
    ? `https://www.google.com/maps/embed/v1/place?key=${mapsEmbedApiKey}&q=${encodeURIComponent(mapQuery)}&zoom=16`
    : `https://www.google.com/maps?q=${encodeURIComponent(mapQuery)}&z=16&output=embed`;

export default function FooterPage() {
    useScrollReveal("contact");

    return (
        <footer id="contact" className="scroll-mt-32 bg-[#18212a] px-6 py-10 text-neutral-background sm:px-10 lg:px-16 lg:py-12">
            <div className="mx-auto w-full max-w-7xl">
                <h2 data-reveal className="reveal-on-scroll text-center font-heading text-3xl leading-none tracking-tight text-[#ece4d8] drop-shadow-[0_3px_10px_rgba(0,0,0,0.45)] sm:text-4xl lg:text-5xl">
                    Zaid Architecture
                </h2>

                <div className="mt-8 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
                        <section data-reveal className="reveal-on-scroll">
                            <div className="mb-4 flex items-center gap-2.5 font-heading text-base text-[#ece4d8] sm:text-lg">
                                <span aria-hidden="true">•</span>
                                <span>Numéro de téléphone</span>
                            </div>
                            <div className="flex items-center gap-3 text-[#c69558]">
                                <PhoneIcon className="h-9! w-9! sm:h-10! sm:w-10!" />
                                <a href="tel:+212512345678" className="text-base leading-none text-[#ece4d8] underline decoration-1 underline-offset-4 transition-opacity duration-200 hover:opacity-80 sm:text-lg">
                                    +212 512345678
                                </a>
                            </div>
                        </section>

                        <section data-reveal className="reveal-on-scroll" style={{ "--reveal-delay": "80ms" }}>
                            <div className="mb-4 flex items-center gap-2.5 font-heading text-base text-[#ece4d8] sm:text-lg">
                                <span aria-hidden="true">•</span>
                                <span>Adresse mail</span>
                            </div>
                            <div className="flex items-center gap-3 text-[#c69558]">
                                <MailIcon className="h-9! w-9! sm:h-10! sm:w-10!" />
                                <a href="mailto:username@gmail.com" className="text-base leading-none text-[#ece4d8] underline decoration-1 underline-offset-4 transition-opacity duration-200 hover:opacity-80 sm:text-lg">
                                    username@gmail.com
                                </a>
                            </div>
                        </section>

                        <section data-reveal className="reveal-on-scroll sm:col-span-2 lg:col-span-1" style={{ "--reveal-delay": "120ms" }}>
                            <div className="mb-4 flex items-center gap-2.5 font-heading text-base text-[#ece4d8] sm:text-lg">
                                <span aria-hidden="true">•</span>
                                <span>Réseaux sociaux</span>
                            </div>
                            <div className="space-y-3.5">
                                <a href="#" className="flex items-center gap-3 text-[#c69558] transition-opacity duration-200 hover:opacity-80">
                                    <LinkedInIcon className="h-9! w-9! sm:h-10! sm:w-10!" />
                                    <span className="text-base leading-none text-[#ece4d8] underline decoration-1 underline-offset-4 sm:text-lg">
                                        linkedin.com
                                    </span>
                                </a>
                                <a href="#" className="flex items-center gap-3 text-[#c69558] transition-opacity duration-200 hover:opacity-80">
                                    <InstagramIcon className="h-9! w-9! sm:h-10! sm:w-10!" />
                                    <span className="text-base leading-none text-[#ece4d8] underline decoration-1 underline-offset-4 sm:text-lg">
                                        instagram.com
                                    </span>
                                </a>
                            </div>
                        </section>
                    </div>

                    <section data-reveal className="reveal-on-scroll" style={{ "--reveal-delay": "160ms" }}>
                        <div className="mb-4 flex items-center gap-2.5 font-heading text-base text-[#ece4d8] sm:text-lg">
                            <span aria-hidden="true">•</span>
                            <span>Localisation</span>
                        </div>

                        <div className="flex items-start gap-3 text-[#c69558]">
                            <LocationOnIcon className="h-9! w-9! sm:h-10! sm:w-10!" />
                            <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapQuery)}`} target="_blank" rel="noreferrer" className="text-base leading-tight text-[#ece4d8] underline decoration-1 underline-offset-4 transition-opacity duration-200 hover:opacity-80 sm:text-lg">
                                46 boulevard Rahal El Meskini
                            </a>
                        </div>

                        <div className="mt-5 overflow-hidden rounded-md border border-black/30 shadow-[0_14px_28px_rgba(0,0,0,0.5)]">
                            <iframe
                                title="Localisation Zaid Architecture"
                                src={mapSrc}
                                className="h-64 w-full border-0 bg-[#d9d9d9] sm:h-72 lg:h-80"
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </section>
                </div>
            </div>
        </footer>
    );
}
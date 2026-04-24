import blogImage from "/assets/images/BlogsPage/blog1.jpeg";
import useScrollReveal from "../hooks/useScrollReveal";
import ImageWithLoader from "../components/ImageWithLoader";
import "../animations/scrollReveal.css";

export default function BlogsPage() {
    useScrollReveal("blogs");

    return (
        <section id="blogs" className="scroll-mt-32 bg-primary-soft px-6 py-14 sm:px-10 sm:py-16 lg:px-16 lg:py-18">
            <div className="mx-auto flex w-full max-w-6xl flex-col items-start">
                <div
                    data-reveal
                    className="reveal-on-scroll mb-8 flex items-center gap-2 font-heading text-sm font-bold tracking-[0.2em] text-primary-default sm:text-base"
                >
                    <span className="h-2 w-2 rounded-full bg-primary-default" aria-hidden="true"></span>
                    <span>NOS BLOGS</span>
                </div>

                <a
                    href="#blog-1"
                    aria-label="Lire Blog Zaid"
                    data-reveal
                    style={{ "--reveal-delay": "120ms" }}
                    className="reveal-on-scroll group block w-full max-w-64 overflow-hidden rounded-4xl bg-primary-dark shadow-[0_34px_90px_rgba(26,36,44,0.5),0_16px_36px_rgba(26,36,44,0.28),0_0_0_1px_rgba(247,245,242,0.08)] ring-1 ring-primary-default/20 sm:max-w-80"
                >
                    <div className="relative transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform group-hover:-translate-y-1">
                        <ImageWithLoader
                            src={blogImage}
                            alt="Article de blog architecture"
                            className="h-40 w-full object-cover sm:h-48"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-primary-dark/80 transition-all duration-300 ease-out group-hover:from-primary-dark/95 group-hover:via-primary-dark/70 group-hover:to-primary-dark/50"></div>
                        <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
                            <span className="font-heading text-lg font-semibold tracking-[0.18em] text-neutral-background opacity-0 translate-y-1 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-y-0 sm:text-xl">
                                Learn More
                            </span>
                        </div>
                    </div>
                </a>
            </div>
        </section>
    );
}

import Header from "../header/header";
import FooterPage from "../FooterPage/FooterPage";
import { blog1 } from "./blogData";
import { useEffect } from "react";

const blogMap = {
    "blog-1": blog1,
};

export default function BlogDetailPage({ blogId }) {
    const blog = blogMap[blogId] || blog1;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [blogId]);

    return (
        <main id="top" className="min-h-screen bg-[#f7f3ec] pt-28 text-neutral-text sm:pt-32">
            <Header />

            <section className="px-6 py-10 sm:px-10 lg:px-16 lg:py-14">
                <article className="mx-auto w-full max-w-4xl">
                    <div className="mb-8 flex items-center justify-between gap-4">
                        <div className="flex items-center gap-2 font-heading text-sm font-bold tracking-[0.2em] text-[#6f8a63] sm:text-base">
                            <span className="h-2 w-2 rounded-full bg-[#6f8a63]" aria-hidden="true"></span>
                            <span>BLOG</span>
                        </div>

                        <button
                            type="button"
                            onClick={() => {
                                window.location.hash = "#blogs";
                            }}
                            className="rounded-full bg-[#e9dfcf] px-4 py-2 text-sm font-semibold text-neutral-text shadow-[0_4px_12px_rgba(17,17,26,0.12)] transition-transform duration-200 hover:scale-105"
                        >
                            Retour
                        </button>
                    </div>

                    <header className="text-center">
                        <h1 className="font-heading text-5xl leading-tight tracking-tight text-accent-green sm:text-6xl lg:text-8xl">
                            {blog.title}
                        </h1>
                        <p className="mx-auto mt-4 max-w-2xl text-lg font-semibold leading-snug text-neutral-text sm:text-xl lg:text-2xl">
                            {blog.subtitle}
                        </p>
                    </header>

                    <div className="mt-8 space-y-8 text-[1rem] leading-7 text-neutral-text sm:text-[1.05rem] sm:leading-8">
                        <p>{blog.summary}</p>

                        {blog.sections.map((section) => (
                            <section key={section.heading} className="space-y-4">
                                <h2 className="font-heading text-2xl leading-tight text-neutral-text sm:text-3xl">
                                    {section.heading}
                                </h2>

                                {section.paragraphs?.map((paragraph, index) => (
                                    <p key={`${section.heading}-paragraph-${index}`}>{paragraph}</p>
                                ))}

                                {section.bullets?.length ? (
                                    <ul className="space-y-1.5 pl-6">
                                        {section.bullets.map((item) => (
                                            <li key={item} className="list-disc">
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                ) : null}

                                {section.numberedSections?.length ? (
                                    <div className="space-y-4">
                                        {section.numberedSections.map((item, index) => (
                                            <div key={item.title} className="space-y-2">
                                                <h3 className="font-semibold text-neutral-text">
                                                    {index + 1}. {item.title}
                                                </h3>
                                                <ul className="space-y-1.5 pl-6">
                                                    {item.bullets.map((bullet) => (
                                                        <li key={bullet} className="list-disc">
                                                            {bullet}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                ) : null}

                                {section.closing ? <p>{section.closing}</p> : null}
                            </section>
                        ))}
                    </div>
                </article>
            </section>

            <FooterPage />
        </main>
    );
}
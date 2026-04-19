import { useEffect, useRef, useState } from "react";
import './CarrouselAnimation.css'
import image1 from "../assets/images/HomePage/1.png";
import image2 from "../assets/images/HomePage/2.png";
import image3 from "../assets/images/HomePage/3.png";
import image4 from "../assets/images/HomePage/4.png";
import ImageWithLoader from "../components/ImageWithLoader";

export default function ImgsAnimation() {
    const [isTouching, setIsTouching] = useState(false);
    const [activeTouchCard, setActiveTouchCard] = useState(null);
    const marqueeScrollRef = useRef(null);

    useEffect(() => {
        const container = marqueeScrollRef.current;
        if (!container) {
            return undefined;
        }

        let groupWidth = 0;

        const syncWidths = () => {
            groupWidth = container.scrollWidth / 2;

            if (groupWidth > 0 && container.scrollLeft <= 0) {
                container.scrollLeft = groupWidth / 2;
            }
        };

        const handleScroll = () => {
            if (!groupWidth) {
                return;
            }

            // Wrap scroll position between duplicated groups so users never hit blank space.
            if (container.scrollLeft <= 1) {
                container.scrollLeft += groupWidth;
            } else if (container.scrollLeft >= groupWidth + 1) {
                container.scrollLeft -= groupWidth;
            }
        };

        syncWidths();
        container.addEventListener("scroll", handleScroll, { passive: true });
        window.addEventListener("resize", syncWidths);

        return () => {
            container.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", syncWidths);
        };
    }, []);

    const images = [
        { src: image1, alt: "Zaid Architecture project 1" },
        { src: image2, alt: "Zaid Architecture project 2" },
        { src: image3, alt: "Zaid Architecture project 3" },
        { src: image4, alt: "Zaid Architecture project 4" },
    ];

    const marqueeText = "Plus de 35 ans d’expérience | Vision à 360° du projet architectural et urbain.";

    return (
        <div className="w-full flex flex-col gap-1 pb-2">
            <section className="w-full mx-auto overflow-hidden">
                <div className="text-marquee-track no-scrollbar">
                    {[0, 1].map((groupIndex) => (
                        <div key={groupIndex} className="text-marquee-group">
                            {[0, 1, 2].map((lineIndex) => (
                                <p key={`${groupIndex}-${lineIndex}`} className="text-marquee-line text-neutral-text text-sm sm:text-base font-medium">
                                    {marqueeText}
                                </p>
                            ))}
                        </div>
                    ))}
                </div>
            </section>

            <section ref={marqueeScrollRef} className="image-marquee image-marquee-scroll no-scrollbar flex-1 w-full mx-auto overflow-x-auto overflow-y-hidden">
                <div className={`image-marquee-track no-scrollbar ${isTouching ? "is-paused" : ""}`}>
                    {[0, 1].map((groupIndex) => (
                        <div key={groupIndex} className="image-marquee-group">
                            {images.map((image, imageIndex) => (
                                <article
                                    key={`${groupIndex}-${image.alt}`}
                                    className="image-marquee-card group relative overflow-hidden rounded-4xl"
                                    onTouchStart={() => {
                                        setIsTouching(true);
                                        setActiveTouchCard(`${groupIndex}-${imageIndex}`);
                                    }}
                                    onTouchEnd={() => {
                                        setIsTouching(false);
                                        setActiveTouchCard(null);
                                    }}
                                    onTouchCancel={() => {
                                        setIsTouching(false);
                                        setActiveTouchCard(null);
                                    }}
                                >
                                    <ImageWithLoader
                                        src={image.src}
                                        alt={image.alt}
                                        wrapperClassName="h-full w-full"
                                        className={`h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 ${activeTouchCard === `${groupIndex}-${imageIndex}` ? "scale-105" : ""}`}
                                        loading={groupIndex === 0 ? "eager" : "lazy"}
                                        fetchPriority={groupIndex === 0 && imageIndex === 0 ? "high" : "auto"}
                                        minLoaderMs={120}
                                    />
                                    <div className={`absolute inset-0 bg-primary-soft/65 transition-opacity duration-300 group-hover:opacity-0 ${activeTouchCard === `${groupIndex}-${imageIndex}` ? "opacity-0" : ""}`}></div>
                                </article>
                            ))}
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
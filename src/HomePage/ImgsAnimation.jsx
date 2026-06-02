import { useState, useRef } from "react";
import './CarrouselAnimation.css'
import image1 from "/assets/images/HomePage/1.png";
import image2 from "/assets/images/HomePage/2.png";
import image3 from "/assets/images/HomePage/3.png";
import image4 from "/assets/images/HomePage/4.png";
import ImageWithLoader from "../components/ImageWithLoader";

export default function ImgsAnimation() {
    const [activeTouchCard, setActiveTouchCard] = useState(null);
    const [activeHoverCard, setActiveHoverCard] = useState(null);
    const touchTimeoutRef = useRef(null);

    const images = [
        { src: image1, alt: "Zaid Architecture project 1" },
        { src: image2, alt: "Zaid Architecture project 2" },
        { src: image3, alt: "Zaid Architecture project 3" },
        { src: image4, alt: "Zaid Architecture project 4" },
    ];


    return (
        <div className="w-full flex flex-col gap-1 pb-2">
            <section className="image-marquee flex-1 w-full mx-auto overflow-hidden">
                <div className={`image-marquee-track no-scrollbar ${activeHoverCard || activeTouchCard ? "is-paused" : ""}`}>
                    {[0, 1].map((groupIndex) => (
                        <div key={groupIndex} className="image-marquee-group">
                            {images.map((image, imageIndex) => (
                                <article
                                    key={`${groupIndex}-${image.alt}`}
                                    className="image-marquee-card group relative overflow-hidden rounded-4xl"
                                    onMouseEnter={() => {
                                        setActiveHoverCard(`${groupIndex}-${imageIndex}`);
                                    }}
                                    onMouseLeave={() => {
                                        setActiveHoverCard(null);
                                    }}
                                    onTouchStart={() => {
                                        if (touchTimeoutRef.current) clearTimeout(touchTimeoutRef.current);
                                        setActiveTouchCard(`${groupIndex}-${imageIndex}`);
                                        touchTimeoutRef.current = setTimeout(() => {
                                            setActiveTouchCard(null);
                                        }, 2000);
                                    }}
                                    onTouchEnd={() => {
                                        if (touchTimeoutRef.current) clearTimeout(touchTimeoutRef.current);
                                        setActiveTouchCard(null);
                                    }}
                                    onTouchCancel={() => {
                                        if (touchTimeoutRef.current) clearTimeout(touchTimeoutRef.current);
                                        setActiveTouchCard(null);
                                    }}
                                >
                                    <ImageWithLoader
                                        src={image.src}
                                        alt={image.alt}
                                        wrapperClassName="h-full w-full"
                                        className={`h-full w-full object-cover transition-transform duration-700 ${activeHoverCard === `${groupIndex}-${imageIndex}` || activeTouchCard === `${groupIndex}-${imageIndex}` ? "scale-105" : ""}`}
                                        loading={groupIndex === 0 ? "eager" : "lazy"}
                                        fetchPriority={groupIndex === 0 && imageIndex === 0 ? "high" : "auto"}
                                        minLoaderMs={120}
                                    />
                                    <div className={`pointer-events-none absolute inset-0 bg-[#ece4d8]/60 transition-opacity duration-300 ${activeHoverCard === `${groupIndex}-${imageIndex}` || activeTouchCard === `${groupIndex}-${imageIndex}` ? "opacity-0" : "opacity-100"}`}></div>
                                </article>
                            ))}
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
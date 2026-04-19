import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function HomePageContact() {
    return (
        <section className="w-[90%] mx-auto pt-0 pb-2">
            <div className="flex flex-row flex-nowrap items-center justify-center gap-4 px-2 text-neutral-text sm:gap-8">
                <div className="flex items-center gap-2 text-xs font-normal underline decoration-2 underline-offset-6 whitespace-nowrap sm:gap-3 sm:text-2xl sm:underline-offset-8">
                    <PhoneIcon className="text-neutral-text" />
                    <a href="tel:+212600000000" className="hover:underline">
                        +212 6 00 00 00 00
                    </a>
                </div>
                <div className="flex items-center gap-2 text-xs font-normal underline decoration-2 underline-offset-6 whitespace-nowrap sm:gap-3 sm:text-2xl sm:underline-offset-8">
                    <LocationOnIcon className="text-neutral-text" />
                    <span>Casablanca, Maroc</span>
                </div>
            </div>
        </section>
    );
}
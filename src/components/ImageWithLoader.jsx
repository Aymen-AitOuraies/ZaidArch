import { useEffect, useState } from "react";

export default function ImageWithLoader({
	src,
	alt,
	className = "",
	wrapperClassName = "",
	loading = "lazy",
	decoding = "async",
	minLoaderMs = 220,
}) {
	const [isLoaded, setIsLoaded] = useState(false);
	const [showImage, setShowImage] = useState(false);

	useEffect(() => {
		if (!isLoaded) {
			return undefined;
		}

		const timer = window.setTimeout(() => {
			setShowImage(true);
		}, minLoaderMs);

		return () => window.clearTimeout(timer);
	}, [isLoaded, minLoaderMs]);

	return (
		<div className={`relative block h-full w-full overflow-hidden ${wrapperClassName}`}>
			{!showImage && (
				<div className="absolute inset-0 z-10 flex items-center justify-center bg-neutral-backgroundAlt/75">
					<span
						className="h-6 w-6 animate-spin rounded-full border-2 border-primary-default/35 border-t-primary-default"
						aria-hidden="true"
					></span>
				</div>
			)}

			<img
				src={src}
				alt={alt}
				loading={loading}
				decoding={decoding}
				className={`block h-full w-full ${className} transition-opacity duration-300 ${showImage ? "opacity-100" : "opacity-0"}`}
				onLoad={() => setIsLoaded(true)}
				onError={() => setIsLoaded(true)}
			/>
		</div>
	);
}

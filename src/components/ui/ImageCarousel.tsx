import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface ImageCarouselProps {
    images: string[];
}

export default function ImageCarousel({ images }: ImageCarouselProps) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [modalOpen, setModalOpen] = useState(false);
    // const [modalImageIndex, setModalImageIndex] = useState(0);

    const prevSlide = () =>
        setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    const nextSlide = () =>
        setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));

    const openModal = () => {
        setModalOpen(true);
    };
    const closeModal = () => setModalOpen(false);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!modalOpen) return;
            if (e.key === "ArrowLeft") prevSlide();
            if (e.key === "ArrowRight") nextSlide();
            if (e.key === "Escape") setModalOpen(false);
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [modalOpen]);


    return (
        <div className="w-full h-full flex flex-col">
            {/* Carousel wrapper */}
            <div className="flex flex-1 justify-center items-center overflow-hidden relative">
                {images.map((src, idx) =>
                    idx === activeIndex ? (
                        <div
                            key={idx}
                            className="flex items-center justify-center w-full h-full max-h-[300px]"
                        >
                            <img
                                src={src}
                                alt={`Slide ${idx + 1}`}
                                className="max-h-full w-auto object-contain cursor-pointer"
                                onClick={() => openModal()}
                            />
                        </div>
                    ) : null
                )}

                {images.length > 1 && (
                    <>
                        {/* Prev Button */}
                        <button
                            type="button"
                            onClick={prevSlide}
                            className="absolute top-0 h-full left-0 z-30 flex items-center justify-center px-4 cursor-pointer
               opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300"
                        >
                            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-400/70">
                                <ChevronLeft className="w-5 h-5 text-white" />
                            </span>
                        </button>

                        {/* Next Button */}
                        <button
                            type="button"
                            onClick={nextSlide}
                            className="absolute top-0 h-full right-0 z-30 flex items-center justify-center px-4 cursor-pointer
               opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300"
                        >
                            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-400/70">
                                <ChevronRight className="w-5 h-5 text-white" />
                            </span>
                        </button>
                    </>
                )}
            </div>


            {/* Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-2 pt-2">
                {images.map((_, idx) => (
                    <button
                        key={idx}
                        className={`w-3 h-3 rounded-full cursor-pointer transition-colors ${idx === activeIndex ? "bg-white" : "bg-gray-400"
                            }`}
                        onClick={() => setActiveIndex(idx)}
                    />
                ))}
            </div>


            {/* Modal */}
            {modalOpen &&
                createPortal(
                    <div
                        className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90"
                        onClick={closeModal} // click outside closes
                        style={{ touchAction: "none" }}
                    >
                        {/* Image wrapper */}
                        <div
                            className="relative flex w-[90%] h-[90%]"
                        >
                            {/* Close button */}
                            <button
                                className="fixed top-4 right-4 text-white p-2 rounded-full bg-white/20 hover:bg-white/40 transition cursor-pointer z-[10000]"
                                onClick={closeModal}
                            >
                                <X className="w-6 h-6" />
                            </button>

                            {images.length > 1 && (
                                <>
                                    {/* Prev Arrow */}
                                    <button
                                        className="fixed left-4 top-1/2 -translate-y-1/2 text-white p-2 rounded-full bg-white/20 hover:bg-white/40 transition cursor-pointer z-[10000]"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            prevSlide();
                                        }}
                                    >
                                        <ChevronLeft className="w-8 h-8" />
                                    </button>

                                    {/* Next Arrow */}
                                    <button
                                        className="fixed right-4 top-1/2 -translate-y-1/2 text-white p-2 rounded-full bg-white/20 hover:bg-white/40 transition cursor-pointer z-[10000]"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            nextSlide();
                                        }}
                                    >
                                        <ChevronRight className="w-8 h-8" />
                                    </button>

                                    {/* Indicators */}
                                    <div
                                        className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex flex-wrap items-center justify-center gap-2 z-40 w-full max-w-[80%] h-6"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        {images.map((_, idx) => (
                                            <button
                                                key={idx}
                                                className={`w-3 h-3 rounded-full cursor-pointer transition-colors ${idx === activeIndex ? "bg-white" : "bg-gray-400"
                                                    }`}
                                                onClick={() => setActiveIndex(idx)}
                                            />
                                        ))}
                                    </div>
                                </>
                            )}


                            {/* Image wrapper */}
                            <div
                                className="m-auto"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <img
                                    src={images[activeIndex]}
                                    alt={`Slide ${activeIndex + 1}`}
                                    className="w-full h-full max-h-[90vh] object-contain rounded-lg"
                                />
                            </div>
                        </div>
                    </div>,
                    document.body
                )}

        </div>
    );
}

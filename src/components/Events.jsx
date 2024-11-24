import React, { useRef, useState } from 'react';

const BentoTilt = ({ children, className = '' }) => {
    const [transformStyle, setTransformStyle] = useState('');
    const itemRef = useRef();

    const handleMouseMove = (e) => {
        if (!itemRef.current) return;

        const { left, top, width, height } = itemRef.current.getBoundingClientRect();
        const relativeX = (e.clientX - left) / width;
        const relativeY = (e.clientY - top) / height;

        const tiltX = (relativeY - 0.5) * 12; // Adjust tiltX
        const tiltY = (relativeX - 0.5) * -12; // Adjust tiltY

        const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;
        setTransformStyle(newTransform);
    };

    const handleMouseLeave = () => {
        setTransformStyle('');
    };

    return (
        <div
            className={`${className} transition-transform duration-300`}
            ref={itemRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ transform: transformStyle }}
        >
            {children}
        </div>
    );
};

const BentoCard = ({ src, title, description, category }) => {
    return (
        <div className="relative size-full">
            <video
                src={src}
                loop
                autoPlay
                muted
                className="absolute left-0 top-0 size-full object-cover object-center"
            />
            <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
                <h1 className="bento-title special-font">{title}</h1>
                {description && (
                    <div>
                        <p className="mt-3 max-w-64 text-xs font-bold md:text-base">
                            Category: {category}
                        </p>
                        <p className="mt-3 max-w-64 text-xs md:text-base">
                            {description}
                        </p>
                        <p className="text-orange-500 mt-10">
                            Registration will be open soon
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

const Events = () => {
    return (
        <section id="events" className="bg-black pb-52">
            <div className="container mx-auto px-3 md:px-10">
                <div className="px-5 py-32">
                    <p className="font-circular-web text-lg text-blue-50">
                        Into the Event Layer
                    </p>
                    <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
                        All The Events of UIU CSE Fest 2025
                    </p>
                </div>

                <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
                    <BentoCard
                        src="videos/feature-1.mp4"
                        title={
                            <>
                                UIUIUPC - UIU <b>Inter-University</b> Programming
                                Contest 2025
                            </>
                        }
                        description=" "
                        category="University"
                    />
                </BentoTilt>

                <div className="grid h-[135vh] w-full grid-cols-2 grid-rows-3 gap-7">
                    <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
                        <BentoCard
                            src="videos/feature-2.mp4"
                            title={
                                <>
                                    Inter-University <b>Blockchain</b> Olympiad
                                    2025
                                </>
                            }
                            description=" "
                            category="University"
                        />
                    </BentoTilt>

                    <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
                        <BentoCard
                            src="videos/feature-3.mp4"
                            title={<>ICT Olympiad</>}
                            description=" "
                            category="College"
                        />
                    </BentoTilt>
                    <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
                        <BentoCard
                            src="videos/feature-3.mp4"
                            title={<>Project Show</>}
                            description=" "
                            category="University"
                        />
                    </BentoTilt>

                    <BentoTilt className="bento-tilt_1">
                        <BentoCard
                            src="videos/feature-3.mp4"
                            title={<>LFR-TrackBots</>}
                            description=" "
                            category="College & University"
                        />
                    </BentoTilt>
                    <BentoTilt className="bento-tilt_1">
                        <BentoCard
                            src="videos/feature-3.mp4"
                            title={<>ROBO SOCCER-Whistle Mania</>}
                            description=" "
                            category="College & University"
                        />
                    </BentoTilt>
                </div>
            </div>
        </section>
    );
};

export default Events;

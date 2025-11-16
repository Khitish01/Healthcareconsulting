// FeatureCard.tsx
import React from "react";

export type CornerPosition = "top-left" | "top-right" | "bottom-left" | "bottom-right";

export interface AccentConfig {
    /** Corner where this accent SVG should appear */
    position: CornerPosition;
    /** Color of this accent; if omitted, a neutral default is used */
    color?: string;
    /** Extra classes to tweak size/position (w-20 h-20, opacity, etc.) */
    className?: string;
    /** Custom transform override if you want to adjust the shape */
    pathTransform?: string;
}

export interface OverlayIconConfig {
    /** Corner where this icon / element should appear */
    position: CornerPosition;
    /** Any JSX (icon, button, badge, etc.) */
    content: React.ReactNode;
    /** Extra classes (offsets, custom spacing, etc.) */
    className?: string;
}

interface FeatureCardProps {
    /** List of decorative accent SVG blobs */
    accents?: AccentConfig[];

    /** List of overlay icons/badges/buttons in corners */
    overlayIcons?: OverlayIconConfig[];

    /** Extra classes for the card container (height, width, padding, etc.) */
    className?: string;

    /** Main content of the card (fully controlled by parent) */
    children: React.ReactNode;
}

const DEFAULT_ACCENT_COLOR = "#eaebeb";

const accentBaseVariants: Record<
    CornerPosition,
    { wrapperClass: string; pathTransform?: string }
> = {
    "top-right": { wrapperClass: "-top-px -right-px" },
    "top-left": {
        wrapperClass: "-top-px -left-px",
        pathTransform: "scale(-1, 1) translate(-111, 0)",
    },
    "bottom-right": {
        wrapperClass: "-bottom-px -right-px",
        pathTransform: "scale(1, -1) translate(0, -111)",
    },
    "bottom-left": {
        wrapperClass: "-bottom-px -left-px",
        pathTransform: "scale(-1, -1) translate(-111, -111)",
    },
};

const cornerPlacement: Record<CornerPosition, string> = {
    "top-right": "top-5 right-5",
    "top-left": "top-5 left-5",
    "bottom-right": "bottom-5 right-5",
    "bottom-left": "bottom-5 left-5",
};

export const FeatureCard: React.FC<FeatureCardProps> = ({
    accents = [],
    overlayIcons = [],
    className = "",
    children,
}) => {
    const renderAccentSvg = (
        position: CornerPosition,
        color?: string,
        overrideClassName?: string,
        overrideTransform?: string,
        index?: number,
    ) => {
        const base = accentBaseVariants[position];

        return (
            <div
            key={index}
                className={`pointer-events-none z-1 absolute w-28 h-28 opacity-100 ${base.wrapperClass} ${overrideClassName || ""
                    }`}
            >
                <svg
                    fill="none"
                    height="111"
                    viewBox="0 0 111 111"
                    width="111"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full"
                >
                    <path
                        clipRule="evenodd"
                        d="M0 0C19.33 0 35 15.67 35 35V41C35 60.33 50.67 76 70 76H76C95.33 76 111 91.67 111 111V0H0Z"
                        fill={color || DEFAULT_ACCENT_COLOR}
                        fillRule="evenodd"
                        transform={overrideTransform || base.pathTransform}
                    />
                </svg>
            </div>
        );
    };

    return (
        <div
            className={`relative bg-white p-10 rounded-3xl text-center transition-transform duration-300 hover:-translate-y-2 flex flex-col ${className}`}
        >
            {/* Decorative accents (multiple allowed) */}
            {accents.map((acc, idx) =>
                renderAccentSvg(acc.position, acc.color, acc.className, acc.pathTransform,idx)
            )}

            {/* Overlay icons / buttons / badges (multiple allowed) */}
            {overlayIcons.map((icon, idx) => (
                <div
                    key={idx}
                    className={`absolute z-2 ${cornerPlacement[icon.position]} ${icon.className || ""}`}
                >
                    {icon.content}
                </div>
            ))}

            {/* Main inner content controlled by parent */}
            <div className="flex flex-col flex-1">{children}</div>
        </div>
    );
};

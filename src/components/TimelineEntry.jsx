import React from "react";

const TimelineEntry = ({date, place, title, placeLink, highlights, icon}) => {

    const HighlightsElements = [];
    highlights.forEach((highlight, index) => {
        HighlightsElements.push(<li key={index} className="text-sm">{highlight}</li>);
    });

    return (
        <li className="ml-10 pr-20 w-full h-1/5 flex flex-col relative pt-3 mb-4">
            <p className="text-xs text-gray-700 dark:text-gray-300 transition-colors duration-300">{date}</p>
            <h2 className="font-semibold text-black dark:text-white transition-colors duration-300">{place}</h2>
            <p className="text-sm text-gray-700 dark:text-gray-300 transition-colors duration-300">{title}</p>
            <ul className="text-gray-700 dark:text-gray-300 pl-5 list-disc list-outside transition-colors duration-300">
            {HighlightsElements}
            </ul>
            <a className="absolute -left-16 top-4 flex items-center justify-center rounded-full bg-black dark:bg-white transition-colors duration-300">
                <span className="relative flex shrink-0 overflow-hidden rounded-full size-12 border border-black dark:border-white transition-colors duration-300">
                    <a className="aspect-square h-full w-full" href={placeLink} target="_blank"><img className="aspect-square h-full w-full bg-background object-contain" src={icon} alt={place}/></a>
                </span>
            </a>
        </li>
    )
}
export default TimelineEntry;
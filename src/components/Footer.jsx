import React from "react";
import github from '../assets/logos/github.svg';
import x from '../assets/logos/x.svg';
import linkedin from '../assets/logos/linkedin.svg';

const Footer = () => {
    return (
        <footer className="p-4 w-full flex flex-row text-white justify-between items-center lg:items-start border-t border-gray-300 dark:border-gray-700 pt-3 pb-8 transition-colors duration-300">
            <p className="font-semibold text-black dark:text-white transition-colors duration-300">© 2025</p>
            <div className="flex flex-row justify-evenly w-24">
            <a href="https://github.com/brtkglnski" target="_blank" rel="noopener noreferrer" className=" w-6 h-6"><img className="w-6 h-6 filter dark:invert transition duration-300" src={github} alt="github" /></a>
                        <a href="https://x.com/teehfuel" target="_blank" rel="noopener noreferrer" className="w-6 h-6"><img className="w-6 h-6 filter invert dark:filter-none transition duration-300" src={x} alt="x" /></a>
                        <a href="https://linkedin.com/in/bartosz-gliński-44539b1b9" target="_blank" rel="noopener noreferrer" className="w-6 h-6 filter invert dark:filter-none transition duration-300"><img className="w-6 h-6" src={linkedin} alt="linkedIn" /></a>
            </div>
        </footer>
    )
}
export default Footer;
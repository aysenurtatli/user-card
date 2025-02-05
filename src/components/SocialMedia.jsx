import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaDribbble } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";

function SocialMedia() {

    const socialIcons = [
        { name: "instagram", comp: FaInstagram },
        { name: "twitter", comp: FaXTwitter },
        { name: "dribbble", comp: FaDribbble },
        { name: "linkedin", comp: FaLinkedin },
        { name: "behance", comp: FaBehance },
    ]
    return (
        <div className='flex gap-5 text-2xl my-4'>
            {socialIcons.map((icon, index) => {
                const IconComponent = icon.comp;
                return (
                    <a
                        href="#"
                        key={index}
                        className='hover:text-teal-700 duration-200 dark:text-teal-100'
                    >
                        <IconComponent />
                    </a>
                )
            })}
        </div>
    )
}

export default SocialMedia
import React from 'react';
import {SocialIcon} from 'react-social-icons';
import {SiGmail} from "react-icons/si";
import {AiFillPhone} from "react-icons/ai";
import {ImWhatsapp} from "react-icons/im";


const Contact = () => {
    return (
        <section className="bg-gray-100 pt-8 dark:bg-black transition duration-500 md:min-h-[60vh]" id="Contact">
            <h2 className="grandTitre dark:text-white pb-6">Me <span className="text">Contacter</span></h2>
            <div
                className="bg-gray-100 dark:bg-black transition duration-500 flex flex-col items-center justify-center pb-16">
                <div className="">
                    <SocialIcon url="https://twitter.com/Tojoniaina01" target="_blank"
                                className="mx-2 my-4 dark:bg-white dark:rounded-full"/>
                    <SocialIcon url="https://www.facebook.com/Tojo.kael/" target="_blank"
                                className="mx-2 my-4 dark:bg-white dark:rounded-full"/>
                    <SocialIcon url="https://www.linkedin.com/in/tojoniaina-rajoharimbola-a67260250/" target="_blank"
                                className="mx-2 my-4 dark:bg-white dark:rounded-full"/>
                    <SocialIcon url="https://github.com/TojoNiaina01" target="_blank"
                                className="mx-2 my-4 dark:bg-white dark:rounded-full"/>
                </div>
                <span className="dark:text-white font-extrabold text-2xl pb-2">&</span>
                <div className="flex gap-x-3">
                    <div className="bg-gray-200 flex items-center gap-x-2 px-4 py-2 rounded-lg dark:bg-gray-600 dark:text-white">
                        <SiGmail className="h-6 w-6 text-red-500"/>
                        <a href="mailto:tojokael01@gmail.com">Gmail</a>
                    </div>
                    <div className="bg-gray-200 flex items-center gap-x-2 px-4 py-2 rounded-lg dark:bg-gray-600 dark:text-white">
                        <ImWhatsapp className="h-6 w-6 text-green-500"/>
                        <a href="https://wa.me/261345501519">Whatsapp</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact

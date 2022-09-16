import React, {useRef, useState} from 'react';

const Navbar = () => {

    const menuBurger = useRef();
    const [menu, setMenu] = useState(false);
    useState(false)


    return (
        <header className="">
            <nav>
                <div className="flex justify-between items-center text-[#171614] dark:text-[#fff9fb] -z-20">
                    <div className="flex items-center gap-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                             stroke="#bb0a21" className="w-8 h-8 md:w-12 md:h-12">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z"/>
                        </svg>
                        <h3 className="text-xl tracking-wide font-semibold transition duration-300 md:text-xl md:tracking-wider md:font-bold">Tojo <span className="h-1 w-1 rounded-full bg-[#bb0a21] inline-block"></span> </h3>
                    </div>
                    <div className="absolute top-[25px] right-[30px] z-30" ref={menuBurger}
                         onClick={() => setMenu(!menu)}>
                        {menu === true ?
                            (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#bb0a21"
                                  className="w-8 h-8 md:w-12 md:h-12">
                                    <path fillRule="#bb0a21"
                                          d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                                          clipRule="#ff6348"/>
                                </svg>
                            )
                            :
                            (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#bb0a21"
                                  className="w-8 h-8 md:w-12 md:h-12">
                                <path fillRule="#bb0a21"
                                      d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                                      clipRule="ff6348"/>
                            </svg>)}
                    </div>
                </div>
                <div
                    className={`${menu === true ? "" : "transform translate-y-[-101vh]"} transition transform duration-1000 absolute top-0 left-0 h-screen w-full bg-white dark:bg-black z-10`}></div>
                <div
                    className={`${menu === true ? "" : "transform translate-y-[-101vh]"} transition transform duration-1000 absolute top-0 left-0 h-screen w-full z-20`}>
                    <div
                        className="absolute top-1/2 left-1/2 transform translate-x-[-50%] translate-y-[-50%] transition-opacity">
                        <ul>
                            <li className="link">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                         viewBox="0 0 24 24" strokeWidth={1.5}
                                         stroke="currentColor" className="w-6 h-6 md:w-8 md:h-8">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"/>
                                    </svg>
                                </span>
                                <p>Accueil.</p>
                            </li>
                            <li className="link">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 md:w-8 md:h-8">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 019 9v.375M10.125 2.25A3.375 3.375 0 0113.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 013.375 3.375M9 15l2.25 2.25L15 12"/>
                                </svg>
                                <p>Services.</p>
                            </li>
                            <li className="link">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 md:w-8 md:h-8">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M15 13.5H9m4.06-7.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"/>
                                </svg>
                                <p>Projets.</p>
                            </li>
                            <li className="link">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 md:w-8 md:h-8">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"/>
                                </svg>
                                <p>Contact.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Navbar

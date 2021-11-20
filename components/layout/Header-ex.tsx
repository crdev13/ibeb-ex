import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from "next/router";

type Props = {
    title?: string
}

const Header = ({ title = 'This is the default title' }: Props) => {
    const router = useRouter()
    const [isMobile, setIsMobile] = useState(false);
    return(
        <header className="site-header">
            <div className="container">
                <a href="#" className="branding">
                    <Image
                        src="/logos/logo.png"
                        className="logo"
                        height={67}
                        width={67}
                    />
                    <h1 className="site-title">{title}</h1>
                </a>

                <div className="main-navigation" onClick={()=>(setIsMobile(false))}>
                    <button className="menu-toggle" onClick={()=>(setIsMobile(!isMobile))}><i className="fa fa-bars"></i> Menu</button>
                    <ul className="menu">
                        <li className={router.pathname == "/" ? "menu-item current-menu-item" : "menu-item"}>
                            <Link href="/">
                                <a>Principal <small>Home Mobile</small></a>
                            </Link>
                        </li>
                        <li className={router.pathname.startsWith("/pastores") ? "menu-item current-menu-item" : "menu-item"}>
                            <Link href="/pastores">
                                <a>Pastores <small>Pastors</small></a>
                            </Link>
                        </li>
                        <li className={router.pathname.startsWith("/sermones") ? "menu-item current-menu-item" : "menu-item"}>
                            <Link href="/sermones">
                                <a>Seremones <small>Sermons</small></a>
                            </Link>
                        </li>
                        <li className={router.pathname.startsWith("/eventos") ? "menu-item current-menu-item" : "menu-item"}>
                            <Link href="/eventos">
                                <a>Eventos <small>Events</small></a>
                            </Link>
                        </li>
                        <li className={router.pathname.startsWith("/familias") ? "menu-item current-menu-item" : "menu-item"}>
                            <Link href="/familias">
                                <a>Familias <small>Families</small></a>
                            </Link>
                        </li>
                        <li className={router.pathname.startsWith("/instituto") ? "menu-item current-menu-item" : "menu-item"}>
                            <Link href="/instituto">
                                <a>Instituto <small>Institute</small></a>
                            </Link>
                        </li>
                        <li className={router.pathname.startsWith("/contacto") ? "menu-item current-menu-item" : "menu-item"}>
                            <Link href="/contacto">
                                <a>Contacto <small>Contact</small></a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;
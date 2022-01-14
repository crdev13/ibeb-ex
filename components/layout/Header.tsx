import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from "next/router";

type Props = {
    title?: string
}

const Header = ({ title = 'This is the default title' }: Props) => {
    const router = useRouter()
    const [showItems, setShowItems] = useState(false);
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

                <button className="flex-menu-toggle"
                    onClick={()=>(setShowItems(!showItems))}
                ><i className="fa fa-bars"></i> Menu</button>

                <div className="flex-menu-container">
                    <div className={router.pathname == "/" ? "flex-menu-item current-menu-item" : "flex-menu-item"}>
                        <Link href="/">
                            <a>Principal <small>Home Mobile</small></a>
                        </Link>
                    </div>
                    <div className={router.pathname.startsWith("/pastores") ? "flex-menu-item current-menu-item" : "flex-menu-item"}>
                        <Link href="/pastores">
                            <a>Pastores <small>Pastors</small></a>
                        </Link>
                    </div>
                    <div className={router.pathname.startsWith("/sermones") ? "flex-menu-item current-menu-item" : "flex-menu-item"}>
                        <Link href="/sermones">
                            <a>Seremones <small>Sermons</small></a>
                        </Link>
                    </div>
                    <div className={router.pathname.startsWith("/eventos") ? "flex-menu-item current-menu-item" : "flex-menu-item"}>
                        <Link href="/eventos">
                            <a>Eventos <small>Events</small></a>
                        </Link>
                    </div>
                    <div className={router.pathname.startsWith("/familias") ? "flex-menu-item current-menu-item" : "flex-menu-item"}>
                        <Link href="/familias">
                            <a>Familias <small>Families</small></a>
                        </Link>
                    </div>
                    <div className={router.pathname.startsWith("/instituto") ? "flex-menu-item current-menu-item" : "flex-menu-item"}>
                        <Link href="/instituto">
                            <a>Instituto <small>Institute</small></a>
                        </Link>
                    </div>
                    <div className={router.pathname.startsWith("/contacto") ? "flex-menu-item current-menu-item" : "flex-menu-item"}>
                        <Link href="/contacto">
                            <a>Contacto <small>Contact</small></a>
                        </Link>
                    </div>
                </div>

                { showItems && <div className="flex-mobile-menu-container">
                    <div className={router.pathname == "/" ? "flex-menu-item current-menu-item" : "flex-menu-item"}>
                        <Link href="/">
                            <a>Principal <small>Home Mobile</small></a>
                        </Link>
                    </div>
                    <div className={router.pathname.startsWith("/pastores") ? "flex-menu-item current-menu-item" : "flex-menu-item"}>
                        <Link href="/pastores">
                            <a>Pastores <small>Pastors</small></a>
                        </Link>
                    </div>
                    <div className={router.pathname.startsWith("/sermones") ? "flex-menu-item current-menu-item" : "flex-menu-item"}>
                        <Link href="/sermones">
                            <a>Seremones <small>Sermons</small></a>
                        </Link>
                    </div>
                    <div className={router.pathname.startsWith("/eventos") ? "flex-menu-item current-menu-item" : "flex-menu-item"}>
                        <Link href="/eventos">
                            <a>Eventos <small>Events</small></a>
                        </Link>
                    </div>
                    <div className={router.pathname.startsWith("/familias") ? "flex-menu-item current-menu-item" : "flex-menu-item"}>
                        <Link href="/familias">
                            <a>Familias <small>Families</small></a>
                        </Link>
                    </div>
                    <div className={router.pathname.startsWith("/instituto") ? "flex-menu-item current-menu-item" : "flex-menu-item"}>
                        <Link href="/instituto">
                            <a>Instituto <small>Institute</small></a>
                        </Link>
                    </div>
                    <div className={router.pathname.startsWith("/contacto") ? "flex-menu-item current-menu-item" : "flex-menu-item"}>
                        <Link href="/contacto">
                            <a>Contacto <small>Contact</small></a>
                        </Link>
                    </div>
                </div>
                }
            </div>
        </header>
    );
};

export default Header;
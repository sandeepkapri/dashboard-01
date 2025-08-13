"use client";

import { useEffect, useRef, useState } from 'react';
import { useSidebar } from '../context/SidebarContext';
import Link from 'next/link';

export default function TopNavbar() {
    const { toggleSidebar } = useSidebar();
    const [searchOpen, setSearchOpen] = useState(false);
    const [languagesOpen, setLanguagesOpen] = useState(false);
    const [notificationsOpen, setNotificationsOpen] = useState(false);
    const [messagesOpen, setMessagesOpen] = useState(false);
    const [profileOpen, setProfileOpen] = useState(false);
    const [featuresOpen, setFeaturesOpen] = useState(false);
    const [technologyOpen, setTechnologyOpen] = useState(false);
    const [ecommerceOpen, setEcommerceOpen] = useState(false);
    const headerRef = useRef(null);

    useEffect(() => {
        if (searchOpen) document.body.classList.add('search-open');
        else document.body.classList.remove('search-open');
        return () => document.body.classList.remove('search-open');
    }, [searchOpen]);

    useEffect(() => {
        function handleDocumentClick(event) {
            if (!headerRef.current) return;
            if (!headerRef.current.contains(event.target)) closeAllDropdowns();
        }
        function handleKeydown(event) {
            if (event.key === 'Escape') {
                setSearchOpen(false);
                closeAllDropdowns();
            }
        }
        document.addEventListener('click', handleDocumentClick);
        document.addEventListener('keydown', handleKeydown);
        return () => {
            document.removeEventListener('click', handleDocumentClick);
            document.removeEventListener('keydown', handleKeydown);
        };
    }, []);

    function closeAllDropdowns() {
        setLanguagesOpen(false);
        setNotificationsOpen(false);
        setMessagesOpen(false);
        setProfileOpen(false);
        setFeaturesOpen(false);
        setTechnologyOpen(false);
        setEcommerceOpen(false);
    }
    function toggleOnly(setter, current) {
        closeAllDropdowns();
        setter(!current);
    }

    return (
        <div className="page-header">
            <div className="search-form">
                <form action="#" method="GET">
                    <div className="input-group">
                        <input className="form-control search-input" name="search" placeholder="Type something..." type="text" />
                        <span className="input-group-btn">
                            <span id="close-search" onClick={() => setSearchOpen(false)}>
                                <i className="ion-ios-close-empty"></i>
                            </span>
                        </span>
                    </div>
                </form>
            </div>

            <div className="navbar navbar-expand-lg" ref={headerRef}>
                <ul className="list-inline list-unstyled mg-r-20">
                    <li className="list-inline-item align-text-top">
                        <a className="hidden-xs hidden-sm" href="#" id="collapsed-sidebar-toggle-button" onClick={(e) => { e.preventDefault(); e.stopPropagation(); toggleSidebar(); }}>
                            <div className="hamburger-menu">
                                <div className="hamburger-menu-line"></div>
                                <div className="hamburger-menu-line"></div>
                                <div className="hamburger-menu-line"></div>
                            </div>
                        </a>
                    </li>
                </ul>

                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className={`dropdown mega-dropdown mg-t-5 ${featuresOpen ? 'open' : ''}`}>
                            <a className="dropdown-toggle btn mg-r-10" data-toggle="dropdown" aria-haspopup="true" aria-expanded={featuresOpen} onClick={(e) => { e.preventDefault(); toggleOnly(setFeaturesOpen, featuresOpen); }}>Features</a>
                            <div className={`dropdown-menu mega-menu pd-15 ${featuresOpen ? 'show' : ''}`}>
                                <div className="row">
                                    <div className="col-md-6 col-xl-3 sub-menu mb-xl-0 mb-4">
                                        <h6 className="tx-dark tx-13 tx-semibold">Featured</h6>
                                        <ul className="list-unstyled">
                                            <li><a className="menu-item pl-0 tx-13 tx-normal" href=""><i className="icon-arrow-right-circle pl-1 pr-2"></i>Lorem ipsum dolor sit amet</a></li>
                                            <li><a className="menu-item pl-0 tx-13 tx-normal" href=""><i className="icon-arrow-right-circle pl-1 pr-2"></i>Consectetur adipiscing elit</a></li>
                                            <li><a className="menu-item pl-0 tx-13 tx-normal" href=""><i className="icon-arrow-right-circle pl-1 pr-2"></i>Sed do eiusmod tempor incididunt</a></li>
                                            <li><a className="menu-item pl-0 tx-13 tx-normal" href=""><i className="icon-arrow-right-circle pl-1 pr-2"></i>Ut labore et dolore magna</a></li>
                                            <li><a className="menu-item pl-0 tx-13 tx-normal" href=""><i className="icon-arrow-right-circle pl-1 pr-2"></i>Ut enim ad minim veniam</a></li>
                                        </ul>
                                    </div>
                                    <div className="col-md-6 col-xl-3 sub-menu mb-xl-0 mb-4">
                                        <h6 className="tx-dark tx-13 tx-semibold">Related</h6>
                                        <ul className="list-unstyled">
                                            <li><a className="menu-item pl-0 tx-13 tx-normal" href=""><i className="icon-options pl-1 pr-2"></i>Screen Protectors</a></li>
                                            <li><a className="menu-item pl-0 tx-13 tx-normal" href=""><i className="icon-options pl-1 pr-2"></i>Mobile Phone Accessories</a></li>
                                            <li><a className="menu-item pl-0 tx-13 tx-normal" href=""><i className="icon-options pl-1 pr-2"></i>Mobile Phone Cables</a></li>
                                            <li><a className="menu-item pl-0 tx-13 tx-normal" href=""><i className="icon-options pl-1 pr-2"></i>Mobile Phone Chargers</a></li>
                                            <li><a className="menu-item pl-0 tx-13 tx-normal" href=""><i className="icon-options pl-1 pr-2"></i>Mobile Phone Lenses</a></li>
                                        </ul>
                                    </div>
                                    <div className="col-md-6 col-xl-3 sub-menu mb-md-0 mb-xl-0 mb-4">
                                        <h6 className="tx-dark tx-13 tx-semibold">Design</h6>
                                        <ul className="list-unstyled">
                                            <li><a className="menu-item pl-0 tx-13 tx-normal" href=""><i className="icon-arrow-right-circle pl-1 pr-2"></i>UI/UX Design</a></li>
                                            <li><a className="menu-item pl-0 tx-13 tx-normal" href=""><i className="icon-arrow-right-circle pl-1 pr-2"></i>Web Design</a></li>
                                            <li><a className="menu-item pl-0 tx-13 tx-normal" href=""><i className="icon-arrow-right-circle pl-1 pr-2"></i>Mobile App Design</a></li>
                                            <li><a className="menu-item pl-0 tx-13 tx-normal" href=""><i className="icon-arrow-right-circle pl-1 pr-2"></i>Graphic Design</a></li>
                                            <li><a className="menu-item pl-0 tx-13 tx-normal" href=""><i className="icon-arrow-right-circle pl-1 pr-2"></i>Logo Design</a></li>
                                        </ul>
                                    </div>
                                    <div className="col-md-6 col-xl-3 sub-menu">
                                        <h6 className="tx-dark tx-13 tx-semibold">Development</h6>
                                        <ul className="list-unstyled">
                                            <li><a className="menu-item pl-0 tx-13 tx-normal" href=""><i className="icon-arrow-right-circle pl-1 pr-2"></i>Frontend Development</a></li>
                                            <li><a className="menu-item pl-0 tx-13 tx-normal" href=""><i className="icon-arrow-right-circle pl-1 pr-2"></i>Backend Development</a></li>
                                            <li><a className="menu-item pl-0 tx-13 tx-normal" href=""><i className="icon-arrow-right-circle pl-1 pr-2"></i>Mobile Development</a></li>
                                            <li><a className="menu-item pl-0 tx-13 tx-normal" href=""><i className="icon-arrow-right-circle pl-1 pr-2"></i>API Development</a></li>
                                            <li><a className="menu-item pl-0 tx-13 tx-normal" href=""><i className="icon-arrow-right-circle pl-1 pr-2"></i>Database Design</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </li>

                        {/* Technology */}
                        <li className={`dropdown mega-dropdown mg-t-5 ${technologyOpen ? 'open' : ''}`}>
                            <a
                                className="dropdown-toggle btn mg-r-10"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded={technologyOpen}
                                onClick={(e) => { e.preventDefault(); toggleOnly(setTechnologyOpen, technologyOpen); }}
                            >
                                Technology
                            </a>
                            <div className={`dropdown-menu mega-menu pd-15 ${technologyOpen ? 'show' : ''}`}>
                                <div className="row">
                                    <div className="col-md-6 col-xl-3 sub-menu mb-xl-0 mb-4">
                                        <h6 className="tx-dark tx-13 tx-semibold">Programming</h6>
                                        <ul className="list-unstyled">
                                            <li><a className="menu-item pl-0 tx-13 tx-normal" href=""><i className="icon-arrow-right-circle pl-1 pr-2"></i>JavaScript</a></li>
                                            <li><a className="menu-item pl-0 tx-13 tx-normal" href=""><i className="icon-arrow-right-circle pl-1 pr-2"></i>Python</a></li>
                                            <li><a className="menu-item pl-0 tx-13 tx-normal" href=""><i className="icon-arrow-right-circle pl-1 pr-2"></i>Java</a></li>
                                            <li><a className="menu-item pl-0 tx-13 tx-normal" href=""><i className="icon-arrow-right-circle pl-1 pr-2"></i>C++</a></li>
                                            <li><a className="menu-item pl-0 tx-13 tx-normal" href=""><i className="icon-arrow-right-circle pl-1 pr-2"></i>PHP</a></li>
                                        </ul>
                                    </div>
                                    <div className="col-md-6 col-xl-3 sub-menu mb-xl-0 mb-4">
                                        <h6 className="tx-dark tx-13 tx-semibold">Frameworks</h6>
                                        <ul className="list-unstyled">
                                            <li><a className="menu-item pl-0 tx-13 tx-normal" href=""><i className="icon-options pl-1 pr-2"></i>React</a></li>
                                            <li><a className="menu-item pl-0 tx-13 tx-normal" href=""><i className="icon-options pl-1 pr-2"></i>Vue.js</a></li>
                                            <li><a className="menu-item pl-0 tx-13 tx-normal" href=""><i className="icon-options pl-1 pr-2"></i>Angular</a></li>
                                            <li><a className="menu-item pl-0 tx-13 tx-normal" href=""><i className="icon-options pl-1 pr-2"></i>Node.js</a></li>
                                            <li><a className="menu-item pl-0 tx-13 tx-normal" href=""><i className="icon-options pl-1 pr-2"></i>Django</a></li>
                                        </ul>
                                    </div>
                                    <div className="col-md-6 col-xl-3 sub-menu mb-md-0 mb-xl-0 mb-4">
                                        <h6 className="tx-dark tx-13 tx-semibold">Tools</h6>
                                        <ul className="list-unstyled">
                                            <li><a className="menu-item pl-0 tx-13 tx-normal" href=""><i className="icon-arrow-right-circle pl-1 pr-2"></i>Git</a></li>
                                            <li><a className="menu-item pl-0 tx-13 tx-normal" href=""><i className="icon-arrow-right-circle pl-1 pr-2"></i>Docker</a></li>
                                            <li><a className="menu-item pl-0 tx-13 tx-normal" href=""><i className="icon-arrow-right-circle pl-1 pr-2"></i>VS Code</a></li>
                                            <li><a className="menu-item pl-0 tx-13 tx-normal" href=""><i className="icon-arrow-right-circle pl-1 pr-2"></i>Webpack</a></li>
                                            <li><a className="menu-item pl-0 tx-13 tx-normal" href=""><i className="icon-arrow-right-circle pl-1 pr-2"></i>Postman</a></li>
                                        </ul>
                                    </div>
                                    <div className="col-md-6 col-xl-3 sub-menu">
                                        <h6 className="tx-dark tx-13 tx-semibold">Cloud</h6>
                                        <ul className="list-unstyled">
                                            <li><a className="menu-item pl-0 tx-13 tx-normal" href=""><i className="icon-arrow-right-circle pl-1 pr-2"></i>AWS</a></li>
                                            <li><a className="menu-item pl-0 tx-13 tx-normal" href=""><i className="icon-arrow-right-circle pl-1 pr-2"></i>Azure</a></li>
                                            <li><a className="menu-item pl-0 tx-13 tx-normal" href=""><i className="icon-arrow-right-circle pl-1 pr-2"></i>Google Cloud</a></li>
                                            <li><a className="menu-item pl-0 tx-13 tx-normal" href=""><i className="icon-arrow-right-circle pl-1 pr-2"></i>Heroku</a></li>
                                            <li><a className="menu-item pl-0 tx-13 tx-normal" href=""><i className="icon-arrow-right-circle pl-1 pr-2"></i>DigitalOcean</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </li>

                        {/* Ecommerce */}
                        <li className={`dropdown mega-dropdown mg-t-5 ${ecommerceOpen ? 'open' : ''}`}>
                            <a
                                className="dropdown-toggle btn mg-r-10"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded={ecommerceOpen}
                                onClick={(e) => { e.preventDefault(); toggleOnly(setEcommerceOpen, ecommerceOpen); }}
                            >
                                Ecommerce
                            </a>
                            <div className={`dropdown-menu mega-menu pd-15 ${ecommerceOpen ? 'show' : ''}`}>
                                <div className="row">
                                    <div className="col-md-6 col-xl-3 sub-menu mb-xl-0 mb-4">
                                        <h6 className="tx-dark tx-13 tx-semibold">Products</h6>
                                        <ul className="list-unstyled">
                                            <li><a className="menu-item pl-0 tx-13 tx-normal" href=""><i className="icon-arrow-right-circle pl-1 pr-2"></i>Electronics</a></li>
                                            <li><a className="menu-item pl-0 tx-13 tx-normal" href=""><i className="icon-arrow-right-circle pl-1 pr-2"></i>Clothing</a></li>
                                            <li><a className="menu-item pl-0 tx-13 tx-normal" href=""><i className="icon-arrow-right-circle pl-1 pr-2"></i>Home & Garden</a></li>
                                            <li><a className="menu-item pl-0 tx-13 tx-normal" href=""><i className="icon-arrow-right-circle pl-1 pr-2"></i>Sports</a></li>
                                            <li><a className="menu-item pl-0 tx-13 tx-normal" href=""><i className="icon-arrow-right-circle pl-1 pr-2"></i>Books</a></li>
                                        </ul>
                                    </div>
                                    <div className="col-md-6 col-xl-3 sub-menu mb-xl-0 mb-4">
                                        <h6 className="tx-dark tx-13 tx-semibold">Services</h6>
                                        <ul className="list-unstyled">
                                            <li><a className="menu-item pl-0 tx-13 tx-normal" href=""><i className="icon-options pl-1 pr-2"></i>Payment Processing</a></li>
                                            <li><a className="menu-item pl-0 tx-13 tx-normal" href=""><i className="icon-options pl-1 pr-2"></i>Shipping</a></li>
                                            <li><a className="menu-item pl-0 tx-13 tx-normal" href=""><i className="icon-options pl-1 pr-2"></i>Customer Support</a></li>
                                            <li><a className="menu-item pl-0 tx-13 tx-normal" href=""><i className="icon-options pl-1 pr-2"></i>Inventory Management</a></li>
                                            <li><a className="menu-item pl-0 tx-13 tx-normal" href=""><i className="icon-options pl-1 pr-2"></i>Analytics</a></li>
                                        </ul>
                                    </div>
                                    <div className="col-md-6 col-xl-3 sub-menu mb-md-0 mb-xl-0 mb-4">
                                        <h6 className="tx-dark tx-13 tx-semibold">Marketing</h6>
                                        <ul className="list-unstyled">
                                            <li><a className="menu-item pl-0 tx-13 tx-normal" href=""><i className="icon-arrow-right-circle pl-1 pr-2"></i>SEO</a></li>
                                            <li><a className="menu-item pl-0 tx-13 tx-normal" href=""><i className="icon-arrow-right-circle pl-1 pr-2"></i>Social Media</a></li>
                                            <li><a className="menu-item pl-0 tx-13 tx-normal" href=""><i className="icon-arrow-right-circle pl-1 pr-2"></i>Email Marketing</a></li>
                                            <li><a className="menu-item pl-0 tx-13 tx-normal" href=""><i className="icon-arrow-right-circle pl-1 pr-2"></i>PPC</a></li>
                                            <li><a className="menu-item pl-0 tx-13 tx-normal" href=""><i className="icon-arrow-right-circle pl-1 pr-2"></i>Content Marketing</a></li>
                                        </ul>
                                    </div>
                                    <div className="col-md-6 col-xl-3 sub-menu">
                                        <h6 className="tx-dark tx-13 tx-semibold">Platforms</h6>
                                        <ul className="list-unstyled">
                                            <li><a className="menu-item pl-0 tx-13 tx-normal" href=""><i className="icon-arrow-right-circle pl-1 pr-2"></i>Shopify</a></li>
                                            <li><a className="menu-item pl-0 tx-13 tx-normal" href=""><i className="icon-arrow-right-circle pl-1 pr-2"></i>WooCommerce</a></li>
                                            <li><a className="menu-item pl-0 tx-13 tx-normal" href=""><i className="icon-arrow-right-circle pl-1 pr-2"></i>Magento</a></li>
                                            <li><a className="menu-item pl-0 tx-13 tx-normal" href=""><i className="icon-arrow-right-circle pl-1 pr-2"></i>BigCommerce</a></li>
                                            <li><a className="menu-item pl-0 tx-13 tx-normal" href=""><i className="icon-arrow-right-circle pl-1 pr-2"></i>Custom Solutions</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="header-right pull-right">
                    <ul className="list-inline justify-content-end">
                        <li className="list-inline-item align-middle">
                            <a href="#" id="search-button" onClick={(e) => { e.preventDefault(); setSearchOpen(true); }}>
                                <i className="ion-ios-search-strong tx-20"></i>
                            </a>
                        </li>
                        <li className={`list-inline-item align-middle dropdown hidden-xs ${languagesOpen ? 'open' : ''}`}>
                            <a href="" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded={languagesOpen} onClick={(e) => { e.preventDefault(); toggleOnly(setLanguagesOpen, languagesOpen); }}>
                                <i className="flag-icon flag-icon-us"></i>
                            </a>
                            <ul className={`dropdown-menu languages-dropdown shadow-2 ${languagesOpen ? 'show' : ''}`}>
                                <li><a href="" data-lang="en"><i className="flag-icon flag-icon-us mr-2"></i><span>English-US</span></a></li>
                                <li><a href="" data-lang="es"><i className="flag-icon flag-icon-es mr-2"></i><span>Spanish</span></a></li>
                                <li><a href="" data-lang="fr"><i className="flag-icon flag-icon-fr mr-2"></i><span>French</span></a></li>
                                <li><a href="" data-lang="gr"><i className="flag-icon flag-icon-de mr-2"></i><span>German</span></a></li>
                                <li><a href="" data-lang="ru"><i className="flag-icon flag-icon-ru mr-2"></i><span>Russian</span></a></li>
                                <li><a href="" data-lang="ru"><i className="flag-icon flag-icon-gb mr-2"></i><span>English-UK</span></a></li>
                            </ul>
                        </li>
                        <li className={`list-inline-item dropdown hidden-xs ${notificationsOpen ? 'open' : ''}`}>
                            <a className="notification-icon" href="" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded={notificationsOpen} onClick={(e) => { e.preventDefault(); toggleOnly(setNotificationsOpen, notificationsOpen); }}>
                                <i className="icon-bell tx-16"></i>
                                <span className="notification-count wave in"></span>
                            </a>
                            <div className={`dropdown-menu dropdown-menu-right shadow-2 ${notificationsOpen ? 'show' : ''}`}></div>
                        </li>
                        <li className={`list-inline-item dropdown hidden-xs ${messagesOpen ? 'open' : ''}`}>
                            <a className="message-icon" href="" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded={messagesOpen} onClick={(e) => { e.preventDefault(); toggleOnly(setMessagesOpen, messagesOpen); }}>
                                <i className="icon-envelope tx-16"></i>
                                <span className="messages-count wave in"></span>
                            </a>
                            <div className={`dropdown-menu dropdown-menu-right shadow-2 ${messagesOpen ? 'show' : ''}`}></div>
                        </li>
                        <li className={`list-inline-item dropdown ${profileOpen ? 'open' : ''}`}>
                            <a href="" data-toggle="dropdown" aria-haspopup="true" aria-expanded={profileOpen} onClick={(e) => { e.preventDefault(); toggleOnly(setProfileOpen, profileOpen); }}>
                                <span className="select-profile">Hi, John!</span>
                                <img src="/assets/images/avatar/avatar1.png" className="img-fluid wd-35 ht-35 rounded-circle" alt="" />
                            </a>
                            <div className={`dropdown-menu dropdown-menu-right dropdown-profile shadow-2 ${profileOpen ? 'show' : ''}`}></div>
                        </li>
                        <li className="list-inline-item dropdown hidden-xs">
                            <a className="settings-icon" id="settingSidebarTrigger" href="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="icon-settings tx-16"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

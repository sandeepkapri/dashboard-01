'use client';

import { useEffect, useRef, useState } from 'react';
import { useSidebar } from '../context/SidebarContext';
import Link from 'next/link';

export default function Header() {
  const { toggleSidebar } = useSidebar();

  // Local UI state to replicate template JS behaviors
  const [searchOpen, setSearchOpen] = useState(false);
  const [languagesOpen, setLanguagesOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [messagesOpen, setMessagesOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const [technologyOpen, setTechnologyOpen] = useState(false);
  const [ecommerceOpen, setEcommerceOpen] = useState(false);
  const headerRef = useRef(null);

  // Open/close the search overlay by toggling a body class used by CSS
  useEffect(() => {
    if (searchOpen) {
      document.body.classList.add('search-open');
    } else {
      document.body.classList.remove('search-open');
    }
    return () => {
      document.body.classList.remove('search-open');
    };
  }, [searchOpen]);

  // Close menus on outside click or ESC press
  useEffect(() => {
    function handleDocumentClick(event) {
      if (!headerRef.current) return;
      if (!headerRef.current.contains(event.target)) {
        closeAllDropdowns();
      }
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
    // close others first
    closeAllDropdowns();
    setter(!current);
  }

  return (
    <>
      {/*================================*/}
      {/* Page Header Start */}
      {/*================================*/}
      <div className="page-header">
        <div className="search-form">
          <form action="#" method="GET">
            <div className="input-group">
              <input
                className="form-control search-input"
                name="search"
                placeholder="Type something..."
                type="text"
              />
              <span className="input-group-btn">
                <span id="close-search" onClick={() => setSearchOpen(false)}>
                  <i className="ion-ios-close-empty"></i>
                </span>
              </span>
            </div>
          </form>
        </div>

        {/*================================*/}
        {/* Page Header  Start */}
        {/*================================*/}
        <div className="navbar navbar-expand-lg" ref={headerRef}>
          <ul className="list-inline list-unstyled mg-r-20">
            {/* Remove mobile toggle button to keep only small PC toggle */}
            {/* PC Toggle and Logo */}
            <li className="list-inline-item align-text-top">
              <a
                className="hidden-xs hidden-sm"
                href="#"
                id="collapsed-sidebar-toggle-button"
                onClick={(e) => { e.preventDefault(); e.stopPropagation(); toggleSidebar(); }}
              >
                <div className="hamburger-menu">
                  <div className="hamburger-menu-line"></div>
                  <div className="hamburger-menu-line"></div>
                  <div className="hamburger-menu-line"></div>
                </div>
              </a>
            </li>
          </ul>

          {/*================================*/}
          {/* Mega Menu Start */}
          {/*================================*/}
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              {/* Features */}
              <li className={`dropdown mega-dropdown mg-t-5 ${featuresOpen ? 'open' : ''}`}>
                <a
                  className="dropdown-toggle btn mg-r-10"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded={featuresOpen}
                  onClick={(e) => { e.preventDefault(); toggleOnly(setFeaturesOpen, featuresOpen); }}
                >
                  Features
                </a>
                <div className={`dropdown-menu mega-menu pd-15 ${featuresOpen ? 'show' : ''}`}>
                  <div className="row">
                    <div className="col-md-6 col-xl-3 sub-menu mb-xl-0 mb-4">
                      <h6 className="tx-dark tx-13 tx-semibold">Featured</h6>
                      <ul className="list-unstyled">
                        <li>
                          <a className="menu-item pl-0 tx-13 tx-normal" href="">
                            <i className="icon-arrow-right-circle pl-1 pr-2"></i>Lorem ipsum dolor sit amet
                          </a>
                        </li>
                        <li>
                          <a className="menu-item pl-0 tx-13 tx-normal" href="">
                            <i className="icon-arrow-right-circle pl-1 pr-2"></i>Consectetur adipiscing elit
                          </a>
                        </li>
                        <li>
                          <a className="menu-item pl-0 tx-13 tx-normal" href="">
                            <i className="icon-arrow-right-circle pl-1 pr-2"></i>Sed do eiusmod tempor incididunt
                          </a>
                        </li>
                        <li>
                          <a className="menu-item pl-0 tx-13 tx-normal" href="">
                            <i className="icon-arrow-right-circle pl-1 pr-2"></i>Ut labore et dolore magna
                          </a>
                        </li>
                        <li>
                          <a className="menu-item pl-0 tx-13 tx-normal" href="">
                            <i className="icon-arrow-right-circle pl-1 pr-2"></i>Ut enim ad minim veniam
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-6 col-xl-3 sub-menu mb-xl-0 mb-4">
                      <h6 className="tx-dark tx-13 tx-semibold">Related</h6>
                      <ul className="list-unstyled">
                        <li>
                          <a className="menu-item pl-0 tx-13 tx-normal" href="">
                            <i className="icon-options pl-1 pr-2"></i>Screen Protectors
                          </a>
                        </li>
                        <li>
                          <a className="menu-item pl-0 tx-13 tx-normal" href="">
                            <i className="icon-options pl-1 pr-2"></i>Mobile Phone Accessories
                          </a>
                        </li>
                        <li>
                          <a className="menu-item pl-0 tx-13 tx-normal" href="">
                            <i className="icon-options pl-1 pr-2"></i>Mobile Phone Cables
                          </a>
                        </li>
                        <li>
                          <a className="menu-item pl-0 tx-13 tx-normal" href="">
                            <i className="icon-options pl-1 pr-2"></i>Mobile Phone Chargers
                          </a>
                        </li>
                        <li>
                          <a className="menu-item pl-0 tx-13 tx-normal" href="">
                            <i className="icon-options pl-1 pr-2"></i>Mobile Phone Lenses
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-6 col-xl-3 sub-menu mb-md-0 mb-xl-0 mb-4">
                      <h6 className="tx-dark tx-13 tx-semibold">Design</h6>
                      <ul className="list-unstyled">
                        <li>
                          <a className="menu-item pl-0 tx-13 tx-normal" href="">
                            <i className="icon-arrow-right-circle pl-1 pr-2"></i>UI/UX Design
                          </a>
                        </li>
                        <li>
                          <a className="menu-item pl-0 tx-13 tx-normal" href="">
                            <i className="icon-arrow-right-circle pl-1 pr-2"></i>Web Design
                          </a>
                        </li>
                        <li>
                          <a className="menu-item pl-0 tx-13 tx-normal" href="">
                            <i className="icon-arrow-right-circle pl-1 pr-2"></i>Mobile App Design
                          </a>
                        </li>
                        <li>
                          <a className="menu-item pl-0 tx-13 tx-normal" href="">
                            <i className="icon-arrow-right-circle pl-1 pr-2"></i>Graphic Design
                          </a>
                        </li>
                        <li>
                          <a className="menu-item pl-0 tx-13 tx-normal" href="">
                            <i className="icon-arrow-right-circle pl-1 pr-2"></i>Logo Design
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-6 col-xl-3 sub-menu">
                      <h6 className="tx-dark tx-13 tx-semibold">Development</h6>
                      <ul className="list-unstyled">
                        <li>
                          <a className="menu-item pl-0 tx-13 tx-normal" href="">
                            <i className="icon-arrow-right-circle pl-1 pr-2"></i>Frontend Development
                          </a>
                        </li>
                        <li>
                          <a className="menu-item pl-0 tx-13 tx-normal" href="">
                            <i className="icon-arrow-right-circle pl-1 pr-2"></i>Backend Development
                          </a>
                        </li>
                        <li>
                          <a className="menu-item pl-0 tx-13 tx-normal" href="">
                            <i className="icon-arrow-right-circle pl-1 pr-2"></i>Mobile Development
                          </a>
                        </li>
                        <li>
                          <a className="menu-item pl-0 tx-13 tx-normal" href="">
                            <i className="icon-arrow-right-circle pl-1 pr-2"></i>API Development
                          </a>
                        </li>
                        <li>
                          <a className="menu-item pl-0 tx-13 tx-normal" href="">
                            <i className="icon-arrow-right-circle pl-1 pr-2"></i>Database Design
                          </a>
                        </li>
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
                        <li>
                          <a className="menu-item pl-0 tx-13 tx-normal" href="">
                            <i className="icon-arrow-right-circle pl-1 pr-2"></i>JavaScript
                          </a>
                        </li>
                        <li>
                          <a className="menu-item pl-0 tx-13 tx-normal" href="">
                            <i className="icon-arrow-right-circle pl-1 pr-2"></i>Python
                          </a>
                        </li>
                        <li>
                          <a className="menu-item pl-0 tx-13 tx-normal" href="">
                            <i className="icon-arrow-right-circle pl-1 pr-2"></i>Java
                          </a>
                        </li>
                        <li>
                          <a className="menu-item pl-0 tx-13 tx-normal" href="">
                            <i className="icon-arrow-right-circle pl-1 pr-2"></i>C++
                          </a>
                        </li>
                        <li>
                          <a className="menu-item pl-0 tx-13 tx-normal" href="">
                            <i className="icon-arrow-right-circle pl-1 pr-2"></i>PHP
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-6 col-xl-3 sub-menu mb-xl-0 mb-4">
                      <h6 className="tx-dark tx-13 tx-semibold">Frameworks</h6>
                      <ul className="list-unstyled">
                        <li>
                          <a className="menu-item pl-0 tx-13 tx-normal" href="">
                            <i className="icon-options pl-1 pr-2"></i>React
                          </a>
                        </li>
                        <li>
                          <a className="menu-item pl-0 tx-13 tx-normal" href="">
                            <i className="icon-options pl-1 pr-2"></i>Vue.js
                          </a>
                        </li>
                        <li>
                          <a className="menu-item pl-0 tx-13 tx-normal" href="">
                            <i className="icon-options pl-1 pr-2"></i>Angular
                          </a>
                        </li>
                        <li>
                          <a className="menu-item pl-0 tx-13 tx-normal" href="">
                            <i className="icon-options pl-1 pr-2"></i>Node.js
                          </a>
                        </li>
                        <li>
                          <a className="menu-item pl-0 tx-13 tx-normal" href="">
                            <i className="icon-options pl-1 pr-2"></i>Django
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-6 col-xl-3 sub-menu mb-md-0 mb-xl-0 mb-4">
                      <h6 className="tx-dark tx-13 tx-semibold">Tools</h6>
                      <ul className="list-unstyled">
                        <li>
                          <a className="menu-item pl-0 tx-13 tx-normal" href="">
                            <i className="icon-arrow-right-circle pl-1 pr-2"></i>Git
                          </a>
                        </li>
                        <li>
                          <a className="menu-item pl-0 tx-13 tx-normal" href="">
                            <i className="icon-arrow-right-circle pl-1 pr-2"></i>Docker
                          </a>
                        </li>
                        <li>
                          <a className="menu-item pl-0 tx-13 tx-normal" href="">
                            <i className="icon-arrow-right-circle pl-1 pr-2"></i>VS Code
                          </a>
                        </li>
                        <li>
                          <a className="menu-item pl-0 tx-13 tx-normal" href="">
                            <i className="icon-arrow-right-circle pl-1 pr-2"></i>Webpack
                          </a>
                        </li>
                        <li>
                          <a className="menu-item pl-0 tx-13 tx-normal" href="">
                            <i className="icon-arrow-right-circle pl-1 pr-2"></i>Postman
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-6 col-xl-3 sub-menu">
                      <h6 className="tx-dark tx-13 tx-semibold">Cloud</h6>
                      <ul className="list-unstyled">
                        <li>
                          <a className="menu-item pl-0 tx-13 tx-normal" href="">
                            <i className="icon-arrow-right-circle pl-1 pr-2"></i>AWS
                          </a>
                        </li>
                        <li>
                          <a className="menu-item pl-0 tx-13 tx-normal" href="">
                            <i className="icon-arrow-right-circle pl-1 pr-2"></i>Azure
                          </a>
                        </li>
                        <li>
                          <a className="menu-item pl-0 tx-13 tx-normal" href="">
                            <i className="icon-arrow-right-circle pl-1 pr-2"></i>Google Cloud
                          </a>
                        </li>
                        <li>
                          <a className="menu-item pl-0 tx-13 tx-normal" href="">
                            <i className="icon-arrow-right-circle pl-1 pr-2"></i>Heroku
                          </a>
                        </li>
                        <li>
                          <a className="menu-item pl-0 tx-13 tx-normal" href="">
                            <i className="icon-arrow-right-circle pl-1 pr-2"></i>DigitalOcean
                          </a>
                        </li>
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
                        <li>
                          <a className="menu-item pl-0 tx-13 tx-normal" href="">
                            <i className="icon-arrow-right-circle pl-1 pr-2"></i>Electronics
                          </a>
                        </li>
                        <li>
                          <a className="menu-item pl-0 tx-13 tx-normal" href="">
                            <i className="icon-arrow-right-circle pl-1 pr-2"></i>Clothing
                          </a>
                        </li>
                        <li>
                          <a className="menu-item pl-0 tx-13 tx-normal" href="">
                            <i className="icon-arrow-right-circle pl-1 pr-2"></i>Home & Garden
                          </a>
                        </li>
                        <li>
                          <a className="menu-item pl-0 tx-13 tx-normal" href="">
                            <i className="icon-arrow-right-circle pl-1 pr-2"></i>Sports
                          </a>
                        </li>
                        <li>
                          <a className="menu-item pl-0 tx-13 tx-normal" href="">
                            <i className="icon-arrow-right-circle pl-1 pr-2"></i>Books
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-6 col-xl-3 sub-menu mb-xl-0 mb-4">
                      <h6 className="tx-dark tx-13 tx-semibold">Services</h6>
                      <ul className="list-unstyled">
                        <li>
                          <a className="menu-item pl-0 tx-13 tx-normal" href="">
                            <i className="icon-options pl-1 pr-2"></i>Payment Processing
                          </a>
                        </li>
                        <li>
                          <a className="menu-item pl-0 tx-13 tx-normal" href="">
                            <i className="icon-options pl-1 pr-2"></i>Shipping
                          </a>
                        </li>
                        <li>
                          <a className="menu-item pl-0 tx-13 tx-normal" href="">
                            <i className="icon-options pl-1 pr-2"></i>Customer Support
                          </a>
                        </li>
                        <li>
                          <a className="menu-item pl-0 tx-13 tx-normal" href="">
                            <i className="icon-options pl-1 pr-2"></i>Inventory Management
                          </a>
                        </li>
                        <li>
                          <a className="menu-item pl-0 tx-13 tx-normal" href="">
                            <i className="icon-options pl-1 pr-2"></i>Analytics
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-6 col-xl-3 sub-menu mb-md-0 mb-xl-0 mb-4">
                      <h6 className="tx-dark tx-13 tx-semibold">Marketing</h6>
                      <ul className="list-unstyled">
                        <li>
                          <a className="menu-item pl-0 tx-13 tx-normal" href="">
                            <i className="icon-arrow-right-circle pl-1 pr-2"></i>SEO
                          </a>
                        </li>
                        <li>
                          <a className="menu-item pl-0 tx-13 tx-normal" href="">
                            <i className="icon-arrow-right-circle pl-1 pr-2"></i>Social Media
                          </a>
                        </li>
                        <li>
                          <a className="menu-item pl-0 tx-13 tx-normal" href="">
                            <i className="icon-arrow-right-circle pl-1 pr-2"></i>Email Marketing
                          </a>
                        </li>
                        <li>
                          <a className="menu-item pl-0 tx-13 tx-normal" href="">
                            <i className="icon-arrow-right-circle pl-1 pr-2"></i>PPC
                          </a>
                        </li>
                        <li>
                          <a className="menu-item pl-0 tx-13 tx-normal" href="">
                            <i className="icon-arrow-right-circle pl-1 pr-2"></i>Content Marketing
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-6 col-xl-3 sub-menu">
                      <h6 className="tx-dark tx-13 tx-semibold">Platforms</h6>
                      <ul className="list-unstyled">
                        <li>
                          <a className="menu-item pl-0 tx-13 tx-normal" href="">
                            <i className="icon-arrow-right-circle pl-1 pr-2"></i>Shopify
                          </a>
                        </li>
                        <li>
                          <a className="menu-item pl-0 tx-13 tx-normal" href="">
                            <i className="icon-arrow-right-circle pl-1 pr-2"></i>WooCommerce
                          </a>
                        </li>
                        <li>
                          <a className="menu-item pl-0 tx-13 tx-normal" href="">
                            <i className="icon-arrow-right-circle pl-1 pr-2"></i>Magento
                          </a>
                        </li>
                        <li>
                          <a className="menu-item pl-0 tx-13 tx-normal" href="">
                            <i className="icon-arrow-right-circle pl-1 pr-2"></i>BigCommerce
                          </a>
                        </li>
                        <li>
                          <a className="menu-item pl-0 tx-13 tx-normal" href="">
                            <i className="icon-arrow-right-circle pl-1 pr-2"></i>Custom Solutions
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          {/*/ Mega Menu End*/}

          {/*================================*/}
          {/* Header Right Start */}
          {/*================================*/}
          <div className="header-right pull-right">
            <ul className="list-inline justify-content-end">
              <li className="list-inline-item align-middle">
                <a href="#" id="search-button" onClick={(e) => { e.preventDefault(); setSearchOpen(true); }}>
                  <i className="ion-ios-search-strong tx-20"></i>
                </a>
              </li>

              {/*================================*/}
              {/* Languages Dropdown Start */}
              {/*================================*/}
              <li className={`list-inline-item align-middle dropdown hidden-xs ${languagesOpen ? 'open' : ''}`}>
                <a href="" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded={languagesOpen} onClick={(e) => { e.preventDefault(); toggleOnly(setLanguagesOpen, languagesOpen); }}>
                  <i className="flag-icon flag-icon-us"></i>
                </a>
                <ul className={`dropdown-menu languages-dropdown shadow-2 ${languagesOpen ? 'show' : ''}`}>
                  <li>
                    <a href="" data-lang="en">
                      <i className="flag-icon flag-icon-us mr-2"></i><span>English-US</span>
                    </a>
                  </li>
                  <li>
                    <a href="" data-lang="es">
                      <i className="flag-icon flag-icon-es mr-2"></i><span>Spanish</span>
                    </a>
                  </li>
                  <li>
                    <a href="" data-lang="fr">
                      <i className="flag-icon flag-icon-fr mr-2"></i><span>French</span>
                    </a>
                  </li>
                  <li>
                    <a href="" data-lang="gr">
                      <i className="flag-icon flag-icon-de mr-2"></i><span>German</span>
                    </a>
                  </li>
                  <li>
                    <a href="" data-lang="ru">
                      <i className="flag-icon flag-icon-ru mr-2"></i><span>Russian</span>
                    </a>
                  </li>
                  <li>
                    <a href="" data-lang="ru">
                      <i className="flag-icon flag-icon-gb mr-2"></i><span>English-UK</span>
                    </a>
                  </li>
                </ul>
              </li>
              {/*/ Languages Dropdown End */}

              {/*================================*/}
              {/* Notifications Dropdown Start */}
              {/*================================*/}
              <li className={`list-inline-item dropdown hidden-xs ${notificationsOpen ? 'open' : ''}`}>
                <a
                  className="notification-icon"
                  href=""
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded={notificationsOpen}
                  onClick={(e) => { e.preventDefault(); toggleOnly(setNotificationsOpen, notificationsOpen); }}
                >
                  <i className="icon-bell tx-16"></i>
                  <span className="notification-count wave in"></span>
                </a>
                <div className={`dropdown-menu dropdown-menu-right shadow-2 ${notificationsOpen ? 'show' : ''}`}>
                  {/* Top Notifications Area */}
                  <div className="top-notifications-area">
                    {/* Heading */}
                    <div className="notifications-heading">
                      <div className="heading-title">
                        <h6>Notifications</h6>
                      </div>
                      <span>5+ New Notifications</span>
                    </div>
                    <div className="notifications-box" id="notificationsBox">
                      <a className="dropdown-item list-group-item" href="javascript:void(0)">
                        <div className="d-flex justify-content-between">
                          <div className="wd-45 ht-38 mg-r-15 d-flex align-items-center justify-content-center rounded-circle card-icon-success">
                            <i className="fa fa-smile-o tx-success tx-16"></i>
                          </div>
                          <div>
                            <span>Your order is placed</span>
                            <span className="small tx-gray-600 ft-right">Jun 10</span>
                            <div className="tx-gray-600 tx-11">Dummy text of the printing and type setting industry.</div>
                          </div>
                        </div>
                      </a>
                      <a className="dropdown-item list-group-item" href="javascript:void(0)">
                        <div className="d-flex justify-content-between">
                          <div className="wd-45 ht-38 mg-r-15 d-flex align-items-center justify-content-center rounded-circle card-icon-warning">
                            <i className="fa fa-bell tx-warning tx-16"></i>
                          </div>
                          <div>
                            <span>Your item is shipped</span>
                            <span className="small tx-gray-600 ft-right">Jun 05</span>
                            <div className="tx-gray-600 tx-11">Dummy text of the printing and type setting industry.</div>
                          </div>
                        </div>
                      </a>
                      <a className="dropdown-item list-group-item" href="javascript:void(0)">
                        <div className="d-flex justify-content-between">
                          <div className="wd-45 ht-38 mg-r-15 d-flex align-items-center justify-content-center rounded-circle card-icon-success">
                            <i className="fa fa-check tx-success tx-16"></i>
                          </div>
                          <div>
                            <span>New Message received</span>
                            <span className="small tx-gray-600 ft-right">Jun 02</span>
                            <div className="tx-gray-600 tx-11">Dummy text of the printing and type setting industry.</div>
                          </div>
                        </div>
                      </a>
                      <a className="dropdown-item list-group-item" href="javascript:void(0)">
                        <div className="d-flex justify-content-between">
                          <div className="wd-45 ht-38 mg-r-15 d-flex align-items-center justify-content-center rounded-circle card-icon-danger">
                            <i className="fa fa-heartbeat tx-danger tx-16"></i>
                          </div>
                          <div>
                            <span>Payment failed!</span>
                            <span className="small tx-gray-600 ft-right">May 29</span>
                            <div className="tx-gray-600 tx-11">Dummy text of the printing and type setting industry.</div>
                          </div>
                        </div>
                      </a>
                      <a className="dropdown-item list-group-item" href="javascript:void(0)">
                        <div className="d-flex justify-content-between">
                          <div className="wd-45 ht-38 mg-r-15 d-flex align-items-center justify-content-center rounded-circle card-icon-primary">
                            <i className="fa fa-info tx-info tx-16"></i>
                          </div>
                          <div>
                            <span>New document available</span>
                            <span className="small tx-gray-600 ft-right">May 25</span>
                            <div className="tx-gray-600 tx-11">Dummy text of the printing and type setting industry.</div>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="notifications-footer">
                      <a href="">View all Notifications</a>
                    </div>
                  </div>
                </div>
              </li>
              {/*/ Notifications Dropdown End */}

              {/*================================*/}
              {/* Messages Dropdown Start */}
              {/*================================*/}
              <li className={`list-inline-item dropdown hidden-xs ${messagesOpen ? 'open' : ''}`}>
                <a
                  className="message-icon"
                  href=""
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded={messagesOpen}
                  onClick={(e) => { e.preventDefault(); toggleOnly(setMessagesOpen, messagesOpen); }}
                >
                  <i className="icon-envelope tx-16"></i>
                  <span className="messages-count wave in"></span>
                </a>
                <div className={`dropdown-menu dropdown-menu-right shadow-2 ${messagesOpen ? 'show' : ''}`}>
                  <div className="top-message-area">
                    <div className="top-message-heading">
                      <div className="heading-title">
                        <h6>Messages</h6>
                      </div>
                      <span>5+ New Messages</span>
                    </div>
                    <div className="message-box" id="messageBox">
                      <a className="dropdown-item list-group-item" href="javascript:void(0)">
                        <div className="d-flex justify-content-between">
                          <div className="pd-r-15">
                            <span className="avatar avatar-online">
                              <img src="/assets/images/avatar/avatar1.png" className="img-fluid" alt="" />
                              <i></i>
                            </span>
                          </div>
                          <div>
                            <span>Mary Adams</span>
                            <span className="small tx-gray-600 ft-right">30 minutes ago</span>
                            <div className="tx-gray-600 tx-11">Dummy text of the printing and type setting industry...</div>
                          </div>
                        </div>
                      </a>
                      <a className="dropdown-item list-group-item" href="javascript:void(0)">
                        <div className="d-flex justify-content-between">
                          <div className="pd-r-15">
                            <span className="avatar avatar-online">
                              <img src="/assets/images/avatar/avatar2.png" className="img-fluid" alt="" />
                              <i></i>
                            </span>
                          </div>
                          <div>
                            <span>Richards Caleb</span>
                            <span className="small tx-gray-600 ft-right">12 hours ago</span>
                            <div className="tx-gray-600 tx-11">Dummy text of the printing and type setting industry...</div>
                          </div>
                        </div>
                      </a>
                      <a className="dropdown-item list-group-item" href="javascript:void(0)">
                        <div className="d-flex justify-content-between">
                          <div className="pd-r-15">
                            <span className="avatar avatar-busy">
                              <img src="/assets/images/avatar/avatar3.png" className="img-fluid" alt="" />
                              <i></i>
                            </span>
                          </div>
                          <div>
                            <span>Lane Richards</span>
                            <span className="small tx-gray-600 ft-right">2 days ago</span>
                            <div className="tx-gray-600 tx-11">Dummy text of the printing and type setting industry...</div>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="top-message-footer">
                      <a href="">View all Messages</a>
                    </div>
                  </div>
                </div>
              </li>
              {/*/ Messages Dropdown End */}

              {/*================================*/}
              {/* Profile Dropdown Start */}
              {/*================================*/}
              <li className={`list-inline-item dropdown ${profileOpen ? 'open' : ''}`}>
                <a href="" data-toggle="dropdown" aria-haspopup="true" aria-expanded={profileOpen} onClick={(e) => { e.preventDefault(); toggleOnly(setProfileOpen, profileOpen); }}>
                  <span className="select-profile">Hi, John!</span>
                  <img src="/assets/images/avatar/avatar1.png" className="img-fluid wd-35 ht-35 rounded-circle" alt="" />
                </a>
                <div className={`dropdown-menu dropdown-menu-right dropdown-profile shadow-2 ${profileOpen ? 'show' : ''}`}>
                  <div className="user-profile-area">
                    <div className="user-profile-heading">
                      <div className="profile-thumbnail">
                        <img src="/assets/images/avatar/avatar1.png" className="img-fluid wd-35 ht-35 rounded-circle" alt="" />
                      </div>
                      <div className="profile-text">
                        <h6>John Deo</h6>
                        <span>email@example.com</span>
                      </div>
                    </div>
                    <a href="" className="dropdown-item">
                      <i className="icon-user" aria-hidden="true"></i> My profile
                    </a>
                    <a href="" className="dropdown-item">
                      <i className="icon-envelope" aria-hidden="true"></i> Messages
                      <span className="badge badge-success ft-right mg-t-3">10+</span>
                    </a>
                    <a href="" className="dropdown-item">
                      <i className="icon-settings" aria-hidden="true"></i> settings
                    </a>
                    <a href="" className="dropdown-item">
                      <i className="icon-share" aria-hidden="true"></i> My Activity
                      <span className="badge badge-warning ft-right mg-t-3">5+</span>
                    </a>
                    <a href="" className="dropdown-item">
                      <i className="icon-cloud-download" aria-hidden="true"></i> My Download
                      <span className="badge badge-success ft-right mg-t-3">10+</span>
                    </a>
                    <a href="" className="dropdown-item">
                      <i className="icon-heart" aria-hidden="true"></i> Support
                    </a>
                    <a href="/page-singin" className="dropdown-item">
                      <i className="icon-power" aria-hidden="true"></i> Sign-out
                    </a>
                  </div>
                </div>
              </li>
              {/* Profile Dropdown End */}

              {/*================================*/}
              {/* Setting Sidebar Start */}
              {/*================================*/}
              <li className="list-inline-item dropdown hidden-xs">
                <a
                  className="settings-icon"
                  id="settingSidebarTrigger"
                  href=""
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="icon-settings tx-16"></i>
                </a>
              </li>
              {/*/ Setting Sidebar End */}
            </ul>
          </div>
          {/*/ Header Right End */}
        </div>
        {/*/ Page Header End */}
      </div>
      {/*/ Page Header End */}
    </>
  );
}

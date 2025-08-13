"use client";

import { useEffect, useState } from "react";
import feather from "feather-icons";
import Link from "next/link";
import { useSidebar } from "../context/SidebarContext";

export default function Sidebar() {
  const { isCollapsed, toggleSidebar } = useSidebar();

  // Individual state for each dropdown menu for independent control
  const [dashboardOpen, setDashboardOpen] = useState(true);
  const [mailboxOpen, setMailboxOpen] = useState(false);
  const [uiElementsOpen, setUiElementsOpen] = useState(false);
  const [iconsOpen, setIconsOpen] = useState(false);
  const [componentsOpen, setComponentsOpen] = useState(false);
  const [formsOpen, setFormsOpen] = useState(false);
  const [tablesOpen, setTablesOpen] = useState(false);
  const [chartsOpen, setChartsOpen] = useState(false);
  const [mapsOpen, setMapsOpen] = useState(false);
  const [appViewOpen, setAppViewOpen] = useState(false);
  const [pagesOpen, setPagesOpen] = useState(false);
  const [frontendOpen, setFrontendOpen] = useState(false);

  useEffect(() => {
    feather.replace();
  }, []);

  // Generic toggle handler by setter function
  const toggleMenu = (setter, current) => (e) => {
    e.preventDefault();
    setter(!current);
  };

  return (
    <div className={`page-sidebar ${isCollapsed ? 'page-sidebar-collapsed' : ''}`}>
      <div className="logo">
        <Link href="/" className="logo-img">
          <img className="desktop-logo" src="/images/logo.png" alt="" />
          <img className="small-logo" src="/images/small-logo.png" alt="" />
        </Link>
        <i
          className="ion-ios-close-empty"
          id="sidebar-toggle-button-close"
          onClick={(e) => { e.preventDefault(); e.stopPropagation(); toggleSidebar(); }}
        ></i>
      </div>
      {/*================================*/}
      {/* Sidebar Menu Start */}
      {/*================================*/}
      <div className="page-sidebar-inner">
        <div className="page-sidebar-menu scrollable-menu">
          <ul className="accordion-menu">
            <li className={dashboardOpen ? "open active" : "active"}>
              <a href="" onClick={toggleMenu(setDashboardOpen, dashboardOpen)}>
                <i data-feather="home"></i>
                <span>Dashboard</span>
                <i className="accordion-icon fa fa-angle-left"></i>
              </a>
              <ul className="sub-menu" style={{ display: dashboardOpen ? "block" : "none" }}>
                {/* Active Page */}
                <li className="active"><Link href="/">Sales</Link></li>
                <li><Link href="/analytics">Analytics</Link></li>
                <li><Link href="/cryptocurrency">Cryptocurrency</Link></li>
                <li><Link href="/helpdesk">Helpdesk</Link></li>
                <li><Link href="/project">Project</Link></li>
                <li><Link href="/ecommerce">Ecommerce</Link></li>
                <li><Link href="/server">Server</Link></li>
                <li><Link href="/education">Education</Link></li>
                <li><Link href="/event">Event</Link></li>
                <li><Link href="/social">Social</Link></li>
              </ul>
            </li>
            <li className={mailboxOpen ? "open active" : ""}>
              <a href="" onClick={toggleMenu(setMailboxOpen, mailboxOpen)}>
                <i data-feather="mail"></i>
                <span>Mailbox</span>
                <span className="badge badge-warning ft-right">10+</span>
              </a>
              <ul className="sub-menu" style={{ display: mailboxOpen ? "block" : "none" }}>
                <li><Link href="/mailbox">Inbox</Link></li>
                <li><Link href="/mailbox-message">View Mail</Link></li>
                <li><Link href="/mailbox-compose">Compose Mail</Link></li>
              </ul>
            </li>
            <li>
              <Link href="/widgets">
                <i data-feather="layout"></i>
                <span>Widgets</span>
                <span className="badge badge-info ft-right">Hot</span>
              </Link>
            </li>
            <li className="menu-divider mg-y-20-force"></li>
            <li className="mg-20-force menu-elements">Elements</li>
            <li className={uiElementsOpen ? "open active" : ""}>
              <a href="" onClick={toggleMenu(setUiElementsOpen, uiElementsOpen)}>
                <i data-feather="grid"></i>
                <span>UI Elements</span>
                <i className="accordion-icon fa fa-angle-left"></i>
              </a>
              <ul className="sub-menu" style={{ display: uiElementsOpen ? "block" : "none" }}>
                <li><Link href="/ui-card">Card</Link></li>
                <li><Link href="/ui-alert">Alerts</Link></li>
                <li><Link href="/ui-button">Buttons</Link></li>
                <li><Link href="/ui-badge">Badges</Link></li>
                <li><Link href="/ui-typography">Typography</Link></li>
                <li><Link href="/ui-notification">Notifications</Link></li>
                <li><Link href="/ui-modal">Modals</Link></li>
                <li><Link href="/ui-tooltip">Tooltips</Link></li>
                <li><Link href="/ui-progress">Progress</Link></li>
                <li><Link href="/ui-spinner">Spinners</Link></li>
                <li><Link href="/ui-accordion">Accordions</Link></li>
                <li><Link href="/ui-pagination">Pagination</Link></li>
              </ul>
            </li>
            <li className={iconsOpen ? "open active" : ""}>
              <a href="" onClick={toggleMenu(setIconsOpen, iconsOpen)}>
                <i data-feather="gift"></i>
                <span>Icons</span>
                <i className="accordion-icon fa fa-angle-left"></i>
              </a>
              <ul className="sub-menu" style={{ display: iconsOpen ? "block" : "none" }}>
                <li><Link href="/icon-font-awesome">Font Awesome</Link></li>
                <li><Link href="/icon-feather">Feather Icons</Link></li>
                <li><Link href="/icon-mdi">Mdi icons</Link></li>
                <li><Link href="/icon-flag">Flag icons</Link></li>
                <li><Link href="/icon-simple-line">Simple line icons</Link></li>
                <li><Link href="/icon-themify">Themify icons</Link></li>
                <li><Link href="/icon-weather">Weather Icons</Link></li>
              </ul>
            </li>
            <li className={componentsOpen ? "open active" : ""}>
              <a href="" onClick={toggleMenu(setComponentsOpen, componentsOpen)}>
                <i data-feather="command"></i>
                <span>Components</span>
                <i className="accordion-icon fa fa-angle-left"></i>
              </a>
              <ul className="sub-menu" style={{ display: componentsOpen ? "block" : "none" }}>
                <li><Link href="/com-datepicker">Date Picker</Link></li>
                <li><Link href="/com-timepicker">Time Picker</Link></li>
                <li><Link href="/com-colorpicker">Color Picker</Link></li>
                <li><Link href="/com-bootselect">Bootstrap Select</Link></li>
                <li><Link href="/com-codeeditor">Code Editor</Link></li>
                <li><Link href="/com-wysiwyg">WYSIWYG Editor</Link></li>
              </ul>
            </li>
            <li className={formsOpen ? "open active" : ""}>
              <a href="" onClick={toggleMenu(setFormsOpen, formsOpen)}>
                <i data-feather="calendar"></i>
                <span>Forms</span>
                <i className="accordion-icon fa fa-angle-left"></i>
              </a>
              <ul className="sub-menu" style={{ display: formsOpen ? "block" : "none" }}>
                <li><Link href="/form-element">Form Elements</Link></li>
                <li><Link href="/form-layout">Form Layouts</Link></li>
                <li><Link href="/form-wizard">Form Wizard</Link></li>
                <li><Link href="/form-validation">Form Validation</Link></li>
                <li><Link href="/form-upload">File Upload</Link></li>
                <li><Link href="/form-publisher">Form Publishers</Link></li>
                <li><Link href="/form-formatter">Form Formatter </Link></li>
              </ul>
            </li>
            <li className={tablesOpen ? "open active" : ""}>
              <a href="" onClick={toggleMenu(setTablesOpen, tablesOpen)}>
                <i data-feather="database"></i>
                <span>Tables</span>
                <i className="accordion-icon fa fa-angle-left"></i>
              </a>
              <ul className="sub-menu" style={{ display: tablesOpen ? "block" : "none" }}>
                <li><Link href="/table-static">Static</Link></li>
                <li><Link href="/table-responsive">Responsive</Link></li>
                <li><Link href="/table-datatable">Data Tables</Link></li>
                <li><Link href="/table-footable">Foo Tables</Link></li>
              </ul>
            </li>
            <li className={chartsOpen ? "open active" : ""}>
              <a href="" onClick={toggleMenu(setChartsOpen, chartsOpen)}>
                <i data-feather="pie-chart"></i>
                <span>Charts</span>
                <i className="accordion-icon fa fa-angle-left"></i>
              </a>
              <ul className="sub-menu" style={{ display: chartsOpen ? "block" : "none" }}>
                <li><Link href="/chart-apex">Apex</Link></li>
                <li><Link href="/chart-google">Google</Link></li>
                <li><Link href="/chart-morris">Morris</Link></li>
                <li><Link href="/chart-chartjs">ChartJS</Link></li>
                <li><Link href="/chart-flot">Flot</Link></li>
                <li><Link href="/chart-chartlist">Chartlist</Link></li>
                <li><Link href="/chart-sparkline">Sparkline</Link></li>
              </ul>
            </li>
            <li className={mapsOpen ? "open active" : ""}>
              <a href="" onClick={toggleMenu(setMapsOpen, mapsOpen)}>
                <i data-feather="map"></i>
                <span>Maps</span>
                <i className="accordion-icon fa fa-angle-left"></i>
              </a>
              <ul className="sub-menu" style={{ display: mapsOpen ? "block" : "none" }}>
                <li><Link href="/map-google">Google Maps</Link></li>
                <li><Link href="/map-vector">Vector Maps</Link></li>
              </ul>
            </li>
            <li className="menu-divider mg-y-20-force"></li>
            <li className="mg-20-force menu-extras">Extras</li>
            <li className={appViewOpen ? "open active" : ""}>
              <a href="" onClick={toggleMenu(setAppViewOpen, appViewOpen)}>
                <i data-feather="cpu"></i>
                <span>App View</span>
                <i className="accordion-icon fa fa-angle-left"></i>
              </a>
              <ul className="sub-menu" style={{ display: appViewOpen ? "block" : "none" }}>
                <li><Link href="/app-chatroom">Chat Room</Link></li>
                <li><Link href="/app-calendar">Calendar</Link></li>
              </ul>
            </li>
            <li className={pagesOpen ? "open active" : ""}>
              <a href="" onClick={toggleMenu(setPagesOpen, pagesOpen)}>
                <i data-feather="codepen"></i>
                <span>Pages</span>
                <i className="accordion-icon fa fa-angle-left"></i>
              </a>
              <ul className="sub-menu" style={{ display: pagesOpen ? "block" : "none" }}>
                <li><Link href="/page-invoice">Invoice</Link></li>
                <li><Link href="/page-error404">404 Page</Link></li>
                <li><Link href="/page-error500">500 Page</Link></li>
                <li><Link href="/page-profile">Profile</Link></li>
                <li><Link href="/page-singin">Login</Link></li>
                <li><Link href="/page-singup">Register</Link></li>
                <li><Link href="/page-unlock">Lockscreen</Link></li>
                <li><Link href="/page-password">password Reset</Link></li>
                <li><Link href="/page-search">Search Result</Link></li>
                <li><Link href="/page-gallery">Gallery</Link></li>
                <li><Link href="/page-pricing">Pricing Tables</Link></li>
                <li><Link href="/page-treeview">Tree View</Link></li>
              </ul>
            </li>
            <li>
              <Link href="/email-template">
                <i data-feather="printer"></i>
                <span>Mail Template</span>
                <span className="badge badge-warning ft-right">Hot</span>
              </Link>
            </li>
            <li className={frontendOpen ? "open active" : ""}>
              <a href="" onClick={toggleMenu(setFrontendOpen, frontendOpen)}>
                <i data-feather="monitor"></i>
                <span>Frontend</span>
                <span className="badge badge-danger ft-right">Very Hot</span>
              </a>
              <ul className="sub-menu" style={{ display: frontendOpen ? "block" : "none" }}>
                <li><a href="/templates/ecommerce" target="_blank">Ecommerce</a></li>
                <li><a href="/templates/cryptocurrency" target="_blank">Cryptocurrency</a></li>
                <li><a href="/templates/helpdesk" target="_blank">Helpdesk</a></li>
                <li><a href="/templates/project" target="_blank">project</a></li>
                <li><a href="/templates/server" target="_blank">server</a></li>
                <li><a href="/templates/education" target="_blank">education</a></li>
                <li><a href="/templates/event" target="_blank">event</a></li>
                <li><a href="/templates/social" target="_blank">social</a></li>
              </ul>
            </li>
            <li className="menu-divider mg-y-20-force"></li>
            <li className="mg-20-force menu-others">Others</li>
            <li>
              <Link href="/documentation">
                <i data-feather="life-buoy"></i>
                <span>Documentation</span>
              </Link>
            </li>
            <li>
              <Link href="/changelog">
                <i data-feather="coffee"></i>
                <span>Changelog</span>
                <span className="badge badge-primary ft-right">1.7</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/* Sidebar Menu End */}
      {/*================================*/}
      {/* Sidebar Footer Start */}
      {/*================================*/}
      <div className="sidebar-footer">
        <Link href="/page-profile" className="pull-left" data-toggle="tooltip" data-placement="top" data-original-title="Profile">
          <i data-feather="user" className="ht-15"></i>
        </Link>
        <Link href="/mailbox" className="pull-left" data-toggle="tooltip" data-placement="top" data-original-title="Mailbox">
          <i data-feather="mail" className="ht-15"></i>
        </Link>
        <Link href="/page-unlock" className="pull-left" data-toggle="tooltip" data-placement="top" data-original-title="Lockscreen">
          <i data-feather="lock" className="ht-15"></i>
        </Link>
        <Link href="/page-singin" className="pull-left" data-toggle="tooltip" data-placement="top" data-original-title="Sign Out">
          <i data-feather="log-out" className="ht-15"></i>
        </Link>
      </div>
      {/* Sidebar Footer End */}
    </div>
  );
}

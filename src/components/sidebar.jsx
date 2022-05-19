function SideBar() {
  return (
    <div>
      <div className="left-side-bar">
        <div className="brand-logo">
          <a href="#">APP_NAME</a>
          <div className="close-sidebar" data-toggle="left-sidebar-close">
            <i className="ion-close-round"></i>
          </div>
        </div>
        <div className="dropdown-divider"></div>
        <div className="menu-block customscroll">
          <div className="sidebar-menu">
            <ul id="accordion-menu">
              <li className="dropdown">
                <a href="#" className="dropdown-toggle">
                  <span className="micon dw dw-settings2"></span>
                  <span className="mtext">Settings</span>
                </a>
                <ul className="submenu">
                  <li>
                    <a href="#">Users</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#" className="dropdown-toggle no-arrow">
                  <span className="micon dw dw-user-11"></span>
                  <span className="mtext">Customers</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mobile-menu-overlay"></div>
    </div>
  );
}

export default SideBar;

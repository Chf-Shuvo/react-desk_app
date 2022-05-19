function Nav() {
  return (
    <div className="header">
      <div className="header-left">
        <div className="menu-icon dw dw-menu"></div>
        <div
          className="search-toggle-icon dw dw-search2"
          data-toggle="header_search"
        ></div>
      </div>
      <div className="header-right">
        <div className="user-info-dropdown">
          <div className="dropdown">
            <a
              className="dropdown-toggle"
              href="#"
              role="button"
              data-toggle="dropdown"
            >
              <span className="user-icon">image</span>
              <span className="user-name">user-name</span>
            </a>
            <div className="dropdown-menu dropdown-menu-right dropdown-menu-icon-list">
              <a className="dropdown-item" href="{{ route('admin.profile') }}">
                <i className="dw dw-settings2"></i> Profile Settings
              </a>
              <a className="dropdown-item" href="{{ route('admin.logout') }}">
                <i className="dw dw-logout"></i> Log Out
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;

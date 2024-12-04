import axios from "axios";

function Navbar() {
  const downloadFile = () => {
    console.log(localStorage.getItem("auth"));

    fetch("https://web.finnro.ir/dashbord/download", {
      headers: {
        "Authorization": localStorage.getItem("auth"),
        // 'Accept': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
      },
    }).then(result => {
      console.log("hi")
    }).catch(err => {
      console.log(err)
    })
  };

  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      <div className="sidebar">
        <div>
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
              <img
                src="/dist/img/admin.jpg"
                className="img-circle elevation-2"
                alt="User Image"
              />
            </div>
            <div className="info">
              <a href="#" class="d-block">
                سجاد
              </a>
            </div>
          </div>

          <nav className="mt-2">
            <ul
              className="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              <li className="nav-item">
                <a href="/dashboard" className="nav-link">
                  <i className="nav-icon fa fa-th"></i>
                  <p>داشبور</p>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={downloadFile}>
                  <i className="nav-icon fa fa-download"></i>
                  <p>دانلود گزارش</p>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </aside>
  );
}

export default Navbar;

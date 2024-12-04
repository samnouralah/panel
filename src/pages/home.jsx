import { useEffect, useRef } from "react";
import Header from "../components/header/Header";
import Navbar from "../components/Navbar/Navbar";
import { Chart } from 'chart.js/auto';

function Home() {
  return (
    <>
      <Header />
      <Navbar />

      <div className="content-wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="col-6 mt-5">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">گزارش ماهیانه</h5>

                  <div className="card-tools">
                    <button
                      type="button"
                      className="btn btn-tool"
                      data-widget="collapse"
                    >
                      <i className="fa fa-minus"></i>
                    </button>
                    <button
                      type="button"
                      className="btn btn-tool"
                      data-widget="remove"
                    >
                      <i className="fa fa-times"></i>
                    </button>
                  </div>
                </div>
                <div className="card-body">

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

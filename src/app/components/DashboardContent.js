"use client";

import { useEffect } from "react";
import feather from "feather-icons";
import Link from "next/link";

export default function DashboardContent() {
  useEffect(() => {
    feather.replace();
  }, []);

  return (
    <div className="page-inner">
      <div id="main-wrapper">
        {/* Breadcrumb */}
        <div className="pageheader pd-t-25 pd-b-35">
          <div className="pd-t-5 pd-b-5">
            <h1 className="pd-0 mg-0 tx-20">Sales Monitoring</h1>
          </div>
          <div className="breadcrumb pd-0 mg-0">
            <Link className="breadcrumb-item" href="/">
              <i className="icon ion-ios-home-outline"></i> Home
            </Link>
            <Link className="breadcrumb-item" href="#">Dashboard</Link>
            <span className="breadcrumb-item active">Sales Monitoring</span>
          </div>
        </div>

        {/* Count Cards */}
        <div className="row row-xs clearfix">
          <div className="col-sm-6 col-xl-3">
            <div className="card mg-b-20">
              <div className="card-body pd-y-0">
                <div className="custom-fieldset mb-4">
                  <div className="clearfix">
                    <label>Today Orders</label>
                  </div>
                  <div className="d-flex align-items-center text-dark">
                    <div className="wd-40 wd-md-50 ht-40 ht-md-50 mg-r-10 mg-md-r-10 d-flex align-items-center justify-content-center rounded card-icon-warning">
                      <i className="icon-screen-desktop tx-warning tx-20"></i>
                    </div>
                    <div>
                      <h2 className="tx-20 tx-sm-18 tx-md-24 mb-0 mt-2 mt-sm-0 tx-normal tx-rubik tx-dark">
                        $<span className="counter">5,300</span><small className="tx-15">.50</small>
                      </h2>
                      <div className="d-flex align-items-center tx-gray-500">
                        <span className="text-success mr-2 d-flex align-items-center">
                          <i className="ion-android-arrow-up mr-1"></i>+451
                        </span>avg. sales
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-xl-3">
            <div className="card mg-b-20">
              <div className="card-body pd-y-0">
                <div className="custom-fieldset mb-4">
                  <div className="clearfix">
                    <label>Today Earnings</label>
                  </div>
                  <div className="d-flex align-items-center text-dark">
                    <div className="wd-40 wd-md-50 ht-40 ht-md-50 mg-r-10 mg-md-r-10 d-flex align-items-center justify-content-center rounded card-icon-success">
                      <i className="icon-diamond tx-success tx-20"></i>
                    </div>
                    <div>
                      <h2 className="tx-20 tx-sm-18 tx-md-24 mb-0 mt-2 mt-sm-0 tx-normal tx-rubik tx-dark">
                        $<span className="counter">1,500</span><small className="tx-15">.50</small>
                      </h2>
                      <div className="d-flex align-items-center tx-gray-500">
                        <span className="text-danger mr-2 d-flex align-items-center">
                          <i className="ion-android-arrow-down mr-1"></i>-310
                        </span>avg. sales
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-xl-3">
            <div className="card mg-b-20">
              <div className="card-body pd-y-0">
                <div className="custom-fieldset mb-4">
                  <div className="clearfix">
                    <label>Product Sold</label>
                  </div>
                  <div className="d-flex align-items-center text-dark">
                    <div className="wd-40 wd-md-50 ht-40 ht-md-50 mg-r-10 mg-md-r-10 d-flex align-items-center justify-content-center rounded card-icon-primary">
                      <i className="icon-handbag tx-primary tx-20"></i>
                    </div>
                    <div>
                      <h2 className="tx-20 tx-sm-18 tx-md-24 mb-0 mt-2 mt-sm-0 tx-normal tx-rubik tx-dark">
                        $<span className="counter">4,900</span><small className="tx-15">.50</small>
                      </h2>
                      <div className="d-flex align-items-center tx-gray-500">
                        <span className="text-success mr-2 d-flex align-items-center">
                          <i className="ion-android-arrow-up mr-1"></i>+350
                        </span>avg. sales
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-xl-3">
            <div className="card mg-b-20">
              <div className="card-body pd-y-0">
                <div className="custom-fieldset mb-4">
                  <div className="clearfix">
                    <label>Total Earnings</label>
                  </div>
                  <div className="d-flex align-items-center text-dark">
                    <div className="wd-40 wd-md-50 ht-40 ht-md-50 mg-r-10 mg-md-r-10 d-flex align-items-center justify-content-center rounded card-icon-danger">
                      <i className="icon-speedometer tx-danger tx-20"></i>
                    </div>
                    <div>
                      <h2 className="tx-20 tx-sm-18 tx-md-24 mb-0 mt-2 mt-sm-0 tx-normal tx-rubik tx-dark">
                        $<span className="counter">9,900</span><small className="tx-15">.50</small>
                      </h2>
                      <div className="d-flex align-items-center tx-gray-500">
                        <span className="text-danger mr-2 d-flex align-items-center">
                          <i className="ion-android-arrow-down mr-1"></i>+130
                        </span>avg. sales
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row row-xs clearfix">
          {/* Annual Report */}
          <div className="col-lg-12 col-xl-8 col-12">
            <div className="card mg-b-20">
              <div className="card-header">
                <h4 className="card-header-title">Annual Reports</h4>
                <div className="card-header-btn">
                  <a href="#" data-toggle="collapse" className="btn card-collapse" data-target="#annualReports" aria-expanded="true">
                    <i className="ion-ios-arrow-down"></i>
                  </a>
                  <a href="#" data-toggle="refresh" className="btn card-refresh">
                    <i className="ion-android-refresh"></i>
                  </a>
                  <a href="#" data-toggle="expand" className="btn card-expand">
                    <i className="ion-android-expand"></i>
                  </a>
                  <a href="#" data-toggle="remove" className="btn card-remove">
                    <i className="ion-ios-trash-outline"></i>
                  </a>
                </div>
              </div>
              <div className="collapse show" id="annualReports">
                <div className="card-body pd-t-0 pd-b-20">
                  <div className="row clearfix">
                    <div className="col-lg-4 col-md-4 col-sm-12 mg-y-20">
                      <span className="tx-uppercase tx-10 mg-b-10">Sales Report</span>
                      <h3 className="tx-20 tx-sm-18 tx-md-24 mg-b-0 tx-normal tx-rubik tx-dark">
                        $<span className="counter">580,350</span><small className="tx-15">.50</small>
                      </h3>
                      <div className="tx-11 d-flex tx-gray-500">
                        <span className="text-success mr-2 d-flex align-items-center">
                          <i className="ion-android-arrow-up mr-1"></i>+535%
                        </span>avg. sales per year
                      </div>
                      <p className="mg-t-10 mg-b-0 tx-12 tx-gray-600">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
                        <a href="#">Learn More</a>
                      </p>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 mg-y-20">
                      <span className="tx-uppercase tx-10 mg-b-10">Annual Revenue</span>
                      <h3 className="tx-20 tx-sm-18 tx-md-24 mg-b-0 tx-normal tx-rubik tx-dark">
                        $<span className="counter">980,830</span><small className="tx-15">.50</small>
                      </h3>
                      <div className="tx-11 d-flex tx-gray-500">
                        <span className="text-success mr-2 d-flex align-items-center">
                          <i className="ion-android-arrow-up mr-1"></i>+230%
                        </span>avg. sales per year
                      </div>
                      <p className="mg-t-10 mg-b-0 tx-12 tx-gray-600">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
                        <a href="#">Learn More</a>
                      </p>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 mg-y-20">
                      <span className="tx-uppercase tx-10 mg-b-10">Total Profit</span>
                      <h3 className="tx-20 tx-sm-18 tx-md-24 mg-b-0 tx-normal tx-rubik tx-dark">
                        $<span className="counter">730,360</span><small className="tx-15">.50</small>
                      </h3>
                      <div className="tx-11 d-flex tx-gray-500">
                        <span className="text-danger mr-2 d-flex align-items-center">
                          <i className="ion-android-arrow-down mr-1"></i>-135%
                        </span>avg. sales per year
                      </div>
                      <p className="mg-t-10 mg-b-0 tx-12 tx-gray-600">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
                        <a href="#">Learn More</a>
                      </p>
                    </div>
                  </div>
                  <div className="d-block clearfix">
                    <canvas id="annualReport"></canvas>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sales+Order+Revenue */}
          <div className="col-lg-12 col-xl-4">
            <div className="row">
              <div className="col-lg-6 col-xl-12">
                <div className="card mg-b-20">
                  <div className="card-body">
                    <div id="sales_slider" className="carousel slide" data-ride="carousel" data-interval="4000">
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <span className="tx-10 tx-uppercase tx-gray-500">Sales</span>
                        <div className="btn-group border-0">
                          <div className="sw-carousel-slider-control">
                            <a className="tx-dark carousel-control-prev" href="#sales_slider" data-slide="prev">
                              <i className="fa fa-angle-left"></i>
                            </a>
                            <a className="tx-dark carousel-control-next" href="#sales_slider" data-slide="next">
                              <i className="fa fa-angle-right"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="carousel-inner">
                        <div className="carousel-item active">
                          <div className="d-flex pd-b-20">
                            <div className="mg-t-15">
                              <h3 className="tx-uppercase tx-11 tx-spacing-1 tx-semibold mg-b-0 tx-dark">Sales Report</h3>
                              <p className="tx-10 tx-normal mb-0 tx-gray-500">
                                (<span className="text-success tx-10">
                                  <i className="ion-android-arrow-up mr-1"></i>+110
                                </span>) higher than previous day
                              </p>
                            </div>
                            <div className="mg-l-auto tx-right">
                              <span className="tx-10 tx-uppercase mg-b-0">Earning</span>
                              <h5 className="tx-dark tx-16 mg-b-0 tx-normal tx-rubik">$2,562</h5>
                            </div>
                          </div>
                          <div className="clearfix">
                            <div id="salesSpark1"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-xl-12">
                <div className="card mg-b-20">
                  <div className="card-body">
                    <div id="order_slider" className="carousel slide" data-ride="carousel" data-interval="5000">
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <span className="tx-10 tx-uppercase tx-gray-500">Order</span>
                        <div className="btn-group border-0">
                          <div className="sw-carousel-slider-control">
                            <a className="tx-dark carousel-control-prev" href="#order_slider" data-slide="prev">
                              <i className="fa fa-angle-left"></i>
                            </a>
                            <a className="tx-dark carousel-control-next" href="#order_slider" data-slide="next">
                              <i className="fa fa-angle-right"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="carousel-inner">
                        <div className="carousel-item active">
                          <div className="d-flex pd-b-20">
                            <div className="mg-t-15">
                              <h3 className="tx-uppercase tx-11 tx-spacing-1 tx-semibold mg-b-0 tx-dark">Sales Report</h3>
                              <p className="tx-10 tx-normal mb-0 tx-gray-500">
                                (<span className="text-success tx-10">
                                  <i className="ion-android-arrow-up mr-1"></i>+180
                                </span>) higher than previous day
                              </p>
                            </div>
                            <div className="mg-l-auto tx-right">
                              <span className="tx-10 tx-uppercase mg-b-0">Earning</span>
                              <h5 className="tx-dark tx-16 mg-b-0 tx-normal tx-rubik">$6,562</h5>
                            </div>
                          </div>
                          <div className="clearfix">
                            <div id="orderSpark1"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-xl-12 hidden-md">
                <div className="card mg-b-20">
                  <div className="card-body">
                    <div id="revenue_slider" className="carousel slide" data-ride="carousel" data-interval="6000">
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <span className="tx-10 tx-uppercase tx-gray-500">Revenue</span>
                        <div className="btn-group border-0">
                          <div className="sw-carousel-slider-control">
                            <a className="tx-dark carousel-control-prev" href="#revenue_slider" data-slide="prev">
                              <i className="fa fa-angle-left"></i>
                            </a>
                            <a className="tx-dark carousel-control-next" href="#revenue_slider" data-slide="next">
                              <i className="fa fa-angle-right"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="carousel-inner">
                        <div className="carousel-item active">
                          <div className="d-flex pd-b-20">
                            <div className="mg-t-15">
                              <h3 className="tx-uppercase tx-11 tx-spacing-1 tx-semibold mg-b-0 tx-dark">Revenue Report</h3>
                              <p className="tx-10 tx-normal mb-0 tx-gray-500">
                                (<span className="text-success tx-10">
                                  <i className="ion-android-arrow-up mr-1"></i>+200
                                </span>) higher than previous day
                              </p>
                            </div>
                            <div className="mg-l-auto tx-right">
                              <span className="tx-10 tx-uppercase mg-b-0">Earning</span>
                              <h5 className="tx-dark tx-16 mg-b-0 tx-normal tx-rubik">$8,562</h5>
                            </div>
                          </div>
                          <div className="clearfix">
                            <div id="revenueSpark1"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

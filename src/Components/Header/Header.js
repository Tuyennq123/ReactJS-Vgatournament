import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <header>
            <div className="stiki">
              <div className="header-top">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-3 col-md-3">
                      <div className="row header-text-top">
                        <div className="col-md-6 col-sm-6 col-6">
                          <div className="text-center">
                            <a href="#">đơn vị tổ chức</a>
                          </div>
                        </div>
                        <div className="col-md-6 col-sm-6 col-6">
                          <div className="text-center">
                            <a href="#">đơn vị thực hiện</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-9">
                      <div className="header-langauge">
                        <div className="dropdown">
                          <a href="#" className="dropdown-toggle" data-toggle="dropdown" id="dropdownMenuButton" aria-haspopup="true" aria-expanded="false">
                            VN <img src="img/vietnam.jpg" className="img-fluid" />
                            <i className="fa fa-angle-down" />
                          </a>
                          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <li className="dropdown-item">
                              <a href="#">
                                VN
                                <img src="img/vietnam.jpg" className="img-fluid" />
                              </a>
                            </li>
                            <li className="dropdown-item">
                              <a href="#">
                                VN
                                <img src="img/vietnam.jpg" className="img-fluid" />
                              </a>
                            </li>
                            <li className="dropdown-item">
                              <a href="#">
                                VN
                                <img src="img/vietnam.jpg" className="img-fluid" />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="header-center">
                <button id="open-menu">
                  <i className="fa fa-bars" aria-hidden="true" />
                </button>
                <button id="open-search-form">
                  <i className="fa fa-search" aria-hidden="true" />
                </button>
                <div className="container">
                  <div className="row">
                    <div className="col-lg-3 col-md-3">
                      <div className="row header-center-image">
                        <div className="col-md-6 col-sm-6 col-6 text-center">
                          <div className="logo-1">
                            <a href="index.html"><img src="img/Group1.png" /></a>
                          </div>
                        </div>
                        <div className="col-md-6 col-sm-6 col-6 text-center">
                          <div className="logo-1">
                            <a href="index.html"><img src="img/logo_vgs 1.png" /></a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-9">
                      <form id="search-form-mobile">
                        <input type="text" name placeholder="Enter keywords" />
                        <button type="submit">
                          <i className="fa fa-search" />
                        </button>
                      </form>
                      <nav className="main-nav">
                        <ul>
                          <li>
                            <a href="index.html" className="smooth" title>trang chủ</a>
                          </li>
                          <li>
                            <a href="vechungtoi1.html" className="smooth" title>giới thiệu</a>
                          </li>
                          <li>
                            <a href="giaidau.html" className="smooth" title>giải đấu</a>
                          </li>
                          <li>
                            <a href="taitro.html" className="smooth" title>tài trợ</a>
                          </li>
                          <li>
                            <a href="videogiaidau.html" className="smooth" title>video giải đấu</a>
                            <ul>
                              <li>
                                <a href="#" className="smooth" title>trang chủ</a>
                              </li>
                              <li>
                                <a href="#" className="smooth" title>trang chủ</a>
                              </li>
                              <li>
                                <a href="#" className="smooth" title>trang chủ</a>
                              </li>
                              <li>
                                <a href="#" className="smooth" title>trang chủ</a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="muave1.html" className="smooth" title>mua vé</a>
                          </li>
                          <li>
                            <a href="#" className="smooth" title>golfnewtv</a>
                          </li>
                          <li>
                            <a href="#" className="smooth" title>livescore</a>
                          </li>
                          <li>
                            <button id="search-form-btn" type="button">
                              <i className="fa fa-search" />
                            </button>
                            <form className="search-form-header">
                              <input type="text" name placeholder="Nhập từ khóa cần tìm" />
                              <button type="submit">
                                <i className="fa fa-search" />
                              </button>
                            </form>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container-fluid">
              <div className="row">
                <div className="header-banner">
                  <img src="img/bn1.jpg" />
                </div>
              </div>
            </div>
            <div className="header-infor">
              <div className="container">
                <div className="row">
                  <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 truy-van">
                    <p><b>Truy vấn</b></p>
                    <p>Thông tin cá nhân tại giải</p>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <form className="form-dki">
                      <div className="row">
                        <input style={{width: '223px', height: '30px', border: 'none'}} type="text" placeholder="Nhập số điện thoại đã đăng kí" />
                        <select style={{width: '223px', height: '30px', border: 'none'}}>
                          <option>Chon giai dau</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </select>
                        <button id="bt-home" style={{borderRadius: 0}}>Tìm kiếm</button>
                      </div>
                    </form>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                    <div className="hotline-info">
                      <p><b> Hotline</b></p>
                      <p>  0984.888.666  Ms. Phượng Anh</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
          
        );
    }
}

export default Header;
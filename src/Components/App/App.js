import React from 'react';
import logo from './logo.svg';
import Headers from '../Header/Header.js';
import Footer from '../Footer/Footer.js';


import './App.css';

function App() {
  return (
    <div>
<Headers/>
  <div className="top-content">
    <div className="container-fluid">
      <div className="col-lg-12">
        <h1 style={{textAlign: 'center'}}>
          Lịch thi đấu 2020
        </h1>
        <p style={{textAlign: 'center'}}><a href="#">Xem cả mùa giải 20 ngày thi đấu chỉ với 1000.000 VND. Vé chỉ bán tới hết 31/2/2020.</a></p>
      </div>
    </div>
    <div className="container text-center lich-box">
      <div className="row">
        <ul className="nav nav-tabs menu-tab-list" role="tablist">
          <li role="presentation"><a href="#tab1" role="tab" data-toggle="tab">vcc</a></li>
          <li role="presentation"><a href="#tab2" role="tab" data-toggle="tab">vsc</a></li>
          <li role="presentation"><a href="#tab3" role="tab" data-toggle="tab">vao</a></li>
          <li role="presentation"><a href="#tab4" role="tab" data-toggle="tab">vlao</a></li>
          <li role="presentation"><a href="#tab5" role="tab" data-toggle="tab">vjo</a></li>
          <li role="presentation"><a href="#tab6" role="tab" data-toggle="tab">vmc</a></li>
        </ul>
        <div className="tab-content">
          <div role="tabpanel" className="tab-pane active" id="tab1">
            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
              <div className="img-content">
                <img src="img/group2.png" />
              </div>
            </div>
            <div className="col-lg-6 col-sm-6 col-xs-12">
              <a href="#"><p className="big">vô địch golf các clb việt nam</p></a>
              <div className="cont-all">
                <div className="cont-1">
                  <p><i className="fa fa-calendar" /> 15/03/2020</p>
                  <p><i className="fa fa-map-marker gps" /> Sân FLC Thanh Hóa</p>
                </div>
                <div className="cont-2">
                  <p><i className="fa fa-file-pdf-o" /> <a href="#">Điều lệ giải</a></p>
                  <p><i className="fa fa-history" /> <a href="#">Lịch sử giải đấu</a></p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12 style-top">
              <div className="all-ct-button">
                <div className="button-chi-tiet bt1">
                  <div className="button-price-ct-1">
                    <p>4.000.000 VND</p>
                  </div>
                  <div className="button-text">
                    <button>THAM GIA</button>
                  </div>
                </div>
                <div className="button-chi-tiet bt2">
                  <div className="button-price-ct">
                    <p style={{color: '#0CACA7'}}>4.000.000 VND</p>
                  </div>
                  <div className="button-text">
                    <button style={{background: '#0CACA7'}}>THAM GIA</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div role="tabpanel" className="tab-pane" id="tab2">
            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
              <div className="img-content">
                <img src="img/group2.png" />
              </div>
            </div>
            <div className="col-lg-6 col-sm-6 col-xs-12">
              <a href="#"><p className="big">vô địch golf các clb châu âu</p></a>
              <div className="cont-all">
                <div className="cont-1">
                  <p><i className="fa fa-calendar " /> 15/03/2020</p>
                  <p><i className="fa fa-map-marker" /> Sân FLC Thanh Hóa</p>
                </div>
                <div className="cont-2">
                  <p><i className="fa fa-file-pdf-o" /> <a href="#">Điều lệ giải</a></p>
                  <p><i className="fa fa-history" /> <a href="#">Lịch sử giải đấu</a></p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12 style-top">
              <div className="all-ct-button">
                <div className="button-chi-tiet bt1">
                  <div className="button-price-ct-1">
                    <p>4.000.000 VND</p>
                  </div>
                  <div className="button-text">
                    <button>THAM GIA</button>
                  </div>
                </div>
                <div className="button-chi-tiet bt2">
                  <div className="button-price-ct">
                    <p style={{color: '#0CACA7'}}>4.000.000 VND</p>
                  </div>
                  <div className="button-text">
                    <button style={{background: '#0CACA7'}}>THAM GIA</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div role="tabpanel" className="tab-pane" id="tab3">
            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
              <div className="img-content">
                <img src="img/group2.png" />
              </div>
            </div>
            <div className="col-lg-6 col-sm-6 col-xs-12">
              <a href="#"><p className="big">vô địch golf các clb châu á</p></a>
              <div className="cont-all">
                <div className="cont-1">
                  <p><i className="fa fa-calendar " /> 15/03/2020</p>
                  <p><i className="fa fa-map-marker" /> Sân FLC Thanh Hóa</p>
                </div>
                <div className="cont-2">
                  <p><i className="fa fa-file-pdf-o" /> <a href="#">Điều lệ giải</a></p>
                  <p><i className="fa fa-history" /> <a href="#">Lịch sử giải đấu</a></p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12 style-top">
              <div className="all-ct-button">
                <div className="button-chi-tiet bt1">
                  <div className="button-price-ct-1">
                    <p>4.000.000 VND</p>
                  </div>
                  <div className="button-text">
                    <button>THAM GIA</button>
                  </div>
                </div>
                <div className="button-chi-tiet bt2">
                  <div className="button-price-ct">
                    <p style={{color: '#0CACA7'}}>4.000.000 VND</p>
                  </div>
                  <div className="button-text">
                    <button style={{background: '#0CACA7'}}>THAM GIA</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div role="tabpanel" className="tab-pane" id="tab4">
            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
              <div className="img-content">
                <img src="img/group2.png" />
              </div>
            </div>
            <div className="col-lg-6 col-sm-6 col-xs-12">
              <a href="#"><p className="big">Vô địch golf các câu lạc bộ châu phi</p></a>
              <div className="cont-all">
                <div className="cont-1">
                  <p><i className="fa fa-calendar " /> 15/03/2020</p>
                  <p><i className="fa fa-map-marker" /> Sân FLC Thanh Hóa</p>
                </div>
                <div className="cont-2">
                  <p><i className="fa fa-file-pdf-o" /> <a href="#">Điều lệ giải</a></p>
                  <p><i className="fa fa-history" /> <a href="#">Lịch sử giải đấu</a></p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12 style-top">
              <div className="all-ct-button">
                <div className="button-chi-tiet bt1">
                  <div className="button-price-ct-1">
                    <p>4.000.000 VND</p>
                  </div>
                  <div className="button-text">
                    <button>THAM GIA</button>
                  </div>
                </div>
                <div className="button-chi-tiet bt2">
                  <div className="button-price-ct">
                    <p style={{color: '#0CACA7'}}>4.000.000 VND</p>
                  </div>
                  <div className="button-text">
                    <button style={{background: '#0CACA7'}}>THAM GIA</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div role="tabpanel" className="tab-pane" id="tab5">
            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
              <div className="img-content">
                <img src="img/group2.png" />
              </div>
            </div>
            <div className="col-lg-6 col-sm-6 col-xs-12">
              <a href="#"><p className="big">Vô địch golf các câu lạc bộ châu mỹ</p></a>
              <div className="cont-all">
                <div className="cont-1">
                  <p><i className="fa fa-calendar " /> 15/03/2020</p>
                  <p><i className="fa fa-map-marker" /> Sân FLC Thanh Hóa</p>
                </div>
                <div className="cont-2">
                  <p><i className="fa fa-file-pdf-o" /> <a href="#">Điều lệ giải</a></p>
                  <p><i className="fa fa-history" /> <a href="#">Lịch sử giải đấu</a></p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12 style-top">
              <div className="all-ct-button">
                <div className="button-chi-tiet bt1">
                  <div className="button-price-ct-1">
                    <p>4.000.000 VND</p>
                  </div>
                  <div className="button-text">
                    <button>THAM GIA</button>
                  </div>
                </div>
                <div className="button-chi-tiet bt2">
                  <div className="button-price-ct">
                    <p style={{color: '#0CACA7'}}>4.000.000 VND</p>
                  </div>
                  <div className="button-text">
                    <button style={{background: '#0CACA7'}}>THAM GIA</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div role="tabpanel" className="tab-pane" id="tab6">
            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
              <div className="img-content">
                <img src="img/group2.png" />
              </div>
            </div>
            <div className="col-lg-6 col-sm-6 col-xs-12">
              <a href="#"><p className="big">Vô địch golf các câu lạc bộ thế giới</p></a>
              <div className="cont-all">
                <div className="cont-1">
                  <p><i className="fa fa-calendar " /> 15/03/2020</p>
                  <p><i className="fa fa-map-marker" /> Sân FLC Thanh Hóa</p>
                </div>
                <div className="cont-2">
                  <p><i className="fa fa-file-pdf-o" /> <a href="#">Điều lệ giải</a></p>
                  <p><i className="fa fa-history" /> <a href="#">Lịch sử giải đấu</a></p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12 style-top">
              <div className="all-ct-button">
                <div className="button-chi-tiet bt1">
                  <div className="button-price-ct-1">
                    <p>4.000.000 VND</p>
                  </div>
                  <div className="button-text">
                    <button>THAM GIA</button>
                  </div>
                </div>
                <div className="button-chi-tiet bt2">
                  <div className="button-price-ct">
                    <p style={{color: '#0CACA7'}}>4.000.000 VND</p>
                  </div>
                  <div className="button-text">
                    <button style={{background: '#0CACA7'}}>THAM GIA</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="container">
    <div className="row">
      <div className="col-lg-12 col-xs-12 qc-mobile">
        <a href="#"><div style={{margin: '20px 0px'}} className="qc" /></a>
      </div>
      <div className="col-lg-12 col-xs-12">
        <a href="#"><h2 style={{textAlign: 'center', textTransform: 'uppercase', padding: '0px'}}>Tin giải đấu</h2></a>
      </div>
      <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6">
        <div className="post-main">
          <a href="#"><img src="img/video.png" /></a>
          <a href="#"><p><b> Những hình ảnh đầu tiên tại vòng mở màn Honda Classic 2019</b></p></a>
          <p className="post-time"><i className="fa fa-clock-o" /> 1 ngày trước</p>
          <p>Đội tuyển WAGC Việt Nam chia sẻ cảm xúc khi giành vô địch Vòng Chung kết WAGC thế giới 2018</p>
        </div>
      </div>
      <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6">
        <div className="post-main">
          <a href="#"><img src="img/video.png" /></a>
          <a href="#"><p><b> Những hình ảnh đầu tiên tại vòng mở màn Honda Classic 2019</b></p></a>
          <p className="post-time"><i className="fa fa-clock-o" /> 1 ngày trước</p>
          <p>Đội tuyển WAGC Việt Nam chia sẻ cảm xúc khi giành vô địch Vòng Chung kết WAGC thế giới 2018</p>
        </div>
      </div>
      <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6">
        <div className="post-main">
          <a href="#"> <img src="img/video.png" /></a>
          <a href="#"><p><b> Những hình ảnh đầu tiên tại vòng mở màn Honda Classic 2019</b></p></a>
          <p className="post-time"><i className="fa fa-clock-o" /> 1 ngày trước</p>
          <p>Đội tuyển WAGC Việt Nam chia sẻ cảm xúc khi giành vô địch Vòng Chung kết WAGC thế giới 2018</p>
        </div>
      </div>
      <div style={{textAlign: 'center'}} className="col-lg-12 col-xs-12">
        <button className="btn-all">Xem thêm</button>
      </div>
      <div className="col-lg-12 col-xs-12 qc-mobile">
        <a href="#"><div style={{marginBottom: '50px'}} className="qc" /></a>
      </div>
    </div>
  </div>
  <div className="all-video-home">
    <div style={{background: '#2F2F2F'}} className="container">
      <div className="row">
        <div className="col-lg-12">
          <a href="#"><p style={{textAlign: 'center', textTransform: 'uppercase', fontSize: '32px', marginTop: '30px'}}>Video giải đấu</p></a>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6">
          <div className="post-main">
            <a href="#"><img src="img/video.png" /></a>
            <a href="#"><p><b> Những hình ảnh đầu tiên tại vòng mở màn Honda Classic 2019</b></p></a>
            <p className="post-time"><i className="fa fa-clock-o" /> 1 ngày trước</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6">
          <div className="post-main">
            <a href="#"><img src="img/video.png" /></a>
            <a href="#"><p><b> Những hình ảnh đầu tiên tại vòng mở màn Honda Classic 2019</b></p></a>
            <p className="post-time"><i className="fa fa-clock-o" /> 1 ngày trước</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6">
          <div className="post-main">
            <a href="#"><img src="img/video.png" /></a>
            <a href="#"><p><b> Những hình ảnh đầu tiên tại vòng mở màn Honda Classic 2019</b></p></a>
            <p className="post-time"><i className="fa fa-clock-o" /> 1 ngày trước</p>
          </div>
        </div>
        <div style={{textAlign: 'center'}} className="col-lg-12 col-xs-12">
          <button className="btn-all">Xem thêm</button>
        </div>
      </div>
    </div>
  </div>
  <section className="center slider">
    <div style={{maxWidth: '150px'}}>
      <img style={{maxWidth: '150px'}} src="img/trucquang.png" />
    </div>
    <div style={{maxWidth: '150px'}}>
      <img style={{maxWidth: '150px'}} src="img/trucquang.png" />
    </div>
    <div style={{maxWidth: '150px'}}>
      <img style={{maxWidth: '150px'}} src="img/trucquang.png" />
    </div>
    <div style={{maxWidth: '150px'}}>
      <img style={{maxWidth: '150px'}} src="img/trucquang.png" />
    </div>
    <div style={{maxWidth: '150px'}}>
      <img style={{maxWidth: '150px'}} src="img/trucquang.png" />
    </div>
    <div style={{maxWidth: '150px'}}>
      <img style={{maxWidth: '150px'}} src="img/trucquang.png" />
    </div>
    <div style={{maxWidth: '150px'}}>
      <img style={{maxWidth: '150px'}} src="img/trucquang.png" />
    </div>
    <div style={{maxWidth: '150px'}}>
      <img style={{maxWidth: '150px'}} src="img/trucquang.png" />
    </div>
    <div style={{maxWidth: '150px'}}>
      <img style={{maxWidth: '150px'}} src="img/trucquang.png" />
    </div>
  </section>
 <Footer/>
 <a href="#" id="back-to-top" title="Back to top">
    <i className="fa fa-chevron-up" />
  </a>
</div>

  );
}

export default App;

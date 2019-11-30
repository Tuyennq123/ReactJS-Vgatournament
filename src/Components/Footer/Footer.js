import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer>
    <div className="all-box">
      <div style={{background: 'none'}} className="container">
        <div className="row">
          <div className="col-lg-2 col-md-12 col-sm-12 col-xs-12">
            <div className="logo-footer">
              <img src="img/logo-footer.png" />
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-xs-12">
            <h5 style={{fontWeight: 'bold'}}> Mọi thông tin, đóng góp vui lòng liên hệ:</h5>
            <p><i className="fa fa-map-marker" /> VGS Event - Tầng 2, 101 ngách 5, ngõ 92 Nguyễn Khánh Toàn, Cầu Giấy, Hà Nội</p>
            <p><i className="fa fa-phone" /> Hotline: 0988888888</p>
            <p><i className="fa fa-envelope-square" /> Email: sponsor@vgsholding.com</p>
          </div>
          <div className="col-lg-4 col-md-12 col-xs-12 ft">
            <div className="icon">
              <p className="icon-footer"><i className="fa fa-facebook fa-2x" /></p>
              <p className="icon-footer"><i className="fa fa-youtube fa-2x" /></p>
              <p className="icon-footer"><i className="fa fa-google fa-2x" /></p>
              <p className="icon-footer"><i className="fa fa-camera fa-2x" /></p>
            </div>
            <p className="Copyright"> Copyright © 2018 by VGSholding</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
 
        );
    }
}

export default Footer;
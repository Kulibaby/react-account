import React from "react";
import "./login.scss";
import "./script";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

function Login() {
  return (
    <div className="container Login" id="container">
      <div className="form-container sign-up">
        <form>
          <h1>Đăng Ký Tài Khoản</h1>
          <div className="social-icon">
            <a href="#" className="icon">
              <FontAwesomeIcon icon={faGoogle} />
            </a>
          </div>
          <span>Hoặc sử dụng email của bạn cho đăng ký tài khoản</span>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Đăng Ký</button>
        </form>
      </div>
      <div className="form-container sign-in">
        <form>
          <h1>Đăng Nhập</h1>
          <div className="social-icon">
            <a href="#" className="icon">
              <FontAwesomeIcon icon={faGoogle} />
            </a>
          </div>
          <span>Hoặc sử dụng email của bạn đăng ký</span>
          <input type="email" id="emailInput" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <a href="#">Quên mật khẩu?</a>
          <button>Đăng Nhập</button>
        </form>
      </div>

      <div className="toggle-container">
        <div className="toggle">
          <div className="toggle-panel toggle-left">
            <h1>Chào mừng bạn đã trở lại!</h1>
            <p>
              Nhập thông tin cá nhân của bạn để sử dụng tất cả các tính năng của
              trang web
            </p>
            <button className="hidden" id="login">
              Đăng Nhập
            </button>
          </div>

          <div className="toggle-panel toggle-right">
            <h1>Xin chào!</h1>
            <p>
              Đăng ký với thông tin cá nhân của bạn để sử dụng tất cả các tính
              năng của trang web
            </p>
            <button className="hidden" id="register">
              Đăng Ký
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

import config from "../../config.json";
import loginImage from "../../assets/images/login-page-img.png";

function Login() {
  return (
    <div className="login-wrap d-flex align-items-center flex-wrap justify-content-center">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 col-lg-7">
            <img src={loginImage} alt="" />
          </div>
          <div className="col-md-6 col-lg-5">
            <div className="login-box bg-white box-shadow border-radius-10">
              <div className="login-title">
                <h2 className="text-center text-primary">
                  Login To {config.APP_NAME}
                </h2>
              </div>
              <form>
                <div className="input-group custom">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Username"
                  />
                  <div className="input-group-append custom">
                    <span className="input-group-text">
                      <i className="icon-copy dw dw-user1"></i>
                    </span>
                  </div>
                </div>
                <div className="input-group custom">
                  <input
                    type="password"
                    className="form-control form-control-lg"
                    placeholder="**********"
                  />
                  <div className="input-group-append custom">
                    <span className="input-group-text">
                      <i className="dw dw-padlock1"></i>
                    </span>
                  </div>
                </div>
                <div className="row pb-30">
                  <div className="col-6"></div>
                  <div className="col-6">
                    <div className="forgot-password">
                      <a href="#">Forgot Password</a>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12">
                    <div className="input-group mb-0">
                      <a className="btn btn-primary btn-lg btn-block" href="#">
                        Sign In
                      </a>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

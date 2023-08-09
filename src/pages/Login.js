import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form } from "react-bootstrap";
import DAnnimationIcon from "../components/DAnnimationIcon";
import "./Login.css";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="login">
      <div className="loginChild" />
      <div className="loginItem" />
      <div className="loginInner" />
      <div className="ellipseDiv" />
      <div className="ellispdeDiv2" />
      <div className="glassPannel" />
      <DAnnimationIcon />
      <b className="login1">login</b>
      <div className="welcomeToWoodempire">welcome to WoodEmpire payment</div>
      <Button className="rectangleButton" variant="primary">
        Submit
      </Button>
      
      <Button className="loginChild1" variant="outline-primary">
        Login with Gmail
      </Button>
      
      <Button className="loginChild2" variant="outline-primary">
        Login with Facebook
      </Button>
      <div className="lineDiv" />
      <div className="loginChild3" />
      <b className="or">or</b>
      <img className="rectangleIcon" alt="" src="/gmail.png" />
      <img className="loginChild4" alt="" src="/facebook.png" />
      <div className="userName">username</div>
      <Link className="forgotPassword" variant="outline-primary">
        Forgot Password?
      </Link>
      <div className="passWord">Password</div>
      <input className="rectangleInput" type="text" maxLength={998} />
      <input className="loginChild5" type="text" maxLength={1000} />
      <Form.Check className="ellipseFormcheck" type="radio" />
      <div className="rememberMe">{`Remember me `}</div>
    </div>
  );
};

export default Login;

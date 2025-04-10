import { useDispatch } from "react-redux";
import { useLoginMutation } from "../../redux/features/auth/authApi";
import { useForm } from "react-hook-form";
import { Settings } from "../../api";
import { setUser } from "../../redux/features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [handleLogin] = useLoginMutation();
  const { register, handleSubmit } = useForm();

  const onSubmit = async ({ username, password }) => {
    const loginData = {
      username: username,
      password: password,
      b2c: Settings.b2c,
    };
    const result = await handleLogin(loginData).unwrap();

    if (result.success) {
      const token = result?.result?.token;
      const bonusToken = result?.result?.bonusToken;
      const user = result?.result?.loginName;
      const game = result?.result?.buttonValue?.game;
      const memberId = result?.result?.memberId;
      dispatch(setUser({ user, token }));
      localStorage.setItem("memberId", memberId);
      localStorage.setItem("buttonValue", JSON.stringify(game));
      localStorage.setItem("token", token);
      localStorage.setItem("bonusToken", bonusToken);
      if (token && user) {
        navigate("/");
        toast.success("Login successful");
      }
    } else {
      toast.error(result?.error);
    }
  };

  /* handle login demo user */
  const loginWithDemo = async () => {
    /* Random token generator */
    /* Encrypted the post data */
    const loginData = {
      username: "demo",
      password: "",
      b2c: Settings.b2c,
    };
    const result = await handleLogin(loginData).unwrap();

    if (result.success) {
      const token = result?.result?.token;
      const bonusToken = result?.result?.bonusToken;
      const user = result?.result?.loginName;
      const game = result?.result?.buttonValue?.game;

      dispatch(setUser({ user, token }));
      localStorage.setItem("buttonValue", JSON.stringify(game));
      localStorage.setItem("token", token);

      localStorage.setItem("bonusToken", bonusToken);
      if (token && user) {
        dispatch(setShowLoginModal(false));
        toast.success("Login successful");
      }
    } else {
      toast.error(result?.error);
    }
  };

  return (
    <div data-role="page" className="ui-page ui-page-theme-a ui-page-active">
      <header className="login-head">
        <a href="#" className="close ui-link" />
        <h1>SKYEXCHANGE</h1>
      </header>
      <form onSubmit={handleSubmit(onSubmit)} className="form-login">
        <dd id="loginNameErrorClass">
          <input
            style={{ padding: "5px 5px" }}
            {...register("username", { required: true })}
            type="text"
            placeholder="Mobile/Username"
          />
        </dd>
        <dd id="passwordErrorClass">
          <input
            style={{ padding: "5px 5px" }}
            {...register("password", { required: true })}
            type="password"
            placeholder="Password"
          />
        </dd>

        <dd>
          <button
            style={{ width: "100%" }}
            className="btn-send ui-link"
            type="submit"
          >
            Login
          </button>
        </dd>
      </form>
    </div>
  );
};

export default Login;

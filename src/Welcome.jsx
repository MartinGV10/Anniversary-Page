import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Welcome() {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const changePage = (e) => {
    e.preventDefault();

    if (password === "hi") {
      navigate("/home");
    } else {
      alert("Nuh uh, henny is mad rn");
    }
  };

  return (
    <div className="opening-cont">
      <form onSubmit={changePage} className="home">
        <h1 className="welcome">Welcome</h1>
        <div className="f-bot">
          <label>What's the secret code???</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="sub" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Welcome;

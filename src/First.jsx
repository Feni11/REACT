import "./First.css";
import Second from "./Second";
const first  = () => {
  return (
    <>
      <div className="container">
        <div className="header">
          <div className="logo">
            <img
              src="https://bsihgp.yourbrand.studio/lib/bsihgp/logo-kx7plxu8.svg"
              alt=""
            />
          </div>
          <div className="menu">
            <ul>
              <li>Home</li>
              <li>About me</li>
              <li>Offer</li>
              <li>Blog</li>
              <li>Contact</li>
              <li>Shop</li>
            </ul>
          </div>
        </div>
      </div>
      <Second></Second>
    </>
  );
}

export default first;

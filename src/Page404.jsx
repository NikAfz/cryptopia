import { Link } from "react-router-dom";
import ton_symbol from "../public/icon/ton_symbol.png";
function Page404(props) {
  return (
    <>
    <div className="p404--container">

      <div className="t404--container">
        <h1>4</h1>
        <img src={ton_symbol} alt="0" />
        <h1>4</h1>
      </div>
      <p>
        NO PAGE FOUND | YOU CAN VISIT <Link to="/cryptopia" > <strong> HOME </strong> </Link>
      </p>
    </div>
    </>
  )
};

export default Page404;

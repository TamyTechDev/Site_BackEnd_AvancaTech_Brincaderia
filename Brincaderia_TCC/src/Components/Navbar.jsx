import { Link } from "react-router-dom";


function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
           
                <Link className="navbar-brand" to="/" > B.r.i.n.c.a.d.e.r.i.a</Link>
                <div>
                    <Link className="btn btn-outline-light me-2" to="/" > Home </Link>
                    <Link className="btn btn-success" to="/produtos" > Produtos </Link>
                </div>
        </div>
    </nav>
  );
}


export default Navbar;
import {CartWidget} from '../CartWidget/CartWidget';
import {NavDropdown} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export const NavBar = () => {

    return(
        <>
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-warning">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="">Mercado digital</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <Link to="/" className='nav-link'>Home</Link>
                                <Link to="/" className='nav-link'>Productos</Link>
                                <NavDropdown title="Categorias" id="basic-nav-dropdown">
                                <NavDropdown.Item ><Link to="/category/men's clothing" className='nav-link'>Indumentaria Hombre</Link></NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item ><Link to="/category/women's clothing" className='nav-link'>Indumentaria Mujer</Link></NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item ><Link to="/category/electronics" className='nav-link'>Electrodomesticos </Link></NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item ><Link to="/category/jewelery" className='nav-link'>Accesorios</Link></NavDropdown.Item>
                                </NavDropdown>
                                <Link to="/promotions/prom" className='nav-link'>Promociones</Link>
                            </div>
                        </div>
                        <CartWidget />
                    </div>
                </nav>
            </div>
            
        </>
    )
}


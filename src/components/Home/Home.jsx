import { React } from 'react';
import ItemListContainerHome from '../ItemContainerComponentsHome/ItemListContainerHome';
import Carousel from 'react-bootstrap/Carousel';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container'; import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const Home = () => {
    return (
        <>
            <div className='home'>
                <Container fluid>
                        <div className='info-home'>
                            <h3>Artisanally Selected Coffees Of The Highest Quality.</h3>
                            <p>GIVE THEM A TRY AND ELEVATE YOUR COFFEE EXPERIENCE!</p>
                            <NavLink className="nav-link" to="/category/shop">VISIT THE SHOP</NavLink>
                        </div>
                        <div>
                            <img src="https://firebasestorage.googleapis.com/v0/b/caramelcoffe-app.appspot.com/o/coffecup.png?alt=media&token=4bc854b8-fa2a-4ce7-9ed1-f0abf26584b6" alt="" />
                        </div>
                </Container>
            </div>
            <div className='home_products'>
                <div>
                    <ItemListContainerHome />
                    <div className='shop-link'><NavLink className="home-btn" to="/category/shop">SHOP NOW</NavLink></div>

                </div>
            </div>
        </>
    );
}

export default Home;

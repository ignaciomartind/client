import './styles/footer.css'

function Footer(){

    return <footer>
        <div className="footer-left">
            <h1><span style={{color:"#41a79d"}}>G</span>amarket</h1>
        </div>
        <div className="footer-mid">
            <div class="footer-ecosystem">
                <h2>Ecosystem</h2>
                <nav>
                    <ul>
                        <li><a href="#">Users</a></li>
                        <li><a href="#">Creators</a></li>
                        <li><a href="#">Afiliates</a></li>
                        <li><a href="#">Celebrities</a></li>
                        <li><a href="#">Brands</a></li>
                        <li><a href="#">Developers</a></li>
                    </ul>
                </nav>
            </div>
            <div class="footer-community">
                <h2>Community</h2>
                <nav>
                    <ul>
                        <li><a href="#">Marketplace</a></li>
                        <li><a href="#">Products</a></li>
                        <li><a href="#">Contest</a></li>
                        <li><a href="#">Labs</a></li>
                        <li><a href="#">Rewards</a></li>
                    </ul>
                </nav>
            </div>
            <div class="footer-company">
                <h2>Company</h2>
                <nav>
                    <ul>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Licenses</a></li>
                        <li><a href="#">Careers</a></li>
                    </ul>
                </nav>
            </div>
        </div>
        <div className="footer-right">
            <h2>Newsletter</h2>
            <input type="email"></input>
            <button className="btn-blue">Subscribe</button>
            <p>By subscribing you accept receiving <span style={{color: '#41a79d'}}>promotion emails</span></p>
        </div>
    </footer>
}

export default Footer
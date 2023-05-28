import "./FooterStyles.css";

const Footer = () =>{
    return(
        <div className="footer">
            <div className="top">
                <div>
                    <h1>File Compressor</h1>
                    <p>Compress any files.</p>
                </div>
                <div>
                    <a href="/">
                    <i className="fa-brands fa-facebook-square"></i>
                    </a>
                    <a href="/">
                    <i className="fa-brands fa-instagram-square"></i>
                    </a>
                    <a href="/">
                    <i className="fa-brands fa-github-square"></i>
                    </a>
                    <a href="/">
                    <i className="fa-brands fa-twitter-square"></i>
                    </a>
                </div>
            </div>

            <div className="bottom">
                <div>
                    <h4>INFO</h4>
                    <a href="/">Formats</a>
                    <a href="/">Compression</a>
                    <a href="/">Pricing</a>
                   
                </div>
                <div>
                    <h4>HELP</h4>
                    <a href="/">FAQ</a>
                    <a href="/">Status</a>
                   
                   
                </div>
                <div>
                    <h4>RESOURCES</h4>
                    <a href="/">Developer API</a>
                    <a href="/">Tools</a>
                    <a href="/">Blog</a>
                   
                </div>
                <div>
                    <h4>COMPANY</h4>
                    <a href="/">About Us</a>
                    <a href="/">Sustainability</a>
                    <a href="/">Terms of Service</a>
                    <a href="/">Privacy</a>
                   
                </div>
            </div>

        </div>
    )
}

export default Footer;
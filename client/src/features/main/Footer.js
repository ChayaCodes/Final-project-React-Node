import { Link, TableFooter } from "@mui/material";


const Footer = () => {
    return (
        <footer>
            <div className="concat-footer">
                <form>
                    <h5>השאירו פרטים ואחזור אליכם</h5>
                    <input type="text" placeholder="שם פרטי" />
                    <input type="text" placeholder="שם משפחה" />
                    <input type="text" placeholder="טלפון" />
                    <input type="email" placeholder="מייל" />
                    <input type="text" placeholder="הודעה" />
                    <button>יצחק, דבר איתי</button>
                </form>
            </div>
            <div className="footer">
                <div className="site's-policy">
                    <Link>תקנון האתר</Link>
                </div>
                <div >
                    <div className="footer-logo-and-words">
                        <img alt="logo" />
                        <p> כמה מילים על העסק כמה מילים על העסק כמה מילים על העסק</p>
                    </div>
                    <div className="footer-contact-details">
                        <b>יצירת קשר</b>
                        <p>יצחק פוליקמן</p>
                        <p>p5712787@gmail.com</p>
                        <p>052.7667.635</p>
                    </div>
                    <div className="footer-links">
                        <Link>בית</Link>
                        <Link>אודות</Link>
                        <Link>קורסים</Link>
                        <Link>הדרכות</Link>
                        <Link>קהילה</Link>
                        <Link>צור קשר</Link>
                    </div>


                </div>
            </div>

        </footer>
    );
}

export default Footer;
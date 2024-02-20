import { Link, TableFooter } from "@mui/material";
import MenuLink from "../../Components/MenuLink";


const Footer = () => {
    return (
        <footer style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" , backgroundColor: "#27254C", color: "white", padding: "20px" }}>
            <div className="footer-logo-and-words" style={{ width: "20%" }}>
                <img alt="logo" />
                <p> כמה מילים על העסק כמה מילים על העסק כמה מילים על העסק</p>
                <Link>תקנון האתר</Link>

            </div>
            <div className="footer-contact-details">
                <b>יצירת קשר</b>
                <p>יצחק פוליקמן</p>
                <p>p5712787@gmail.com</p>
                <p>052.7667.635</p>
            </div>
            <div className="footer-links" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <MenuLink style={{ fontSize: "15px", padding: "3px", color: "white"}}/>
                <MenuLink style={{ fontSize: "15px", padding: "3px", color: "white"}}>אודות</MenuLink>
                <MenuLink style={{ fontSize: "15px", padding: "3px", color: "white"}}>קורסים</MenuLink>
                <MenuLink style={{ fontSize: "15px", padding: "3px", color: "white"}}>הדרכות</MenuLink>
                <MenuLink style={{ fontSize: "15px", padding: "3px", color: "white"}}>קהילה</MenuLink>
                <MenuLink style={{ fontSize: "15px", padding: "3px", color: "white"}}>צור קשר</MenuLink>
            </div>
            <form style={{ display: "flex", flexDirection: "column", alignItems: "center" , backgroundColor: "white", padding: "20px", borderRadius: "10px" }}>
                <h5 style={{color: "black"}}>השאירו פרטים ואחזור אליכם</h5>
                <input type="text" placeholder="שם פרטי" style={{border: "1px solid #23bbae", borderRadius: "5px", padding: "5px", margin: "5px"}}/>
                <input type="text" placeholder="שם משפחה" style={{border: "1px solid #23bbae", borderRadius: "5px", padding: "5px", margin: "5px"}}/>
                <input type="text" placeholder="טלפון" style={{border: "1px solid #23bbae", borderRadius: "5px", padding: "5px", margin: "5px"}}/>
                <input type="email" placeholder="מייל" style={{border: "1px solid #23bbae", borderRadius: "5px", padding: "5px", margin: "5px"}}/>
                <input type="text" placeholder="הודעה" style={{border: "1px solid #23bbae", borderRadius: "5px", padding: "5px", margin: "5px", height: "40px"}}/>
                <button>יצחק, דבר איתי</button>
            </form>

        </footer>
    );
}

export default Footer;
import { Button } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import './HomePage.css';
import QanaA from './Accordion/QanaA';

function HomePage() {
  return (
    <div>
      <div style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: "url('/images/homePageHigh.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        marginTop: '-10vh',
      }}
      >
        <div style={{ position: 'absolute', right: '5vw', bottom: '5vh' }}>
          <h1>
            “ציטוט או אמרה חכמה
            <br />
            של מישהו מוכר שקשור לתחום”
          </h1>
          <div>
            <Button variant="contained" color="secondary" style={{ borderRadius: '20px', marginLeft: '10px' }}>
              מעבר להדרכות
              <FontAwesomeIcon icon={faArrowLeft} size="sm" color="#000" />
            </Button>
            <Button
              variant="contained"
              color="tertiary"
              style={{
                borderRadius: '20px',
                color: 'white',
                backgroundColor: 'transparent',
                border: '1px solid gray',
                transition: 'background-color 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = 'gray';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
              }}
            >
              הצטרפות לקהילה
              {' '}
              <FontAwesomeIcon icon={faArrowLeft} color="white" size="sm" />
            </Button>
          </div>
        </div>
      </div>
      <div className="home-page-2">
        <h1>כותרת</h1>
        <div className="home-page-2-text">
          <div>סרטונים והדרכות</div>
          <div>הצטרפות לקהילה</div>
          <div>הקורסים שלנו</div>
          <div> אבחון עצמי</div>
        </div>

      </div>
      <div className="home-page-3">
        <h1>טעימה מסרטונים וההדרכות שלנו</h1>
        <div className="home-page-3-videos">
          <div className="video">
            <img src="/images/video1.png" alt="video1" />
            <h2>כותרת סרטון</h2>
          </div>
          <div className="video">
            <img src="/images/video2.png" alt="video2" />
            <h2>כותרת סרטון</h2>
          </div>
          <div className="video">
            <img src="/images/video3.png" alt="video3" />
            <h2>כותרת סרטון</h2>
          </div>
        </div>
      </div>
      <div className="home-page-4">
        <h1>הצטרפות לקהילה שלנו</h1>
        <p>ברישום לקהילה תיהנה ממפגש שבועי בזום, המפגש יקנה לך כלים עדכניים ומעשיים לעבודה יעילה ומתקדמת!</p>
        <Button variant="contained" color="secondary">הצטרפות לקהילה</Button>
      </div>
      <div className="home-page-5">
        <h1>שאלות ותשובות</h1>
        <QanaA />

      </div>

    </div>
  );
}

export default HomePage;

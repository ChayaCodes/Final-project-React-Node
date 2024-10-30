import { Button } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import './HomePage.css';
import QanaA from './Accordion/QanaA';
import RecomendCard from './RecomendCard/RecomendCard';

const HomePage = () => {
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
        marginTop: '-64px',
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

              <FontAwesomeIcon icon={faArrowLeft} color="white" size="sm" />
            </Button>
          </div>
        </div>
      </div>


    </div>
  );
}

export default HomePage;

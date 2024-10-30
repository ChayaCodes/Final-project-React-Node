import { useEffect, useState } from 'react';
import { FaSpinner, FaCheck } from 'react-icons/fa'; 
import { useCreateContectMutation } from '../../features/Contect/ContectApiSlice';
import { Link } from 'react-router-dom';
import MenuLink from './MenuLink';

function Footer() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [alert, setAlert] = useState('');
  const [createContect, { isLoading, isSuccess, isError, data, error}] = useCreateContectMutation();
useEffect(() => {  
    if (isError) {
      setAlert(error.data.message);
    }
  }, [isError]);
  const handleSubmitContect = async (e) => {
e.preventDefault();
    setAlert('');
    if (firstName==='') {
      setAlert('שם פרטי הוא שדה חובה');
      return;
    }
    if (lastName==='') {
      setAlert('שם משפחה הוא שדה חובה');
      return;
    }
    if (email==='') {
      setAlert('מייל הוא שדה חובה');
      return;
    }
    if (message==='') {
      setAlert('הודעה היא שדה חובה');
      return;
    }
    try {
      await createContect({ firstName, lastName, phone, email, message });
    } catch (error) {
      console.error(error);
      // טיפול בשגיאה
    } 
  };
  return (
    <footer style={{
      display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#27254C', color: 'white', padding: '20px',
    }}
    >
      <div className="footer-logo-and-words" style={{ width: '20%' }}>
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
      <div className="footer-links" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <MenuLink style={{ fontSize: '15px', padding: '3px', color: 'white' }} />
        <MenuLink style={{ fontSize: '15px', padding: '3px', color: 'white' }}>אודות</MenuLink>
        <MenuLink style={{ fontSize: '15px', padding: '3px', color: 'white' }}>קורסים</MenuLink>
        <MenuLink style={{ fontSize: '15px', padding: '3px', color: 'white' }}>הדרכות</MenuLink>
        <MenuLink style={{ fontSize: '15px', padding: '3px', color: 'white' }}>קהילה</MenuLink>
        <MenuLink style={{ fontSize: '15px', padding: '3px', color: 'white' }}>צור קשר</MenuLink>
      </div>
      <form style={{
        display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: 'white', padding: '20px', borderRadius: '10px',
      }}
      >
        <h5 style={{ color: 'black' }}>השאירו פרטים ואחזור אליכם</h5>
        <input
          onChange={(e) => setFirstName(e.target.value)}
          type="text"
          placeholder="שם פרטי"
          style={{
            border: '1px solid #23bbae', borderRadius: '5px', padding: '5px', margin: '5px',
          }}
        />
        <input
          onChange={(e) => setLastName(e.target.value)}
          type="text"
          placeholder="שם משפחה"
          style={{
            border: '1px solid #23bbae', borderRadius: '5px', padding: '5px', margin: '5px',
          }}
        />
        <input
          onChange={(e) => setPhone(e.target.value)}
          type="text"
          placeholder="טלפון"
          style={{
            border: '1px solid #23bbae', borderRadius: '5px', padding: '5px', margin: '5px',
          }}
        />
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="מייל"
          style={{
            border: '1px solid #23bbae', borderRadius: '5px', padding: '5px', margin: '5px',
          }}
        />
        <input
          onChange={(e) => setMessage(e.target.value)}
          type="text"
          placeholder="הודעה"
          style={{
            border: '1px solid #23bbae', borderRadius: '5px', padding: '5px', margin: '5px', height: '40px',
          }}
        />
        <p className='alert' style={{ color: 'red' }}>{alert}</p>
        <button onClick={handleSubmitContect} disabled={isLoading} style={{
          backgroundColor: '#23bbae', color: 'white', border: 'none', borderRadius: '5px', padding: '10px 20px', cursor: isLoading ? 'default' : 'pointer', fontSize: '16px',
        }}>
          {isLoading ? <FaSpinner className="spinner" /> : isSuccess ? <><FaCheck /> קיבלנו את ההודעה, נחזור אלייך</> : 'יצחק, דבר איתי'}
        </button>     </form>

    </footer>
  );
}

export default Footer;

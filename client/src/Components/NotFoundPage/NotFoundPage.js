import { Link } from 'react-router-dom';



const NotFoundPage =()=> {
    return(
        <div style={{
            width: '100%',
            height: '100vh',
            backgroundColor: 'rgb(39, 37, 76)',
            color:'white',
            textAlign:'center',
            alignContent:'center',
        }}>
            <div>
                <h5 style={{fontSize: 20,  fontFamily: 'Futurism Regular',}}>אופס.... הגעת למקום שאנחנו לא מכירים</h5>
                <h1 style={{fontSize: 170, fontFamily: 'Futurism Regular',}}>404</h1>
                <Link to="/"><button style={{
                    backgroundColor: 'rgb(35, 187, 174)',
                    padding: 10,
                    borderStyle: 'none',
                    borderTopRightRadius: 20,
                    borderBottomLeftRadius: 15,
                    borderBottomRightRadius: 20,
                    borderStyle: 'none',
                    fontSize: 20,
                    color:'white',
                    margin: 20,
                }}>אני רוצה לשוב הביתה {'->'}</button></Link>
            </div>
        </div>
    )
}

export default NotFoundPage;
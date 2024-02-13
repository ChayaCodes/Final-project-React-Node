import { Link } from "@mui/material"

const MenuLink = (props) => {
    return <Link
        href={props.href}
        style={{ ...props.style, padding: '10px', color: '#00000' }}
        fontFamily={'Arial'}
        fontSize={props.fontSize||17}
        color={'#000000'}
        underline={'none'}>
            {props.children}
            
    </Link>

}

export default MenuLink


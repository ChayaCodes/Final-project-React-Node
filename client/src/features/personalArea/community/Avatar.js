const Avatar = ({ user }) => {
    console.log(user)
    if(!user){
        return <p>no user</p>
    }
    // if (user.avatar) {
    //     return <img src={user.avatar} alt={user.username} style={{ width: "50px", height: "50px", borderRadius: "50%" }} />
    // }
    return <div style={{ width: "50px", height: "50px", borderRadius: "50%", backgroundColor: user.color, display: "flex", justifyContent: "center", alignItems: "center" }}>{user.userName?user.userName[0]:"U"}</div>
};

export default Avatar;
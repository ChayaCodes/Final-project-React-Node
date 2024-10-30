import React, { useState, useEffect } from 'react';


const UploadImage =({initialImage})=> {

    const [file, setFile] = useState();

    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }

    useEffect(()=> {
        if(initialImage)
            setFile(initialImage.avatar);
        console.log(initialImage);
        console.log("in")
    }, [initialImage]);

    return(
        <div style={{width:300, height:50, display: 'flex'}} className="App">
            <h2>Add Image:</h2>
            <input type="file" onChange={handleChange} />
            <img src={file} style={{width:60, height:60, borderRadius: '50%'}}/>
        </div>
    )
}

export default UploadImage;
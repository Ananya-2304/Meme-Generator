import React from "react"

export default function Forms(){
    const [allMemeImages,setMemeImage] = React.useState([]);
    const [meme,setMeme] = React.useState({topText:"",
                                           bottomText:"",
                                           randomImage:""})
    React.useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setMemeImage(data.data.memes))
    },[])
    function randomMeme(){
        const rand = Math.floor((Math.random() * allMemeImages.length));
        const url = allMemeImages[rand].url;
        setMeme(prev => ({
           ...prev,randomImage:url
        }));
    }
    function handleChange(event){
        const {name,value} = event.target;
        setMeme(prev => {
            return {
                ...prev,
                [name]:value
            }
        })
    }
    return (
    <div className ="form">
        <div className = "memeRequirements">
            <div className = "top">
                <label for ="topText">Top Text</label>
                <input type = "text"
                       id = "topText"
                       className = "topText"
                       placeholder="Shut up"
                       name = "topText"
                       value = {meme.topText}
                       onChange={handleChange}
                />
            </div>
            <div className = "bottom">
                <label for ="bottomText">Bottom Text</label>
                <input type = "text"
                       id = "bottomText"
                       className = "bottomText"
                       placeholder="and take my money"
                       name = "bottomText"
                       value = {meme.bottomText}
                       onChange = {handleChange}
                />
            </div>
        </div>
        <div className ="buttonS"><button className = "generateMeme" onClick = {randomMeme}>Get a new meme Image</button></div>
        <div className = "meme">
            <h2 className="meme--text top">{meme.topText}</h2>
            <h2 className="meme--text bottom">{meme.bottomText}</h2>
            <img src = {meme.randomImage} className = "memeImage"/>
        </div>
    </div>
    )
}
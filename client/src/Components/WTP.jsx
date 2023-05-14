import React from 'react'
import wtp from './images/WTP.mov'
import axios from 'axios'
import { useState, useEffect } from 'react'

const WTP = () => {
    const rng = Math.floor((Math.random() * 152)+1)
    // setId(rng)
    
    //make object with name, id, sprites,
    const pokeObj = {
        pName: "",
        id: rng,
        spriteFD: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${rng}.png`,
        spriteFS: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${rng}.png`,
        spriteBD: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${rng}.png`,
        spriteBS: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/${rng}.png`
    }


    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${rng}`)
        .then(response => {
            console.log(response.data)
            console.log(rng)
            // const rng = Math.floor(Math.random() * 10)
            setPoke({
                pName: response.data.name,
                id: response.data.id,
                spriteFD: response.data.sprites.front_default,
                spriteFS: response.data.sprites.front_shiny,
                spriteBD: response.data.sprites.back_default,
                spriteBS: response.data.sprites.back_shiny
            })
            
            console.log(response.data.name)
            console.log(poke)
            console.log(pokeObj)
            })
            .catch(error => {
                console.log(error)
            })
        },[])



    const [poke, setPoke] = useState({
        pName: ``,
        id: rng,
        spriteFD: ``,
        spriteFS: ``,
        spriteBD: ``,
        spriteBS: ``
    })
    
    const [imgSrc, setImgSrc] = useState(poke.spriteFD)
    const [sillhouette, setSillhouette] = useState("sillhouette")
    const [WTP, setWTP] = useState(`Who's that Pokemon?`)

    // const [hidden, setHidden] = useState(true)
    // let arr = 0
    

    // useEffect(()=>{
    //     // newPoke();
    //     console.log(rng)
    //     setImgSrc(poke.spriteFD)
    //     axios.get(`https://pokeapi.co/api/v2/pokemon/${rng}`)
    //     .then(response => {
    //         console.log(response.data.name)
    //     })
    //     .catch(error => {
    //                     console.log(error)
    //     })
    // },[])
        
    const newPoke = () => {
        console.log("running newPoke");
        // setId(Math.floor(Math.random() * 152))
        // arr++
        // console.log(`nP ${pName}`)
        // console.log(`nP ${id}`)
        // console.log(`nP ${spriteFD}`)
        // if (hidden){
        //     console.log("hidden is true"+id)
            axios.get(`https://pokeapi.co/api/v2/pokemon/${rng}`)
            .then(response => {
                // setpName(response.data.name);
                // setSpriteFD(response.data.sprites.front_default);
                // setSpriteFS(response.data.sprites.front_shiny)
                setWTP(`Who's that Pokemon?`)
                setSillhouette("sillhouette")
                // setImgSrc(spriteFD)
            })
            .catch(error => {
                console.log(error)
            })
        // }
        //     const pokeText = document.querySelector(".js p");
        //     pokeText.innerText = `Who's that Pokemon?`
        //     pokeText.style.textTransform = "";

        //     })
    }

    const revealPoke = () => {
        console.log("running revealPoke");
        
        // setId(Math.floor(Math.random() * 152))
        // axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        // .then(response => {
        //     console.log(response.data)
        //     // const rng = Math.floor((Math.random() * 152)+1)
        //     // setId(rng)
        //     setpName(response.data.name);
        //     setSpriteFD(response.data.sprites.front_default);
        //     setSpriteFS(response.data.sprites.front_shiny)
        //     // setSpriteBD(response.data.sprites.back_default)
        //     // setSpriteBS(response.data.sprites.back_shiny)
        //     // console.log(response.data.sprites)
        setWTP(`It's ${poke.pName}!`)
        setSillhouette("")
        //     const pokeImg = document.querySelector(".js img");
        //     pokeImg.src = spriteFD
        //     const pokeText = document.querySelector(".js p");
        //     pokeText.innerText = `It's ${pName}!`
        //     pokeImg.classList.remove("sillhouette")
        //     pokeText.style.textTransform = "Capitalize";

        //     })
        //     .catch(error => {
        //         console.log(error)
        //     })
    }

    const shinyPoke = () => {
        console.log("running shinyPoke");
        // const pokeImg = document.querySelector(".js img");
        // if (pokeImg.classList.length === 0 && pokeImg.src === spriteFD) {
        //     pokeImg.src = spriteFS;
        // }
        // else if (pokeImg.classList.length === 0 && pokeImg.src === spriteFS) {
        //     pokeImg.src = spriteFD;
        // }
    }

    const defaultPoke = () => {
        console.log("running defaultPoke");
        // const pokeImg = document.querySelector(".js img");
        // if (pokeImg.classList.length === 0 && pokeImg.src === spriteFS) {
        //     pokeImg.src = spriteFD;
        // }
        // else if (pokeImg.classList.length === 0 && pokeImg.src === spriteFD) {
        //     pokeImg.src = spriteFS;
        // }
    }

    const frontPoke = () => {
        console.log("running frontPoke");
    //     let currentPoke = { newPoke };
    //     const response = fetch("https://pokeapi.co/api/v2/pokemon/" + currentPoke);
    //     const pokeData = response.json();
    //     const pokeImg = document.querySelector(".js img");
    //     if (pokeImg.classList.length === 0 && pokeImg.src === pokeData.sprites.back_default) {
    //         pokeImg.src = pokeData.sprites.front_default;
    //     } else if (pokeImg.classList.length === 0 && pokeImg.src === pokeData.sprites.back_shiny) {
    //         pokeImg.src = pokeData.sprites.front_shiny
    //     }
    }

    const backPoke = () => {
        console.log("running backPoke");
    //     let currentPoke = { newPoke };
    //     const response = fetch("https://pokeapi.co/api/v2/pokemon/" + currentPoke);
    //     const pokeData = response.json();
    //     const pokeImg = document.querySelector(".js img");
    //     if (pokeImg.classList.length === 0 && pokeImg.src === pokeData.sprites.front_default) {
    //         pokeImg.src = pokeData.sprites.back_default;
    //     } else if (pokeImg.classList.length === 0 && pokeImg.src === pokeData.sprites.front_shiny) {
    //         pokeImg.src = pokeData.sprites.back_shiny
    //     }
    }

    return (
        <div>
            <h4>Who's That Pokemon?</h4>
            <br />
            <div className="gameboy">
                <div className="gameboyScr">
                    <div className="js" >
                        <img src={imgSrc} className={sillhouette} alt="sillhouette" />
                        <p id="textBox">{WTP}</p>
                    </div>
                    <br />
                    <p>GAMEBOY <span className="C">C</span><span className="O">O</span><span className="L">L</span><span className="O2">O</span><span className="R">R</span></p>
                </div>
                <span className="nintendo">Nintendo</span>
                <div className="gameboyCtrl">
                    <div className="dpad">
                        <div className="sqBtn"></div>
                        <div className="sqBtn activeBtn" onClick={shinyPoke}>^</div>
                        <div className="sqBtn"></div>
                        <div className="sqBtn activeBtn" onClick={frontPoke}>&lt;</div>
                        <div className="sqBtn dot">•</div>
                        <div className="sqBtn activeBtn" onClick={backPoke}>&gt;</div>
                        <div className="sqBtn"></div>
                        <div className="sqBtn activeBtn" onClick={defaultPoke}>v</div>
                        <div className="sqBtn"></div>
                    </div>
                    <div className="AB">
                        <div className="cirBtn" onClick={newPoke}>B</div>
                        <div className="cirBtn A" onClick={revealPoke}>A</div>
                    </div>
                </div>
                <div className="ss">
                    <div className="start">
                        <div className="ssBtn"></div>
                        <div className="ssText">Start</div>
                    </div>
                    <div className="select">
                        <div className="ssBtn"></div>
                        <div className="ssText">Select</div>
                    </div>
                </div>
            </div>
            <video controls="controls" width="300">
                <source src={wtp} />
                {/* <source src={WTP}/> */}
            </video>
        </div>
    )
}

export default WTP
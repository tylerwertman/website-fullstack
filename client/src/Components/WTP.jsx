import React, { useState, useEffect } from 'react'
import wtp from './images/WTP.mov'
import axios from 'axios'
import { Tooltip } from 'react-tooltip'

const WTP = () => {
    let rng = Math.floor((Math.random() * 386) + 1)

    //make object with name, id, sprites,
    const [pokeObj, setPokeObj] = useState({
        pName: "",
        id: rng,
        spriteFD: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${rng}.png`,
        spriteFS: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${rng}.png`,
        spriteBD: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${rng}.png`,
        spriteBS: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/${rng}.png`,
        spriteFDf: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/female/${rng}.png`,
        spriteFSf: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/female/${rng}.png`,
        spriteBDf: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/female/${rng}.png`,
        spriteBSf: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/female${rng}.png`
    })

    const [isHidden, setIsHidden] = useState(true)
    const [isShiny, setIsShiny] = useState(false)
    const [isFront, setIsFront] = useState(true)
    const [isFemale, setIsFemale] = useState(false)

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${rng}`)
            .then(response => {
                setPokeObj({
                    pName: response.data.name,
                    id: response.data.id,
                    spriteFD: response.data.sprites.front_default,
                    spriteFS: response.data.sprites.front_shiny,
                    spriteBD: response.data.sprites.back_default,
                    spriteBS: response.data.sprites.back_shiny,
                    spriteFDf: response.data.sprites.front_female,
                    spriteFSf: response.data.sprites.front_shiny_female,
                    spriteBDf: response.data.sprites.back_female,
                    spriteBSf: response.data.sprites.back_shiny_female
                })
                // console.log(response.data)
            })
            .catch(error => {
                console.log(error)
            })
        // eslint-disable-next-line
    }, [])

    const newPoke = () => {
        // console.log("running newPoke");
        rng = Math.floor((Math.random() * 386) + 1)
        axios.get(`https://pokeapi.co/api/v2/pokemon/${rng}`)
            .then(response => {
                console.log(pokeObj)
                setPokeObj({
                    pName: response.data.name,
                    id: response.data.id,
                    spriteFD: response.data.sprites.front_default,
                    spriteFS: response.data.sprites.front_shiny,
                    spriteBD: response.data.sprites.back_default,
                    spriteBS: response.data.sprites.back_shiny,
                    spriteFDf: response.data.sprites.front_female,
                    spriteFSf: response.data.sprites.front_shiny_female,
                    spriteBDf: response.data.sprites.back_female,
                    spriteBSf: response.data.sprites.back_shiny_female
                })
                setIsHidden(true)
                setIsFront(true)
                setIsShiny(false)
                setIsFemale(false)
                // setImgSrc(spriteFD)
            })
            .catch(error => {
                console.log(error)
            })
    }

    const revealPoke = () => {
        // console.log("running revealPoke");
        setIsHidden(false)
    }

    const shinyPoke = () => {
        if (!isHidden && !isShiny) setIsShiny(!isShiny)
    }
    const defaultPoke = () => {
        if (!isHidden && isShiny) setIsShiny(!isShiny)
    }

    const backPoke = () => {
        if (!isHidden && isFront) setIsFront(!isFront)
    }
    const frontPoke = () => {
        if (!isHidden && !isFront) setIsFront(!isFront)
    }

    const femalePoke = () => {
        if (!isHidden && !isFemale && pokeObj.spriteBDf) setIsFemale(true)
    }
    const malePoke = () => {
        if (!isHidden && isFemale && pokeObj.spriteBDf) setIsFemale(false)

    }

    const capitalize = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    return (
        <div>
            <Tooltip id="shinyPoke" />
            <Tooltip id="backPoke" />
            <Tooltip id="frontPoke" />
            <Tooltip id="defaultPoke" />
            <Tooltip id="newPoke" />
            <Tooltip id="revealPoke" />
            <Tooltip id="femalePoke" />
            <Tooltip id="malePoke" />
            <h4>Who's That Pokemon? (Interactive)</h4>
            <br />
            <div className="gameboy">
                <div className="gameboyScr">
                    <div className="js" >
                        <img src={
                            !isShiny && isFront && isFemale ? pokeObj.spriteFDf :
                                isShiny && isFront && isFemale ? pokeObj.spriteFSf :
                                    !isShiny && !isFront && isFemale ? pokeObj.spriteBDf :
                                        isShiny && !isFront && isFemale ? pokeObj.spriteBSf :
                                            !isShiny && isFront ? pokeObj.spriteFD :
                                                isShiny && isFront ? pokeObj.spriteFS :
                                                    !isShiny && !isFront ? pokeObj.spriteBD :
                                                        isShiny && !isFront ? pokeObj.spriteBS : null
                        } className={isHidden ? "sillhouette" : null} alt="sillhouette" />
                        <p id="textBox">{isHidden ? "Who's that Pokemon?" : isFemale ? `It's ${capitalize(pokeObj.pName)} ♀` :`It's ${capitalize(pokeObj.pName)}`}</p>
                    </div>
                    <br />
                    <p>GAMEBOY <span className="C">C</span><span className="O">O</span><span className="L">L</span><span className="O2">O</span><span className="R">R</span></p>
                </div>
                <span className="nintendo">Nintendo</span>
                <div className="gameboyCtrl">
                    <div className="dpad">
                        <div className="sqBtn"></div>
                        <div className="sqBtn activeBtn" onClick={shinyPoke} data-tooltip-id="shinyPoke" data-tooltip-content="Shiny variant">^</div>
                        <div className="sqBtn"></div>
                        <div className="sqBtn activeBtn" onClick={backPoke} data-tooltip-id="backPoke" data-tooltip-content="Back view">&lt;</div>
                        <div className="sqBtn dot">•</div>
                        <div className="sqBtn activeBtn" onClick={frontPoke} data-tooltip-id="frontPoke" data-tooltip-content="Front view">&gt;</div>
                        <div className="sqBtn"></div>
                        <div className="sqBtn activeBtn" onClick={defaultPoke} data-tooltip-id="defaultPoke" data-tooltip-content="Default variant">v</div>
                        <div className="sqBtn"></div>
                    </div>
                    <div className="AB">
                        <div className="cirBtn" onClick={newPoke} data-tooltip-id="newPoke" data-tooltip-content="New Pokemon">B</div>
                        <div className="cirBtn A" onClick={revealPoke} data-tooltip-id="revealPoke" data-tooltip-content="Reveal Pokemon">A</div>
                    </div>
                </div>
                <div className="ss">
                    <div className="start">
                        <div className="ssBtn activeBtn" onClick={femalePoke} data-tooltip-id="femalePoke" data-tooltip-content="Female variant (if available)"></div>
                        <div className="ssText">Start</div>
                    </div>
                    <div className="select">
                        <div className="ssBtn activeBtn" onClick={malePoke} data-tooltip-id="malePoke" data-tooltip-content="Male variant (default)"></div>
                        <div className="ssText">Select</div>
                    </div>
                </div>
            </div>
            <video controls="controls" width="240">
                <source src={wtp} />
                {/* <source src={WTP}/> */}
            </video>
        </div>
    )
}

export default WTP
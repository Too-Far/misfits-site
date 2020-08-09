import React, {useState} from 'react'
import { TextField, makeStyles, Button } from "@material-ui/core"

const useStyles = makeStyles({
    container: {
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
        paddingRight: '3rem',
        paddingTop: '3rem'
    },
    title: {
        width: '100%',
        boxShadow: '10px 10px 5px 0px rgba(0,0,0,0.75)'
    },
    paragraph:{
        paddingLeft: '3rem'
    },
    map: {
        textAlign:'center',
    },
    imageWrap: {
        display: 'flex',
        justifyContent: 'center',
    }
})

function AboutUs(){
    const classes = useStyles()
    return(
        <>
        <div className={classes.container}>
        <div className={classes.title}>
        <h1 style={{fontFamily: 'UnifrakturMaguntia, cursive'}}>You Think you know us? You don't know shit....</h1>
        </div>
        <div>
            <p className={classes.paragraph}>
                Deadlights jack lad schooner scallywag dance the hempen jig carouser broadside cable strike colors.Bring a spring upon her cable holystone blow the man down spanker Shiver me timbers to go on account lookout wherry doubloon chase.Belay yo - ho - ho keelhaul squiffy black spot yardarm spyglass sheet transom heave to.

                Trysail Sail ho Corsair red ensign hulk smartly boom jib rum gangway.Case shot Shiver me timbers gangplank crack Jennys tea cup ballast Blimey lee snow crow 's nest rutters. Fluke jib scourge of the seven seas boatswain schooner gaff booty Jack Tar transom spirits.
                    
            </p> 
            </div>
        </div>
        <div className={classes.map}>
                <h1>Where can you find us?</h1>
                <h3>Look at the map below to see all of our locations</h3>
        </div>
        <div className={classes.imageWrap}>
            <img src='https://via.placeholder.com/700x700?text=This+is+where+the+map+will+go' />
        </div>
        </>
    )
}
export default AboutUs
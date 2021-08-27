import {React, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) =>({
    root:{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    }
}));

const Uno = () => {
    const classes = useStyles();
    const [Fondo, setFondo] = useState("lightcoral");

    const handleClick = () => {
        var colores = ["lightcyan","lightgoldenrodyellow","lightgreen","lightpink","lightsalmon","lightskyblue","lightyellow","lightblue","lightcoral","lightseagreen","lightslategray","lightsteelblue"];
	    var numero = (Math.random()*11).toFixed(0);
        setFondo(colores[numero]);
    }

    return (
        <div className={classes.root} style={{backgroundColor: Fondo}}>
            <Button onClick={() => handleClick()}>Click me!!</Button>
        </div>
    );
}



export default Uno;

import { React, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    }
}));

const Dos = () => {
    const classes = useStyles();
    const [Fondo1, setFondo1] = useState("lightcoral");
    const [Fondo2, setFondo2] = useState("lightblue");

    const handleClick = () => {
        var colores = ["lightcyan", "lightgoldenrodyellow", "lightgreen", "lightpink", "lightsalmon", "lightskyblue", "lightyellow", "lightblue", "lightcoral", "lightseagreen", "lightslategray", "lightsteelblue"];
        var numero = (Math.random() * 11).toFixed(0);
        var numero2 = (Math.random() * 11).toFixed(0);
        var nuevo1 = colores[numero];
        var nuevo2 = colores[numero2];
        if (nuevo1 !== nuevo2) {
            setFondo1(colores[numero]);
            setFondo2(colores[numero2]);
        } else {
            setFondo1("lightcyan");
            setFondo2("lightpink");
        };
    }

    return (
        <div className={classes.root} style={{ background: `linear-gradient(${Fondo1}, ${Fondo2})` }}>
            <Button onClick={() => handleClick()}>Click me!!</Button>
        </div>
    );
}



export default Dos;

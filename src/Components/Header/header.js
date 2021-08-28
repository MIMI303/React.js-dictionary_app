import { createTheme, MenuItem, TextField, ThemeProvider } from '@material-ui/core';
import React from 'react';
import "./header.css";
import categories from "../../data/category";

//header

const Header = ({ setCategory, category, word, setWord }) => {

    const darkTheme = createTheme({
        palette: {
            primary: {
                main: '#fff',
            },
            type: 'dark',
        },
    });
//ubacivanje komponenata za stranicu textField, komponenta za selektovanje jezika menuItem i tema
    return (
        <div className='header'>
            <span className="title">{word ? word : "Dictionary"}</span>
            <div className="inputs">
                <ThemeProvider theme={darkTheme}>
                    <TextField
                        className="search"
                        label="Enter a word"
                        value={word}
                        onChange= {(e) => setWord(e.target.value)}
                    />
                    <TextField
                        className="select"
                        select
                        label="Language"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        {categories.map((option) => (
                            <MenuItem key={option.label} value={option.label}>{option.value}</MenuItem>
                        ))}

                    </TextField>
                </ThemeProvider>

            </div>
        </div>
    )
}

export default Header;
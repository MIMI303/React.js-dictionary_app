import React from "react";
import "./Definitions.css";


const Definitions = ({ word, meanings, category }) => {
    return (  //ispis znacenja reci
    <div className="meanings">
            
        {meanings[0] && word && category === "en" && (  
             //provera da li postoji fonetika i da li je kategorija na engleskom jer samo na engleskom jeziku ima audio
            <audio src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio}
                    style={{backgroundColor: "#fff", borderRadius: 10}}
                    controls
                    >
                Your browser doesn't support audio element. 
            </audio>
        )}

        { word === " " ? (   //provera da li postoji nesto u "reci"
            <span className="subTitle">Type a word in Search</span>
            ) : (   // ako postoji rec pribavi znacenje i definiciju
            meanings.map((mean) => mean.meanings.map((item) => (item.definitions.map((def) => (
                <div className="singleMean" style={{backgroundColor: "white", color: "black" }}>
                    <b>{def.definition}</b>
                    <hr style={{backgroundColor: 'black', width: "100%"}}/>
                    {def.example && (  //ispis primera zadate reci
                        <span>
                            <b>Example : </b>
                            {def.example}
                        </span>
                    )}
                    {def.synonyms && (   //ispis sinonima zadate reci
                        <span>
                            <b>Synonyms : </b>
                            {def.synonyms.map((s) => `${s}, `)}
                        </span>
                    )}
                </div>
            )))))
        )}
    </div>
    );
};


export default Definitions;
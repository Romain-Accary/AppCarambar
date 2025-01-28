import React, { useState } from "react";
import JokeBox from "./component/JokeBox";
import JokeButton from "./component/JokesButton";

const App = () => {
    const [joke, setJoke] = useState("Les blagues apparaissent ici");
    const [loading, setLoading] = useState(false);

    // Fonction pour récupérer une blague
    const fetchJoke = async () => {
        setLoading(true);
        try {
            const randomId = Math.floor(Math.random() * 12) + 1;
            const response = await fetch(`https://backend-ryok.onrender.com/jokes/${randomId}`);
            if (!response.ok) throw new Error("Erreur lors du chargement de la blague !");

            const data = await response.json();
            console.log("Réponse complète :", data); 
            console.log("Blague récupérée :", data.text); 
            setJoke(data.text); 
            console.error("Erreur lors de la récupération de la blague :", error);
            setJoke("Oops, impossible de charger une blague 😅");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <JokeBox joke={joke || "Les blagues apparaissent ici"} />
            <JokeButton onFetchJoke={fetchJoke} loading={loading} />
        </div>
    );
};

export default App;
import React, {Component} from "react";

import Wrapper from "../../hoc/Wrapper/Wrapper";
import Artist from "./Artist/Artist";

import "./Artists.css";

import alex from "../../assets/images/Alex.jpg";

class Artists extends Component {
    state = {
        artists: [
            {
                name: "Lila",
                webLink: "https://www.example.com/web",
                trackLink: "https://www.example.com/track",
                image: alex
            },
            {
                name: "Lucky Shivers",
                webLink: "https://www.example.com/web",
                trackLink: "https://www.example.com/track",
                image: alex
            },
            {
                name: "Santino",
                webLink: "https://www.example.com/web",
                trackLink: "https://www.example.com/track",
                image: alex
            },
            {
                name: "Iroquois",
                webLink: "https://www.example.com/web",
                trackLink: "https://www.example.com/track",
                image: alex
            },
            {
                name: "Eumig",
                webLink: "https://www.example.com/web",
                trackLink: "https://www.example.com/track",
                image: alex
            },
            {
                name: "Viridian",
                webLink: "https://www.example.com/web",
                trackLink: "https://www.example.com/track",
                image: alex
            }
        ]
    }

    render () {
        let artistes = this.state.artists.map((artist, i) => {
            return (
                <Artist
                    key={i}
                    image={artist.image}
                    name={artist.name}
                    track={artist.trackLink}
                    web={artist.webLink}
                    />
            );
        });
        return (
            <Wrapper classes="Artists">
                {artistes}
            </Wrapper>
        );
    }
}

export default Artists;

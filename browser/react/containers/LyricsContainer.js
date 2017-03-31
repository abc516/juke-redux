import React from 'react'
import store from '../store'
import Lyrics from '../components/Lyrics'
import {setLyrics} from '../action-creators/lyrics'
import axios from 'axios'

class LyricsContainer extends React.Component {
    constructor(props) {
        super(props)

        this.state = Object.assign({
            artistQuery: '',
            songQuery: ''
        }, store.getState());


        this.setArtist = this.setArtist.bind(this)
        this.setSong = this.setSong.bind(this)
        this.handleSubmit= this.handleSubmit.bind(this)
    }

    componentDidMount() {
        this.unsubscribe = store.subscribe(() => {
            this.setState(store.getState());
        });
    }

    componentWillUnmount() {
        this.unsubscribe();
    }


    setArtist(artistName){
        this.setState({artistQuery:artistName})
    }

    setSong(songName){
        this.setState({songQuery:songName})
    }

    handleSubmit() {

        event.preventDefault();
        if (this.state.artistQuery && this.state.songQuery) {

            axios.get(`/api/lyrics/${this.state.artistQuery}/${this.state.songQuery}`)

                .then((res) => {
                    const setLyricsAction = setLyrics(res.data.lyric);
                    store.dispatch(setLyricsAction);
                })
        }
    }

    render() {
        return (<div>
            <Lyrics
                text={this.state.text}
                setArtist={this.setArtist}
                setSong={this.setSong}
                artistQuery={this.state.artistQuery}
                songQuery={this.state.songQuery}
                handleSubmit={this.handleSubmit}/>
        </div>)
    }
}

export default LyricsContainer
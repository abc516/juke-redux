import {SET_LYRICS} from '../constants'

export default function setLyrics(text){
  return {
    type: SET_LYRICS,
    lyric: text
  }
}

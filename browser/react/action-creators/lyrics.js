import {SET_LYRICS} from '../constants'

export const setLyrics = (text) => {
  return {
    type: SET_LYRICS,
    lyric: text
  }
}

import Cookie from './CookieInterface'

interface CharacterPositions {
    [key: string]: number[];
  }

interface Character {
    name: string,
    favouriteCookie: Cookie,
    positions: CharacterPositions
}

export default Character

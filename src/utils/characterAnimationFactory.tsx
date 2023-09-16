import Character from '../interfaces/CharacterInterfaces'
import characterImageFactory from './characterImageFactory'
import * as PIXI from 'pixi.js'

const characterAnimationFactory = (character: Character, moods: string[]) => {
    const frames: PIXI.Texture[] = moods.map((mood)=>characterImageFactory(character, mood))
    return new PIXI.AnimatedSprite(frames)
}

export default characterAnimationFactory
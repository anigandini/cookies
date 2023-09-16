import * as PIXI from 'pixi.js'
import Character from '../interfaces/CharacterInterfaces'

const characterImageFactory = (character: Character, mood: string) => {
    const imagePath = `../public/${character.name}_sprite.png`
    const spriteSheet = PIXI.BaseTexture.from(imagePath)
    const positionName = `${mood}${character.name.charAt(0).toUpperCase()}${character.name.slice(1)}`
    const position: number[] | undefined = character.positions[positionName];

    if (!position) {
        // Handle the case where the position is not found (e.g., return a default texture)
        return PIXI.Texture.EMPTY; // You can replace this with an appropriate default texture
    }

    // Ensure that the position array has the expected number of elements (x, y, width, height)
    if (position.length !== 4) {
        throw new Error(`Invalid position array for ${positionName}`);
    }

    const [x, y, width, height] = position;
    return new PIXI.Texture(spriteSheet, new PIXI.Rectangle(x, y, width, height));
}

export default characterImageFactory;
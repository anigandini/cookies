import { Stage, Sprite, Text, Container } from '@pixi/react'
import * as PIXI from 'pixi.js'
import { ReactNode, useMemo } from 'react'
import characters from '../utils/charactersList'
import useStore from '../store/gameStore'
import characterImageFactory  from '../utils/characterImageFactory'

const width = 360;
const height = 420;
const stageProps = {
  height,
  width,
  options: {
    backgroundAlpha: 0
  },
};

function CharacterScene() {
    const choosedCharacter = useStore((state: any) => state.choosedCharacter)

    const chooseCharacter = useStore((state :any) => state.chooseCharacter)
    
    const charactersList: Iterable<ReactNode> = useMemo(() => {
        return characters.map((character, index) => {
            const mood = choosedCharacter.name === character.name ? "good" : "normal"
            const image = characterImageFactory(character, mood)
            const x = 125 * index
            const y = 300
    
            return (
                <Container key={index}>
                    <Sprite
                        texture={image}
                        scale={{ x: 0.8, y: 0.8 }}
                        x={x}
                        y={y}
                        eventMode = 'dynamic'
                        pointerdown={() => chooseCharacter(character)}
                    />
                </Container>
            )
        })
    }, [chooseCharacter, choosedCharacter])



    return (
        <>
            <main>
                <Stage {...stageProps}>
                    <Text
                        text="Choose your character"
                        x={10}
                        y={50}
                        style={
                        new PIXI.TextStyle({
                            align: 'center',
                            fontSize: 15,
                            fontWeight: '400',
                            fill: '#fbecdf',
                            stroke: '#9e5627',
                            strokeThickness: 5,
                            letterSpacing: 15,
                            wordWrap: true,
                            wordWrapWidth: 440,
                        })
                        }
                    />
                    {charactersList}
                </Stage>
            </main>
        </>
        
    )
  }
  
  export default CharacterScene
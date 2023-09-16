import { Stage, Sprite, Container } from '@pixi/react'
import * as PIXI from 'pixi.js'
import { Link } from 'react-router-dom'

const bearSpriteSheet = PIXI.BaseTexture.from('../public/bear_sprite.png')
const bear = new PIXI.Texture(bearSpriteSheet, new PIXI.Rectangle(135, 135, 115, 110))

const titlesprite = PIXI.BaseTexture.from('../public/titlesprite.png')
const chipstitle = new PIXI.Texture(titlesprite, new PIXI.Rectangle(0, 0, 695, 135))

const width = 360;
const height = 420;
const stageProps = {
  height,
  width,
  options: {
    backgroundAlpha: 0
  },
};


const IntroScene = () => {
    return (
        <main>
            <Stage {...stageProps}>
                <Container>
                    <Sprite
                    texture={chipstitle}
                    x={5}
                    y={170}
                    scale={{ x: 0.5, y: 0.5 }}
                    />
                    <Sprite
                    texture={bear}
                    x={85}
                    y={230} 
                    scale={{ x: 1.5, y: 1.5 }}
                    />
                </Container>
            </Stage>
            <section>
                <div>
                    <Link to="/play">Play</Link>
                </div>
            </section>
        </main>
    )
  }
  
  export default IntroScene
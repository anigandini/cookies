import { Sprite } from '@pixi/react'

export default function Home() {
  return (
    <main>
      <Sprite
        image="../public/cookiesIntro.png"
        x={400}
        y={270}
        anchor={{ x: 0.5, y: 0.5 }}
      />
    </main>
  )
}

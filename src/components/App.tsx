import Arrow from './Arrow'
import ParticlesBackgroud from './ParticlesBackground'

function App() {
  return (
    <div>
      <Arrow
        className="z-20"
        direction={true}
        onClick={() => {
          console.log('hello')
        }}
      ></Arrow>
      <Arrow
        className="z-20"
        direction={false}
        onClick={() => {
          console.log('hello')
        }}
      ></Arrow>
      <ParticlesBackgroud />
    </div>
  )
}

export default App

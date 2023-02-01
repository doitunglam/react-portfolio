import { useCallback } from 'react'
import Particles from 'react-tsparticles'
import { Engine, Container } from 'tsparticles-engine'
import { loadFull } from 'tsparticles'

function ParticlesBackgroud() {
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine)

    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you   can add only the features you need reducing the bundle size
    await loadFull(engine)
  }, [])

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      await console.log(container)
    },
    []
  )
  return (
    <div>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: '#000000'
          },
          fpsLimit: 40,
          interactivity: {
            detectsOn: 'canvas',
            events: {
              resize: true
            }
          },
          particles: {
            color: {
              value: '#ffffff'
            },
            number: {
              density: {
                enable: true,
                area: 1080
              },
              limit: 0,
              value: 500
            },
            opacity: {
              animation: {
                enable: true,
                minimumValue: 0.5,
                speed: 1,
                sync: false
              },
              random: {
                enable: true,
                minimumValue: 0.1
              },
              value: 1
            },
            shape: {
              type: 'circle'
            },
            size: {
              random: {
                enable: true,
                minimumValue: 0.7
              },
              value: 1
            }
          }
        }}
      />
    </div>
  )
}

export default ParticlesBackgroud

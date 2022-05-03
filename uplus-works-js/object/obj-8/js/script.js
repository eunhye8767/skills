tsParticles.load("tsparticles", {
    fps_limit: 60,
    particles: {
      number: {
        value: 25,
        density: {
          enable: true,
          area: 800
        }
      },
      color: {
        value: [
          "rgb(230, 230, 250)",
          "rgb(65, 105, 225)",
          "rgb(0, 191, 255)",
          "rgb(60, 179, 113)",
          "rgb(255, 165, 0)",
          "rgb(255, 99, 71)"
        ]
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000"
        },
        polygon: {
          sides: 5
        },
        image: {
          src: "https://cdn.matteobruni.it/images/particles/github.svg",
          width: 100,
          height: 100
        }
      },
      opacity: {
        value: 1,
        random: false,
        animation: {
          enable: false,
          speed: 1,
          minimumValue: 0.1,
          sync: false
        }
      },
      size: {
        value: 50,
        random: { 
          enable: true, 
          minimumValue: 15 
        },
        animation: {
          enable: false,
          speed: 40,
          minimumValue: 5,
          sync: false
        }
      },
      lineLinked: {
        enable: false,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1
      },
      move: {
        collisions: false,     // true일경우 원끼리 부딪치면 튕김효과
        enable: true,
        speed: 3,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "bounce",
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200
        }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onHover: {
          enable: false,
          mode: "repulse",
          parallax: {
            enable: false,
            force: 60,
            smooth: 10
          }
        },
        onClick: {
          enable: false,
          mode: "push"
        },
        resize: false
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1
          }
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 0.8,
          speed: 3
        },
        repulse: {
          distance: 200
        },
        push: {
          particles_nb: 4
        },
        remove: {
          particles_nb: 2
        }
      }
    },
    detectRetina: true,
    background: {
      color: "",
      image: "",
      position: "50% 50%",
      repeat: "no-repeat",
      size: "cover",
    }
});  
import './App.css'
import Drum from './Drums'

const audioClips: AudioClip[] =[
  {
    keyTrigger: "Q",
    url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3",
    description: "Heater 1"
  },
   {
    keyTrigger: "W",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    description: "Heater 2"
  },
  {
        keyTrigger: "E",
        description: "Heater-3",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
    },
   {
        keyTrigger: "A",
        description: "Heater-4",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
    }, 
    {
    
        keyTrigger: "S",
        description: "Clap",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
    }, {
        keyTrigger: "D",
        description: "Open-HH",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
    },
    {
        keyTrigger: "Z",
        description: "Kick-n'-Hat",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
    }, {
        keyTrigger: "X",
        description: "Kick",
        url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
    }, {
        keyTrigger: "C",
        description: "Closed-HH",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
    }
]
function App() {

  const playAudio = (e: React.KeyboardEvent<HTMLDivElement>)=>{

const clip = audioClips.find((clip) => clip.keyTrigger === e.key.toUpperCase());
if(!clip) return; 
    (document.getElementById(clip.keyTrigger) as HTMLAudioElement).play().catch(console.error)
    document.getElementById("drum-"+clip.keyTrigger)?.focus();
    document.getElementById("display")!.innerText = clip.description;
  }
  return (
    <>
      <div className="container" id="drum-machine" onKeyDown={playAudio}>
        <h1>FCC Drum Machine</h1>
        <div className="whole-drum">
          {audioClips.map((clip) =>(
            <Drum audioClip={clip} key={clip.keyTrigger}/>
          ))}
        </div>
        <div id="display"></div>
      </div>
    </>
  )
}

export default App

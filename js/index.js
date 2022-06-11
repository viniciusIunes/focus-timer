/*
 DOM
 Document Object Model
 Event-driven
 Programação imperativa
 callback

 Refatoração: mudar um código para deix-alo mais entendível
 deixar o código mais perfomático 
 SEM ALTERAR suas funcionalidades 
*/

import Controls from './controls.js'
import Timer from './timer.js'
import Sound from './sounds.js'
import Events from './events.js'
import  {  
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonSet,
  minutesDisplay,
  secondsDisplay,
 } from './elements.js'


const controls = Controls({
  buttonPlay, 
  buttonPause,
  buttonSet,
  buttonStop
})

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset,
})

const sound = Sound({

})

Events({controls, timer, sound})


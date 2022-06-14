import {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonSet,
  buttonSoundOff,
  buttonSoundOn
} from './elements.js'

export default function ({
  controls,
  timer,
  sound,
}) 
{
  buttonPlay.addEventListener('click', function () {
    controls.play()
    timer.coutdown()
    sound.pressButton()
    sound.bgAudio.play()
    buttonSoundOn.classList.remove('hide')
    buttonSoundOff.classList.add('hide')
  })

  buttonPause.addEventListener('click', function () {
    controls.pause()
    timer.hold()
    sound.pressButton()
    sound.bgAudio.pause()
    buttonSoundOff.classList.remove('hide')
    buttonSoundOn.classList.add('hide')
  })

  buttonStop.addEventListener('click', function () {
    controls.reset()
    timer.reset()
    sound.pressButton()
    sound.bgAudio.pause()
    buttonSoundOff.classList.remove('hide')
    buttonSoundOn.classList.add('hide')
  })

  buttonSoundOff.addEventListener('click', function () {
    buttonSoundOn.classList.remove('hide')
    buttonSoundOff.classList.add('hide')
    sound.bgAudio.play()
    sound.pressButton()
  })

  buttonSoundOn.addEventListener('click', function () {
    buttonSoundOff.classList.remove('hide')
    buttonSoundOn.classList.add('hide')
    sound.bgAudio.pause()
    sound.pressButton()
  })

  buttonSet.addEventListener('click', function () {
    sound.pressButton()
    let newMinutes = controls.getMinutes()
    if (!newMinutes) {
      timer.reset()
      return
    }
    timer.updateDisplay(newMinutes, 0)
    timer.updateMinutes(newMinutes)
  })
}

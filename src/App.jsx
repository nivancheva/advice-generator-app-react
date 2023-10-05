import './App.css'
import iconDice from './images/icon-dice.svg';
import patternDesktop from './images/pattern-divider-desktop.svg';
import patternMobile from './images/pattern-divider-mobile.svg';

function App() {

  async function generateAdvice() {
    const response = await fetch("https://api.adviceslip.com/advice");
    const advice = await response.json();
    console.log(advice);
  }

  return (
    <div className='wrapper'>
      <div className='card'>
        <p className='card_advice'>Advice #</p>
        <p className='card_quote'>""</p>
        <picture className='pattern_img'>
              <source srcSet={patternDesktop} media="(min-width:800px)"/>
              <img src={patternMobile}/>
        </picture>
        <button onClick={generateAdvice} className='button button_advice'><img src={iconDice}/></button>
      </div>
    </div>
  )
}

export default App

import './App.css'
import iconDice from './images/icon-dice.svg';
import patternDesktop from './images/pattern-divider-desktop.svg';
import patternMobile from './images/pattern-divider-mobile.svg';

function App() {

  return (
    <div className='wrapper'>
      <div className='card'>
        <p>Advice #</p>
        <p className='card_quote'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non fuga ullam eveniet illo asperiores, distinctio velit vitae!</p>
        <picture className='pattern_img'>
              <source srcSet={patternDesktop} media="(min-width:800px)"/>
              <img src={patternMobile}/>
        </picture>
        <button><img src={iconDice}/></button>
      </div>
    </div>
  )
}

export default App

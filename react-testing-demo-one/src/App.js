import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img
          src={logo}
          className='App-logo'
          alt='logo'
        />
        <p>Take the easier, faster path to digital accessibility with Deque.</p>
        <a
          className='App-link'
          href='https://www.deque.com/'
          target='_blank'
          rel='noopener noreferrer'
          data-testid='learn-about-deque-link'
        >
          Learn About Deque
        </a>
      </header>
    </div>
  );
}

export default App;

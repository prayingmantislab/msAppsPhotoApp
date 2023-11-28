import './App.css';
import Navbar from './components/Navbar';
function App() {
  return (
    <div>
      <h1 className='text-2xl sm:text-3xl lg:text-4xl leading-none font-extrabold text-gray-900 tracking-tight mb-8 mt-4 text-center'>
        Pixa Bay Photo App
      </h1>
      <Navbar />
    </div>
  );
}

export default App;

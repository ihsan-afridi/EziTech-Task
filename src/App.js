import logo from './logo.svg';
import './App.css';
import './index.css'
import Header from './components/Header';
import Navbar from './components/Navbar';
import Content from './components/Content';
import Works from './components/Works';
import SummerCourse from './components/SummerCourse';
import Internship from './components/Internship';
import Masthead from './components/learning';
import Footer from './components/footer';

function App() {
  return (
    <div className="App" style={{ 
      backgroundImage: 'url("https://media.istockphoto.com/id/613241758/photo/young-woman-working-on-a-laptop.jpg?s=1024x1024&w=is&k=20&c=bqQvdRUgByl-X-ihdu4w0-W8yL2x9hZHy1bA13kTWT0=")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100vh',
      position: 'relative' 
    }}>
      {/* Black Transparent Overlay */}
      <div className="overlay" style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Black with 50% opacity
        zIndex: 1,
      }}></div>

      {/* Content */}
      <div className="content" style={{ position: 'relative', zIndex: 2 }}>
        <Header />
        <div className="app-container">
          <Navbar />
          <Content />
        </div>
        <Works />
        <SummerCourse/>
        <Internship/>
        <Masthead />
        <Footer />
      </div>
    </div>
  );
}

export default App;

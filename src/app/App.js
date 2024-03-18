import './App.css';
import { LandingHeader } from './components/Header/LandingHeader';
import { Hero }  from './components/Hero';
import { Features } from './components/Features';
import { Premium } from './components/Premium';

export function App() {
    return (
        <div>
          <LandingHeader />
          <Hero
          title='Get premium for 4 days'
          amount ={'$566'} />
          <Features />
          <Premium />
        </div>
    );
 
}
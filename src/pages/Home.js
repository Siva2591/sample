import Header from '../components/Header';
import "./home.css";

export default function Home() {
    return(
        <div className='content'>
           <Header />
           <div className='mainBody'>
                <h2>This is Home page</h2>
           </div>
        </div>
    )
}


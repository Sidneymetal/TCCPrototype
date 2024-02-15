import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'
import './style.css'

function Home() {
    return (
        <div>
            <Header/>
            <h1>Home</h1>
            <Sidebar/>
            <Footer/>
        </div>
    )
}

export default Home
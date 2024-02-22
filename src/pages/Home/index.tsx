import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'
import './style.css'

function Home() {
    return (
        <div>
            <Header/>
            
            <Sidebar/>
            <div className='divImagem'>
            <img src='https://i.imgur.com/5y5F0Ka.jpeg ' alt="Imagem1" width={1000} height={750}/>

            </div>
            <Footer/>
        </div>
    )
}

export default Home
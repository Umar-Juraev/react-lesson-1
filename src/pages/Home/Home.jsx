

import './Home.scss'
import bg from '../../assets/images/homePageBg.jpg'

function Home({data}) {



    return (
        <main className='home' style={{ backgroundImage: `url(${bg})` }}>

            <section className='home__row'>
                <div className='home__row__textBox'>asda</div>
                <div className='home__row__btn'>EXPLORE</div>
            </section>





            {data.map(({id,name,describtion,img})=>(
                <div key={id}>
                    <h3>{name}</h3>
                    <p>{describtion}</p>
                </div>
            ))}

            
        </main>
    )
}

export default Home


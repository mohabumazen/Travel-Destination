import Header from "../header/Header";
import Footer from "../footer/Footer";
import Tours from "../tours/Tours";
const travelData = require('/home/moh/travel/src/data/db.json');

function Home(props){
    return(

        <>
            <Header></Header>

            {
                travelData.map(travel => {
                    return(

                        <Tours img= {travel.image} alt={travel.id} title={travel.name} ></Tours>
                    )
                })
            }

            <Footer></Footer>
        </>
    )
};

export default Home;
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Tours from "../tours/Tours";
// const travelData = require('/home/moh/travel/src/data/db.json');
import { Routes, Route} from "react-router-dom";
import TourDetails from "../TourDetails/ToursDetails";

function Home(props){
    return(

        <>
            <Header></Header>
            <Routes>
                <Route path="/" element={<Tours data={props.data} />} />
                <Route path="/:id" element={<TourDetails data={props.data} />} />
            </Routes>
            <Footer></Footer>
        </>
    );
};

export default Home;
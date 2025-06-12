import { Container } from "@mui/material";
import Header from "../Header/header";
import CardList from "../CardList/cardlist";
import { data } from "../../assets/data";
import BasicRating from "../Rating/rating";
import Footer from "../Footer/footer";

const App = () => {
  return (
    <>
      <Header />
      {/* <main className="content container"> */}
        <Container>
          <CardList cards={data} />
        </Container>
      {/* </main> */}
      <Footer />
    </>
  );
};

export default App;

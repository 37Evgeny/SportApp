import { Container } from "@mui/material";
import Header from "../Header/header";
import CardList from "../CardList/cardlist";
import { data } from "../../assets/data";
import { post } from "../../assets/post";
import BasicRating from "../Rating/rating";
import Footer from "../Footer/footer";
import PostDetail from "../CardDetail/card-detail";

const App = () => {
  return (
    <>
      <Header />
      <main className="content container">
        <Container>
          {/* <CardList cards={data} /> */}
          <PostDetail post={post[0]}/>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App;

import { Container } from "@mui/material";
import Header from "../Header/header";
import { data } from "../../assets/data";
import Footer from "../Footer/footer";
import { CardContext } from '../../context/cardContext';
import { NotFoundPage } from "../../pages/NotFoundPage/not-found-page";
import { CardListPage } from "../../pages/CardListPage/card-list-page";
import { CardDetailPage } from "../../pages/CardDetailPage/card-detail-page"
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <CardContext.Provider value={{ data }}>
      <Header />
      <main className="content container">
        <Container>
          <Routes>
            {/* Исправленный Route для index */}
           <Route path="/cardlist" element={<CardListPage />} />
            <Route path='/card/:cardId' element={<CardDetailPage/>} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </CardContext.Provider>
  );
};

export default App;
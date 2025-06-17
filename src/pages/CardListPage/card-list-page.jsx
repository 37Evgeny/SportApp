import { Container } from "@mui/material";
import CardList from "../../components/CardList/cardlist";
import { CardContext } from "../../context/cardContext";
import { useContext } from "react"; 


export const CardListPage =()=>{
    const { data } = useContext(CardContext);
    return(
        <>
            <Container>
                <CardList data = {data}/>
            </Container>
        </>
    )
}
import { useParams, useNavigate } from "react-router-dom";
import CardDetail from "../../components/CardDetail/card-detail";
import { data } from "../../assets/data";
import { useState } from "react";

export const CardDetailPage = () => {
  const { cardId } = useParams();
  const card = data.find(item => item.id === cardId); // сравнение строк
  const navigate = useNavigate();

    const [isOpen, setIsOpen] = useState(true); // или другое состояние, если нужно

  const handleClose = () => {
    // например, закрыть страницу или перейти назад
    navigate('/cardlist');
    // Или можно использовать navigate из react-router-dom для возврата
    // import { useNavigate } from 'react-router-dom';
    // const navigate = useNavigate();
    // navigate(-1);
  };

  if (!isOpen) {
    // Можно вернуть null или перенаправить
    return null;
  }

  if (!card) {
    return <div>Пост не найден</div>;
  }

  return (
    <>
      <CardDetail post={card} onClose={handleClose}/>
    </>
  );
};
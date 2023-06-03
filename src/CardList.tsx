import * as React from'react';
import { Card } from './assets/Components/Card';
import {CardData} from './types';
import { BrowserRouter as Router, Route, Routes, useNavigate, useParams, useMatch } from 'react-router-dom';
import { History, LocationState } from 'history';

interface ListProps {
    history: any;
}

const List: React.FC<ListProps> = ({history }) => {
    const match = useMatch("/:id")

    return(
    <ul className="card-list">
        {cardData.map(card => (
            <Card
            key={card.id}
            isSelected={match?.params.id === card.id}
            history = {history}
            {...card}
            />
        ))}
    </ul>
    );
};

export const CardList = () => {

    return (
    <Router>
        <Routes>
            <Route path='/:id' element={<List history={useNavigate} />} />
            <Route path='/' element={<List history={useNavigate}/>}/>

        </Routes>
  </Router>
    );
};

const cardData: CardData[] = [
    {
        id: "c",
        category: "Pizza",
        title: "5 Food Apps Delivering the Best of Your City",
        pointOfInterest: 80,
        backgroundColor: "#814A0E"
      },
];
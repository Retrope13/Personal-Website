import * as React from'react';
import { Card } from './assets/Components/Card';
import {CardData} from './types';
import { BrowserRouter as Router, Route, Routes, useNavigate, useParams, useMatch } from 'react-router-dom';
import { History, LocationState } from 'history';
import './Card.css';

interface ListProps {
    history: any;
}

const List: React.FC<ListProps> = ({history }) => {
    const match = useMatch("projects/:id")

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
        <Routes>
            <Route path='projects/:id' element={<List history={useNavigate} />} />
            <Route path='/projects' element={<List history={useNavigate}/>}/>

        </Routes>
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

      {
        id: "a",
        category: "Burgers",
        title: "5 Food Apps Delivering the Best of Your City",
        pointOfInterest: 80,
        backgroundColor: "#814A0E"
      },

      {
        id: "b",
        category: "Tacos",
        title: "5 Food Apps Delivering the Best of Your City",
        pointOfInterest: 80,
        backgroundColor: "#814A0E"
      },
];
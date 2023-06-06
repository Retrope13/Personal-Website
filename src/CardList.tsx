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
        id: "a",
        category: "Web Development, Frontend, Backend, React, Javascript",
        title: "Trip Planner",

        innerText: "one"
      },

      {
        id: "b",
        category: "Multithreading, Peripheral, UI, Python",
        title: "CryptoBot",
        innerText: "two"
      },

      {
        id: "c",
        category: "Game development, VR development, Unreal, Blueprints, Blender",
        title: "Tower Defense",
        innerText: "fdsafds"
      },
      {
        id: "d",
        category: "Machine learning, Python, Jupyter notebook",
        title: "Music Classification",
        innerText: "fdsafds"
      },
      {
        id: "e",
        category: "Blockchain, Ethereum, Smart contracts, Web development, UX/UI, React, JavaScript",
        title: "Bidder, Faster, Stronger",
        innerText: "fdsafds"
      },
      {
        id: "f",
        category: "Research, Web Development, React, JavaScript",
        title: "GeoPursuit",
        innerText: "fdsafds"
      },
      {
        id: "g",
        category: "Java, JUnit, JavaScript, Iterative testing ",
        title: "Company Management",
        innerText: "fdsafds"
      },
      {
        id: "h",
        category: "UI, Python, File input/output",
        title: "DNDBuddy",
        innerText: "fdsafds"
      },
      {
        id: "i",
        category: "Python, Linguistic analysis, Image stitching, File input/output",
        title: "Translator",
        innerText: "fdsafds"
      },
];
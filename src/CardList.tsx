import React from'react';
import { Card } from './assets/Components/Card/index';
import {CardData} from './types';
import { BrowserRouter as Router, Route, Routes, useNavigate, useParams, useMatch } from 'react-router-dom';
import './Card.css';

interface ListProps {
    history: any;
}

const cardData: CardData[] = [
  {
      id: "a",
      category: "Web Development, Frontend, Backend, React, Javascript, Agile",
      title: "Trip Planner ~ CS314",

      innerText: `Using React.js, we developed a frontend website for seamless and accessible travel planning. Accessibility-driven development was prioritized to ensure equal access and usability for diverse users.

      Efficient trip planning was facilitated by implementing the Nearest Neighbor algorithm. This allowed users to generate optimized travel routes, reducing computational complexity and providing streamlined itineraries.
      
      A database was incorporated to support searching for cities and airport codes. This enabled easy retrieval of relevant location information and refinement of travel plans.
      
      Rigorous testing was conducted throughout the development process to ensure a smooth user experience. Regular testing and quality assurance fine-tuned website functionality and performance, allowing seamless search, trip customization, route optimization, and distance calculation.`,
      link: "https://github.com/Retrope13"
    },

    {
      id: "b",
      category: "Multithreading, Peripheral, UI, Python, Agile-Scrum",
      title: "CryptoBot ~ CS370",
      innerText: `My team and I developed a system to automate cryptocurrency trading. We utilized Python, a RaspberryPi, a fingerprint sensor, and Binance's API for secure and seamless transactions.

      Multithreading was a key feature, enabling simultaneous handling of multiple tasks. This allowed efficient management of cryptocurrency information, real-time market data, and trade executions.
      
      We created a user-friendly graphical interface for monitoring portfolios and selecting new cryptocurrencies to purchase. Security was enhanced with fingerprint authentication.
      
      Integration of Binance's API facilitated actual trading, providing access to various cryptocurrencies. Our system implemented buying and selling algorithms based on user-defined strategies, ensuring efficient and profitable trades.
      `,
      link: "https://github.com/Retrope13/CryptoBot"
    },

    {
      id: "c",
      category: "Game development, VR development, Unreal, Blueprints, Blender",
      title: "Tower Defense ~ CS310H",
      innerText: `I created an immersive virtual reality tower-defense game using the Unreal Engine. I employed character design in Blender to sculpt, model, and texture unique characters. The blueprinting system in Unreal allowed me to implement enemy spawning, tower defenses, and a user interface for player interaction.

      To increase the game's challenge, I developed a naive AI system for the enemies. This system included pathfinding, attack strategies, and dynamic reactions to changing game conditions.
      
      I optimized the game for the Oculus Quest 2 headset. Leveraging its high-resolution display and motion tracking, I provided players with a seamless and immersive virtual reality experience.
      
      Throughout development, I iterated on mechanics, adjusted difficulty curves, and incorporated player suggestions to create an enjoyable gameplay experience.`,
      link: "https://github.com/Retrope13/HW2_McKayS_EyreD"
    },
    {
      id: "d",
      category: "Machine learning, Python, Jupyter notebook",
      title: "Music Classification ~ CS345",
      innerText: `I completed a music classification project using Python and Jupyter Notebook. The goal was to classify music into genres based on tempo, key signature, mode, popularity, and other characteristics. I employed visualization techniques such as heatmaps, PCA visualization, and feature importance analysis to gain insights into the data and improve the classification process.

      To achieve accurate genre classification, I implemented Support Vector Machines (SVM) and Random Forests classifiers. These algorithms were trained on a labeled dataset of songs with genre labels. The models outperformed random guessing and achieved significantly higher accuracy in predicting the genre of a song based on its features.
      
      Visualization techniques played a crucial role in the project. Heatmaps helped visualize relationships between different features, identifying correlations and dependencies. PCA visualization aided in reducing dimensionality and discovering clusters of similar genres. Feature importance analysis provided insights into the key characteristics that differentiate genres.`,
      link: "https://github.com/Retrope13/Music_Classification_Project"
    },
    {
      id: "e",
      category: "Blockchain, Ethereum, Smart contracts, Web development, UX/UI, React, JavaScript, Team Management",
      title: "Bidder, Faster, Stronger ~ CS458",
      innerText: `Using React.js, I developed a responsive website that serves as a bidding platform for NFTs. The website incorporates Web3 to connect users' MetaMask accounts and interact with a Solidity-based smart contract.

      The bidding platform's core functionality was implemented using Solidity, a programming language for Ethereum smart contracts. The Solidity smart contract governed the creation, ownership, and bidding of NFTs, ensuring a secure and transparent process. Web3 facilitated the connection between the website and users' MetaMask accounts, enabling secure wallet management and transaction execution on the Ethereum network.
      
      For testing and deployment, I utilized Truffle, a development framework for Ethereum applications. Truffle provided tools for testing, compiling, and deploying the smart contract, ensuring consistent behavior across different browsers and networks. By utilizing Truffle during testing, I could verify that the platform offered a smooth user experience.
      
      To create visually appealing and unique NFTs, I employed Aesprite, an application for designing digital assets. Aesprite allowed me to generate original NFTs and associated assets, ensuring exclusivity and aesthetic appeal for the bidding platform.`,
      link: "https://github.com/Retrope13/CS458-Bidding-Game"
    },
    {
      id: "f",
      category: "Research, Web Development, React, JavaScript, Agile - Scrum",
      title: "GeoPursuit ~ CS464",
      innerText: `Using React.js, we developed a comprehensive and visually appealing website for presenting research findings and data on countries. The website offered a seamless browsing experience for visitors.

      To host test outlines for countries, we utilized Imgur, an image hosting platform. This ensured efficient access to visual resources and seamless integration with the website's components.
      
      The interactive map, a key feature of our project, was created using Highcharts, a powerful JavaScript library. Highcharts allowed for customization and interactive functionalities, enhancing data presentation and engagement.
      
      To evaluate the significance of differences between the interactive map and the presentation, we conducted a statistical test. Following ACM guidelines, we maintained a professional and research-oriented tone throughout, including the writing of a comprehensive research paper.`,
      link: "https://github.com/Retrope13"
    },
    {
      id: "g",
      category: "Java, JUnit, JavaScript, Iterative testing, Agile- Scrum",
      title: "Company Management ~ CS415",
      innerText: `The backbone of our website was built using Java for the backend development. We adopted object-oriented design principles to structure our codebase in a modular and organized manner. This approach allowed us to leverage class-dependent functions and methods, making the implementation and maintenance of backend functionalities easier and more efficient.

      To guarantee the reliability and correctness of our backend methods, we employed JUnit, a widely used testing framework in the Java ecosystem. Through JUnit, we designed comprehensive test cases that covered various scenarios and edge cases. These test cases enabled us to validate the functionality of our methods and promptly identify and address any issues or bugs in our backend code.
      
      Additionally, we incorporated several automated testing suites to further enhance the quality and robustness of our code. Tools such as Randoop, EvoSuite, Pmd, Spotbugs, and Ekstazi played a crucial role in this regard. These suites provided additional layers of testing, including the generation of test cases, static code analysis, and bug detection. By leveraging these automated testing suites, we ensured a thorough evaluation of our codebase and improved the overall integrity of our backend implementation.`,
      link: "https://github.com/Retrope13"
    },
    {
      id: "h",
      category: "HTML, PHP, JavaScript, Fuel, CSS, SQL",
      title: "The Color Garden ~ CS312",
      innerText: `I developed a website that incorporated various technologies and languages. JavaScript, HTML, and CSS were used to create a dynamic and interactive user experience, allowing users to engage in a "painting" activity on a canvas. The canvas was built using HTML, with an embedded table serving as the foundation for the painting functionality.
      
      For backend functionality and data management, PHP and SQL were employed. PHP facilitated server-side processing and interaction with the database, while SQL efficiently stored and retrieved data related to user preferences, colors, and edits.
      
      The painting functionality was implemented using JavaScript, enabling users to select, remove, edit, and add colors on the canvas. Through JavaScript, DOM manipulation was leveraged to dynamically update table cells, allowing real-time color changes and edits. JavaScript also facilitated the integration of event handlers, ensuring seamless interaction between user actions and the canvas display.
      
      To optimize performance and streamline development, I utilized Fuel, a lightweight PHP framework. Fuel provided a structured and efficient framework for building backend logic and handling HTTP requests. This allowed me to focus on implementing specific features and functionalities without repetitive and low-level coding tasks.`,
      link: "https://github.com/Retrope13/CS312-Project"
    },
    {
      id: "i",
      category: "UI, Python, File input/output",
      title: "DNDBuddy ~ Personal Project",
      innerText: `I developed an application using dearpygui to simplify the experience for new players entering Dungeons and Dragons. The focus was on creating a user-friendly graphical user interface (GUI) that resembled video games, making it easier for players to interact with the tabletop role-playing game. The interface allowed effortless management of character inventories, abilities, and items, providing a seamless transition for newcomers.

      An important feature was the incorporation of I/O operations for exporting and importing character data. This facilitated easy saving and sharing of character information among players, enhancing convenience and flexibility across devices and gaming companions.
      
      Additionally, I had an interest in converting the application into a web-based platform to reach a wider audience and improve accessibility. By transitioning to the web, players could access the application from any browser, eliminating software installations and offering a versatile and user-friendly experience.
      
      The main goal of this project was to create a graphical user interface that resembled video games, simplifying the Dungeons and Dragons experience for new players. `,
      link: "https://github.com/Retrope13/DNDBUDDY"
    },
    {
      id: "j",
      category: "Python, Linguistic analysis, Image stitching, File input/output",
      title: "Translator ~ Personal Project",
      innerText: `I developed a language translator for a personal Dungeons and Dragons project using Python and a command line interface. The translator converted English sentences into a fictional language of my own creation called Anterian, with the additional feature of visually representing the translation using the PIL image stitching library. This appealed to Dungeons and Dragons enthusiasts and enhanced the immersive experience.

      The translation algorithm, implemented in Python, intelligently analyzed the syntax of English sentences submitted through the command line interface. It generated an output file containing the corresponding Anterian translation. To visually represent the translation, I utilized the PIL library to stitch together images representing the steps and components of the translation process. This visual representation served as a guide for players looking to incorporate Anterian into their gameplay, promoting immersion and authenticity.
      
      The PIL image stitching library seamlessly combined the generated images into a composite image, allowing users to grasp the progression of the translation at a glance. This feature added depth and engagement to the language translator, catering specifically to the needs of Dungeons and Dragons enthusiasts who sought a unique language to enrich their gameplay experience.`,
      link: "https://github.com/Retrope13/Anterian_language"
    },
  ];

export const List: React.FC<ListProps> = ({history }) => {
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



const CardList = () => {

    return (
        <Routes>
            <Route path='projects/:id' element={<List history={useNavigate} />} />
            <Route path='/projects' element={<List history={useNavigate}/>}/>
        </Routes>
    );
};

export default CardList;

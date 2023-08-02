import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { PiFilmReelLight } from 'react-icons/pi';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { AiOutlineEye, AiOutlineDownload, AiOutlineEdit, AiOutlineDelete, AiOutlineShareAlt } from 'react-icons/ai';
import {PiAlienLight} from 'react-icons/pi';
import {GiGreatWarTank, GiExplodingPlanet} from 'react-icons/gi';
import {SiStarship} from 'react-icons/si';
import MovieDetailsSidebar from './MovieDetailsSidebar';
import axios from 'axios';

const Card = ({ image, title, category ,director, listView}) => {
    const [isPopupOpen, setPopupOpen] = useState(false);
    const [selectedMovie, setSelectedMovie] = useState(null);

    const togglePopup = () => {
        setPopupOpen(!isPopupOpen);
    };

    const handleOptionClick = async (option) => {
      if (option === 'View') {
          setSelectedMovie({
            image,
            title,
            category,
            url:'https://swapi.dev/api/films/1/',  
          });
          setPopupOpen(true); 
        }   
    };
  
    return (
      
          <CardContainer listView={listView}>
            {listView ? (
        <CardContentlist>
          <TitleContainer>
            {category === 'films' && <FilmIcon />}
            {category === 'planet' && <PlanetIcon />}
            {category === 'people' && <PeopleIcon />}
            {category === 'species' && <SpeciesIcon />}
            {category === 'starships' && <StarshipIcon />}
            {category === 'vehicles' && <VehicleIcon />}
            <CardTitle>{title}</CardTitle>
          </TitleContainer>
          {/* Additional Information in List Mode */}
          {category === 'films' && <Di>{director}</Di>}
          {category === 'planet' && <Di>{director}</Di>}
            {category === 'people' && <Di>{director}</Di>}
            {category === 'species' && <Di>{director}</Di>}
            {category === 'starships' && <Di>{director}</Di>}
            {category === 'vehicles' && <Di>{director}</Di>}
          <OptionsButton onClick={togglePopup} />
        </CardContentlist>
      ) : (
           <>
            <CardImage src={image} alt={title} />
            <CardContent>
                <TitleContainer>
                {category === 'films' && <FilmIcon />}
                {category === 'planet' && <PlanetIcon />}
                {category === 'people' && <PeopleIcon />}
                {category === 'species' && <SpeciesIcon />}
                {category === 'starships' && <StarshipIcon />}
                {category === 'vehicles' && <VehicleIcon />}
                </TitleContainer>
                    <CardTitle >{title}</CardTitle>      
            </CardContent>
            <OptionsButton onClick={togglePopup} />
            </>
      )}
            <Popup isOpen={isPopupOpen}>
                <Option onClick={() => handleOptionClick('View')}>
                    <AiOutlineEye size={18} style={{ marginRight: '8px' }} />
                    View
                </Option>
                <Option>
                    <AiOutlineDownload size={18} style={{ marginRight: '8px' }} />
                    Download
                </Option>
                <Option>
                    <AiOutlineEdit size={18} style={{ marginRight: '8px' }} />
                    Rename
                </Option>
                <Option>
                    <AiOutlineShareAlt size={18} style={{ marginRight: '8px' }} />
                    Share Link
                </Option>
                <Optiondel>
                    <AiOutlineDelete size={18} style={{ marginRight: '8px' , color:'FC5A5A'}} />
                   Delete
                </Optiondel>
            </Popup>

            {isPopupOpen  && selectedMovie && (
                <MovieDetailsSidebar selectedMovie={selectedMovie} onClose={() => setPopupOpen(false)} />
            )}
        </CardContainer>
    
    );
};

export default Card;

const CardContainer = styled.div`
  display: flex;
  flex-wrap:wrap;
  justify-content: space-between;
  flex: 0 0 calc(33.33% - 16px);
  gap:3px;
  margin: 0 auto;
  width: ${({ listView }) => (listView ? '1200px' : '354px')};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease-in-out;
  cursor: pointer;
  position : relative;
  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;
const CardContentlist = styled.div`
  padding: 10px;
  display: flex;
  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  align-items: center;
  // background: #f9fafd33;
 
`;


const CardImage = styled.img`
  width: 354px;
  height: 160px;
  object-fit: cover;
  border-radius: 10px 10px 10px 10px;
  transition: opacity 500ms ease-in-out 0s;
  
  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;

    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);

  }
`;

const CardContent = styled.div`
  padding: 12px;
  position : relative;
  background: #F9FAFD33;
  height:20px;
  width:338px;
  display:flex;
  border-radius: 8px ;
`;
const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  
`;

const FilmIcon = styled(PiFilmReelLight)`
  font-size: 20px;
  margin-right: 8px;
  color: #f1f1f1;
`;
const Di=styled.div`
color:#f1f1f1;
// margin-left:400px;
padding-left:400px;

align-items:center;
`;
const VehicleIcon = styled(GiGreatWarTank)`
  font-size: 20px;
  margin-right: 8px;
  color: #f1f1f1;
  
`;
const StarshipIcon = styled(SiStarship)`
  font-size: 20px;
  margin-right: 8px;
  color: #f1f1f1;
  
`;
const SpeciesIcon = styled(PiAlienLight)`
  font-size: 20px;
  margin-right: 8px;
  color: #f1f1f1;
  
`;
const PlanetIcon = styled(GiExplodingPlanet)`
  font-size: 20px;
  margin-right: 8px;
  color: #f1f1f1;
  
`;
const PeopleIcon = styled(PiFilmReelLight)`
  font-size: 20px;
  margin-right: 8px;
  color: #f1f1f1;
  
`;
const CardTitle = styled.h3`
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  color: #f1f1f1;
  line-height:20px;
  border-radius: 0 0 10px 10px ;
  
`;


const Popup = styled.div`
  position: absolute;
  bottom: 32px;
  right: 8px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 8px;
  z-index: 14;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15);
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
`;


const OptionsButton = styled(BsThreeDotsVertical)`
  position: absolute;
  bottom: 8px;
  right: 16px;
  font-size: 20px;
  color:#f1f1f1;
  cursor: pointer;
  // background-color: ${({ listView }) => (listView ? '#03123D' : '#808080')};
  
 border-radius:6px;
 padding: 4px;
 
`;
const Option = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 4px;
  cursor: pointer;
  padding:4px 8px 4px 8px;
  font-family: Inter;
font-size: 14px;
font-weight: 500;
line-height: 20px;
letter-spacing: 0.5px;
text-align: left;
padding-right:20px;

  &:hover {
    background-color: #f1f1f5;
    border-radius:4px;
  }
  
`;
const Optiondel=styled.div`
display: flex;
  align-items: center;
  margin-bottom: 4px;
  cursor: pointer;
  padding:4px 8px 4px 8px;
  font-family: Inter;
font-size: 14px;
font-weight: 500;
line-height: 20px;
letter-spacing: 0.5px;
text-align: left;
color: #F15454;
  &:hover {
    background-color: #f1f1f5;
    border-radius:4px;
  }
`;
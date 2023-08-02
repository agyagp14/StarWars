import React ,{useEffect, useState}from 'react';
import axios from 'axios';
import Card from '../Components/Card'; 
import styled from 'styled-components';
import { BsList, BsGridFill } from 'react-icons/bs';
const StarshipsPage = () => {

  const [data, setData] = useState([]);
  const [isListView, setListView] = useState(false);

  const toggleView = () => {
  setListView(!isListView);
};
  useEffect(() => {
    // Fetch data from the Star Wars API for the selected category
    const fetchData = async () => {
      try {
        const response = await axios.get('https://swapi.dev/api/starships/');
        setData(response.data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);
  return (
    <StarContainer>
     <Title><h1>Star Ships</h1>
     <ViewButtons>
          <ViewButton active={isListView} onClick={toggleView}>
            <BsList />
          </ViewButton>
          <ViewButton active={!isListView} onClick={toggleView}>
            <BsGridFill />
          </ViewButton>
        </ViewButtons>
        </Title>
        {isListView ? ( <CardList>
          {data.map((item, index) => (
            <Card
              key={index}
              director={item.manufacturer}
              title={item.name}
              category="starships"
              listView={isListView}

            />
          ))}
        </CardList>
      ) : (
      
      <CardGrid>
        {data.map((item, index) => (
          <Card
            key={index}
            image={`https://starwars-visualguide.com/assets/img/starships/${index + 1}.jpg`}
            title={item.name}
            category="starships"
            listView={isListView}
          />
        ))}
      </CardGrid>
      )}
    </StarContainer>
    
  )
}

export default StarshipsPage;

const Title = styled.div`
color: #f1f1f1;
padding: 20px ;
display: flex;
width:1200px;
justify-content:space-between;

`;
const ViewButtons = styled.div`
  display: flex;
  padding-top:26px;
  padding-right:40px;
  
`;

const ViewButton = styled.button`
  background-color: transparent;
  border: 1px solid #f1f1f1;
  color: ${({ active }) => (active ? '#007bff' : '#ccc')};
  cursor: pointer;
  font-size: 18px;
  display: flex;
  align-items: center;
  width: 36.36363601684581px;
height: 32.000000000000156px;
top: 32px;
left: 36.363525390625px;

  &:hover {
    color: #007bff;
  }
`;
const StarContainer = styled.div`
  padding: 20px;
  margin-left: 250px;
  
`;

const CardList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const CardGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;
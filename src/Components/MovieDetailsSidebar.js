import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';


const MovieDetailsSidebar = ({ selectedMovie, onClose }) => {
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    if (selectedMovie) {

      const fetchMovieDetails = async () => {
        try {
          const response = await axios.get(selectedMovie.url);

          setMovieDetails(response.data);
        } catch (error) {
          console.error('Error fetching movie details:', error);
        }
      };
      fetchMovieDetails();
    }
  }, [selectedMovie]);
  if (!selectedMovie) {
    // Don't display the sidebar if selectedMovie is null
    return null;
  }

  return (
    <SidebarContainer>  
      <CloseButton onClick={onClose}>&times;</CloseButton> 
      {movieDetails && (
        <div>
          <MovieImageCard>
            <img src={selectedMovie.image} alt={movieDetails.title} />
          </MovieImageCard>
          <MovieTitleCard>{movieDetails.title}</MovieTitleCard>
          <MovieDescriptionCard>{movieDetails.opening_crawl}</MovieDescriptionCard>
          <CloseButton2 onClick={onClose}>Close</CloseButton2>
        </div>
      )}
    </SidebarContainer>
  );
};



const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 400px;
  background: #03123D;
  border:2px solid;
  box-shadow: -2px 0 4px rgba(0, 0, 0, 0.1);
  z-index:15;
`;


const CloseButton = styled.button`
  position: absolute;
  top: 3px;
  right: 16px;
  font-size: 20px;
  background: none;
  border: none;
  color: #f1f1f1;
  cursor: pointer;
  z-index:16;
`;

const CloseButton2 = styled.button`
  color:#ffff;
  background-color:#CB1A80;
  width:360px;
  height:45px;
  border-radius:8px;
  margin-top:60px;
  margin-left:20px;
`;
const MovieImageCard = styled.div`
 
  padding:20px;
  border-radius: 10px;
  overflow: hidden;
  img {
    width: 360px;
    height: 244px;
    border : 2px solid #f1f1f1;
    border-radius:10px;
  }
`;

const MovieTitleCard = styled.div`
  padding: 20px;
  width:320px;
  background-color: #f1f1f1;
  border : 2px solid #f1f1f1;
  border-radius:10px;
  font-size: 14px;
  font-weight: 500;
  overflow:hidden;
  margin-left:20px;
margin-right:30px;
`;

const MovieDescriptionCard = styled.div`
margin-top:10px;
margin-left:20px;
margin-right:30px;
  padding: 20px;
  width:320px;
  background-color: #f1f1f1;
  border : 2px solid #f1f1f1;
  border-radius:16px;
  overflow:hidden;
`;
// const MovieDetailsSidebar = ({ selectedMovie, onClose, category }) => {
//   const [movieDetails, setMovieDetails] = useState(null);

//   useEffect(() => {
//     if (selectedMovie && category) {
//       const fetchMovieDetails = async () => {
//         try {
//           const response = await axios.get(
//             `https://swapi.dev/api/${category}/${selectedMovie.id}/`
//           );
//           setMovieDetails(response.data);
//         } catch (error) {
//           console.error('Error fetching movie details:', error);
//         }
//       };
//       fetchMovieDetails();
//     }
//   }, [selectedMovie, category]);

//   if (!selectedMovie) {
//     // Don't display the sidebar if selectedMovie is null
//     return null;
//   }

//   return (
//     <SidebarContainer>
//       <CloseButton onClick={onClose}>&times;</CloseButton>
//       {movieDetails && (
//         <div>
//           <MovieImageCard>
//             <img src={selectedMovie.image} alt={movieDetails.title} />
//           </MovieImageCard>
//           {category === 'films' && (
//             <>
//               <MovieTitleCard>{movieDetails.title}</MovieTitleCard>
//               <MovieDescriptionCard>{movieDetails.opening_crawl}</MovieDescriptionCard>
//             </>
//           )}
//           {category === 'people' && (
//             <>
//               <MovieTitleCard>Name: {movieDetails.name}</MovieTitleCard>
//               <MovieDescriptionCard>Birth Year: {movieDetails.birth_year}</MovieDescriptionCard>
//               <MovieDescriptionCard>Gender: {movieDetails.gender}</MovieDescriptionCard>
//               {/* Add more details specific to the 'people' category */}
//             </>
//           )}
//           {category === 'planet' && (
//             <>
//               <MovieTitleCard>Name: {movieDetails.name}</MovieTitleCard>
//               <MovieDescriptionCard>Climate: {movieDetails.climate}</MovieDescriptionCard>
//               <MovieDescriptionCard>Gravity: {movieDetails.gravity}</MovieDescriptionCard>
//               {/* Add more details specific to the 'planets' category */}
//             </>
//           )}
//           {category === 'species' && (
//             <>
//               <MovieTitleCard>{movieDetails.name}</MovieTitleCard>
//               <MovieDescriptionCard>{movieDetails.classification}</MovieDescriptionCard>
//             </>
//           )}
//           {category === 'vehicles' && (
//             <>
//               <MovieTitleCard>Name: {movieDetails.name}</MovieTitleCard>
//               <MovieDescriptionCard>Birth Year: {movieDetails.manufacturer}</MovieDescriptionCard>
//               <MovieDescriptionCard>Gender: {movieDetails.crew}</MovieDescriptionCard>
//               {/* Add more details specific to the 'people' category */}
//             </>
//           )}
//           {category === 'starships' && (
//             <>
//               <MovieTitleCard>Name: {movieDetails.name}</MovieTitleCard>
//               <MovieDescriptionCard>Climate: {movieDetails.manufacturer}</MovieDescriptionCard>
//               <MovieDescriptionCard>Gravity: {movieDetails.crew}</MovieDescriptionCard>
             
//             </>
//           )}
         
//         </div>
//       )}
//     </SidebarContainer>
//   );
// };
export default MovieDetailsSidebar;

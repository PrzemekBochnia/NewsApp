import React from 'react';
import NewsList from '../components/NewsList';
import NewsFromPoland from '../components/NewsFromPoland';
import BusinesNews from '../components/BusinessNews';
import EntertainmentNews from '../components/EntertainemtNews';
import SportsNews from '../components/SportsNews';
import ScienceNews from '../components/ScienceNews';
import SearchNews from '../components/SearchNews';

function Home() {
  return (
    <>
    <SearchNews/>
    <NewsList/>
    <NewsFromPoland/>
    <BusinesNews/>
    <EntertainmentNews/>
    <SportsNews/>
    <ScienceNews/>
    </>
    )
}

export default Home
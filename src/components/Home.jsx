import React, { useContext } from 'react'
import Feed from './Feed';
import DataContext from '../context/DataContext';


const Home = () => {
  const { searchResults, fetchError, isLoading } = useContext(DataContext)
  
  return (

    <main className='home'>
      {isLoading && <p className='statusMsg' style={{marginTop: "20rem", textAlign: "center"}}>Loading Posts......</p>}
      {!isLoading && fetchError && <p className='statusMsg' style={{marginTop: "20rem", textAlign: "center", color: "red"}}>{fetchError}</p>}
      {
        !isLoading && !fetchError && (searchResults.length ?(
          <Feed posts={searchResults}/>
        ) : (
          <p style={{marginTop: "20rem", textAlign: "center"}} className='statusMsg'>No posts to display</p>
        )
        )
      }
    </main>
  )
}

export default Home
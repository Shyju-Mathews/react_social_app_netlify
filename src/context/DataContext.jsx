import { createContext, useEffect, useState } from "react";
import useWindowSize from "../hooks/useWindowSize";
import useAxiosFetch from "../hooks/useAxiosFetch";

const DataContext = createContext({})

export const DataProvider = ({children}) => {
    const [posts, setPosts] = useState([]
        // JSON.parse(localStorage.getItem("posts"))
        );
    
      const [search, setSearch] = useState("");
      const [searchResults, setSearchresults] = useState([]);
      const { width } = useWindowSize()
      const { data, fetchError, isLoading } = useAxiosFetch("http://localhost:5000/posts")
    
      useEffect(() => {
        const filteredResults = posts.filter(
          (post) =>
            ((post.title).toLowerCase()).includes(search.toLowerCase()) ||
            ((post.body).toLowerCase()).includes(search.toLowerCase())
        );
        setSearchresults(filteredResults.reverse());
      }, [search, posts]);
    
      // const getPosts = async () => {
      //   try {
      //     const res = await api.get("/posts")
      //     setPosts(res.data)
      //     console.log("Data------>>>>", res.data)
      //   } catch (error) {
      //     if (error.res) {
      //       console.log(error.res.data)
      //       console.log(error.res.status)
      //       console.log(error.res.headers)
      //     } else {
      //       console.log(`Error: ${error.message}`);
      //     }
      //   }
      // }
    
      useEffect(() => {
        setPosts(data)
      }, [data])

    return(
        <DataContext.Provider value={{
            width, search, setSearch,
            searchResults,fetchError, isLoading,
            posts, setPosts
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext;
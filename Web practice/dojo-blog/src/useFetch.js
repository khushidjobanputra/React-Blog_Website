import { useState, useEffect } from "react";

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(true);

    useEffect(() =>{
        // console.log("use effect run...");
        // console.log(blogs);
        // console.log(name);

        const abortCont = new AbortController();
        setTimeout(() =>{ 
            fetch(url, {signal: abortCont.signal})
            .then(res => {
                console.log(res);
                if(!res.ok){
                    throw Error('could not fetch the data for that resource');
                }
                return res.json();
            })
            .then(data => {
                setData(data);
                setIsLoading(false);
                setError(null);
            })
            .catch(err =>{
                //console.log(err.message);
                if(err.name === 'AbortError'){
                    console.log('fetch aborted');
                }
                else{
                    setError(err.message);
                    setIsLoading(false);
                }
            })
        }, 1000);

        return() => abortCont.abort();

    }, [url]);// name is dependency

    return { data,isLoading,error };
}
 
export default useFetch;
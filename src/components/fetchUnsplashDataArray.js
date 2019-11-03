const fetchUnsplashDataArray= async (term)=>{
    console.log({ term });

    const url = new URL("https://api.unsplash.com/search/photos/");
    const params = { query: term };
    url.search = new URLSearchParams(params).toString();

    const response = await fetch(url, {
      method: "get",
      headers: new Headers({
        Authorization: `Client-ID 0363124836c07cb3e02d4d7cc8ca6c82ac871117298db44d67fde1051e33c126`,
        "Content-Type": "application/json"
      })
    });

    const data = await response.json();
    return data.results;
  }


  export default fetchUnsplashDataArray;



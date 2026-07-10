function ganesh(category)
{ let output=""; 
    for(let m of movie)
        { 
            if(m.category===category)
            { 
                output += ` <div class="movie">
                 <h1>${m.name}</h1> 
                  <h2>${m.category}</h2> 
                 <h1><a href="${m.imdb}" target="_blank">⭐ IMDb</a></h1> 
                  </div> `; 
                } 
            } 
            document.getElementById("result").innerHTML=output;
         }
const movie=[
    {
        name:"bahubali",
        category:"Drama",
        imdb:"https://www.imdb.com/title/tt2631186/"
    },
    {
        name:"Jathi ratnalu",
        category:"comedy",
        imdb:"https://www.imdb.com/title/tt11306376/"
    },
    {
        name:"HI Nanna",
        category:"Family Drama",
        imdb:"https://www.imdb.com/title/tt25433734/"
    },
    {
        name:"kanchana",
        category:"Horror",
        imdb:"https://www.imdb.com/title/tt13282848/"
    },
    {
        name:"HIT 3",
        category:"crime thriller",
        imdb:"https://www.imdb.com/title/tt23804696/"
    },
    {
        name:"Pushpa 2",
        category:"Action",
        imdb:"https://www.imdb.com/title/tt16539454/"
    }
    

]
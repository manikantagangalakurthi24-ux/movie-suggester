function ganesh(category)
{ let output=""; 
    for(let m of movie)
        { 
            if(m.category===category)
            { 
                output += ` <div class="movie">
                 <h2>${m.name}</h2> 
                  <h3>(${m.category})</h3> 
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
        name:"RRR",
        category:"Drama",
        imdb:"https://www.imdb.com/title/tt8178634/"
    },
    {
        name:"Rangastalam",
        category:"Drama",
        imdb:"https://www.imdb.com/title/tt7392212/"
    },
    {
        name:"Jathi ratnalu",
        category:"comedy",
        imdb:"https://www.imdb.com/title/tt11306376/"
    },
    {
        name:"DJ-Tillu",
        category:"comedy",
        imdb:"https://www.imdb.com/title/tt13245502/"
    },
    {
        name:"MAD",
        category:"comedy",
        imdb:"https://www.imdb.com/title/tt28820189/"
    },
    {
        name:"HI Nanna",
        category:"Family Drama",
        imdb:"https://www.imdb.com/title/tt25433734/"
    },
    {
        name:"35 - Chinna Katha Kaadu",
        category:"Family Drama",
        imdb:"https://www.imdb.com/title/tt32750432/"
    },
    {
        name:"Maa Nanna Superhero",
        category:"Family Drama",
        imdb:"https://www.imdb.com/title/tt28115572/"
    },
    {
        name:"kanchana",
        category:"Horror",
        imdb:"https://www.imdb.com/title/tt13282848/"
    },
    {
        name:"Virupaksha",
        category:"Horror",
        imdb:"https://www.imdb.com/title/tt24059780/?ref_=ls_t_4"
    },
    {
        name:"Masooda",
        category:"Horror",
        imdb:"https://www.imdb.com/title/tt23726308/?ref_=ls_t_3"
    },
    {
        name:"HIT 3",
        category:"crime thriller",
        imdb:"https://www.imdb.com/title/tt23804696/"
    },
    {
        name:"Agent Sai Srinivasa Athreya",
        category:"crime thriller",
        imdb:"https://www.imdb.com/title/tt10214826/"
    },
    {
        name:"They Call Him OG",
        category:"crime thriller",
        imdb:"https://www.imdb.com/title/tt24060892/"
    },
    {
        name:"Pushpa 2",
        category:"Action",
        imdb:"https://www.imdb.com/title/tt16539454/"
    },
    {
        name:"KGF-2",
        category:"Action",
        imdb:"https://www.imdb.com/title/tt10698680/"
    },
    {
        name:"SAAHO",
        category:"Action",
        imdb:"https://www.imdb.com/title/tt6836936/"
    }
    

]

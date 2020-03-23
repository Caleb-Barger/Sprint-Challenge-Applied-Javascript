// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

function makeCard(object) {
    const card = document.createElement("div");
    const cardHeadLine = document.createElement("div");
    const authorHolder = document.createElement("div");
    const imgContainer = document.createElement("div");
    const image = document.createElement("img");
    const cardAuthorName = document.createElement("span");

    card.classList.add("card");
    cardHeadLine.classList.add("headline");
    authorHolder.classList.add("author");
    imgContainer.classList.add("img-container");
    
    cardHeadLine.textContent = object.headLine;
    image.src = object.authorPhoto;
    cardAuthorName.textContent = object.authorName;

    card.append(
        cardHeadLine,
        authorHolder,
    );
    authorHolder.append(
        imgContainer,
        cardAuthorName,
    );
    imgContainer.append(
        image,
    );

    return card;
}


const cardsContainer = document.querySelector(".cards-container");
// cardsContainer.appned(document.createElement("p"));

axios.get("https://lambda-times-backend.herokuapp.com/articles")
    .then(response => {
      const jsArticles = response.data.articles.javascript;
      for (let i=0; i < jsArticles.length; i++){  
        cardsContainer.append(makeCard(jsArticles[i]));
      }
      const bsArticles = response.data.articles.bootstrap;
      for (let i=0; i < bsArticles.length; i++){  
        cardsContainer.append(makeCard(bsArticles[i]));
      }      
      const tArticles = response.data.articles.technology;
      for (let i=0; i < tArticles.length; i++){  
        cardsContainer.append(makeCard(tArticles[i]));
      }
      const jqArticles = response.data.articles.jquery;
      for (let i=0; i < jqArticles.length; i++){  
        cardsContainer.append(makeCard(jqArticles[i]));
      }
      const nArticles = response.data.articles.node;
      for (let i=0; i < nArticles.length; i++){  
        cardsContainer.append(makeCard(nArticles[i]));
      }


    });




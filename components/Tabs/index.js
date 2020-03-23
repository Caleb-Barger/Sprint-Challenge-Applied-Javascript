// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>





const createTab = (topic) => {
    const topicHolder = document.createElement("div");
    topicHolder.classList.add("tab");
    topicHolder.textContent = topic;

    return topicHolder;
}


const topics = document.querySelector(".topics");

axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then(response => {
        const responseTopics = response.data.topics;
        responseTopics.forEach(topic => {
              topics.append(createTab(topic));
        })
    });




# gunDam.

## What is it?
gunDam (gun damage) is a site focused towards informing users about gun violence in the U.S. We emphasize how prominent incidents are via data visualization. The focal point is our D3 choropleth map. 

## How does it work?
The app begins at a page that displays a brief intro and then underneath that is a choropleth map of the United States. Once you hover
your mouse over a state it displays how many seperate incidents of gun violence have occured in that state from 2013 all the way until
now.

![demo image here](https://birnapwnsu.github.io/portfolio/img/gundammap.jpg)

Once you click on a specific state, the map zooms in and you'll see more points appear on the map. These points specifically
depict where incidents occured. You can tell which cities/counties are more concentrated or prone to gun violence. Simultaneously, there's a container underneath the map which is populated with incidents you can scroll through as well.

<br>Each incident give the following information: 
1. state and city or county the incident occured
2. casualties: number of people injured or killed
3. link in which user can click to discover more

## How was it created?
### The Process
- Divided the work amongst ourselves to create the wireframe for our idea
- Obtained a CSV file from **Kaggle.com** which held all our data on the incidents
  - we first implemented data locally onto **MySQL**, which was unable to hold all of the data
  - we then migrated our data into **mLab** instead where we were able to store all of our data
    -(mLab is a cloud database service which hosts MongoDB databases)
- Used **Node** modules such as **Express**, **Mongoose**, and **Path** for our project to function properly
- Used Express to lay out the structure of our application in which it can communicate with the data
  - In the models folder, there is a schema created for our objects to be modeled
  - Routes were used for GET requests in order for information to be retrieved
    - The data is requested from our MLab's database upon user's click onto a specific state
    - The information is then populated and appended onto the page for the user to view
- Used **D3** and **Leaflet** to further emphasize our data by visualizing it on the map
  - D3 was used to add a layer on the map which showed a darker color if the area was more concentrated
  - Leaflet was used to display the base map and the information on the side 

### The Challenges
- It was difficult to overcome being bottlenecked by how our data worked at times
- This was our first time working with such a huge data set so it was interesting to discover how to approach it
- Communication wasn't always at it's prime. We were unable to reach people sometimes

### Technologies Used
- HTML, CSS, Bootstrap, Javascript, jQuery
- Data: Kaggle.com
- Databases: MYSQL, MongoDB (mLab)
- Environment: Node
- Framework: Express
- JS libraries: D3, Leaflet

let accessKey = "dEHlYpUloPN_iHAvsl4Yj8pAuWyBYonfzaCwch0O_vw";
let page = 1;


let input = document.querySelector('.inp')
const search = document.querySelector('.btn')

// Function to fetch API data


async function gettingApi() {
    
    let value = input.value
    let url = `https://api.unsplash.com/search/photos?page=${page}&query=${value}&client_id=${accessKey}`;
    
    try {
        let response = await fetch(url);
        let data = await response.json();
        let array = data.results;

        let mainDiv = document.querySelector('.main-div'); // Select main-div once
        mainDiv.innerHTML = ""; // Clear previous results
        mainDiv.innerHTML = ""

        array.map((oneValue) => {
            console.log(oneValue);
            
            // Create image div
            let imgDiv = document.createElement('div');
            imgDiv.className = 'img-div';

            // Create image element
            let img = document.createElement('img');
            img.src = oneValue.urls.small; // ✅ Assign image source correctly
            img.alt = oneValue.alt_description || "Unsplash Image"; // Set alt text
            
            // Create title element
            let title = document.createElement('span');
            title.innerText = oneValue.alt_description || "No Title Available"; // ✅ Set title text

            // Append elements
            imgDiv.appendChild(img);
            imgDiv.appendChild(title);
            mainDiv.appendChild(imgDiv);
        });

    } catch (error) {
        console.error("Error fetching API data:", error);
    }
        
    
    
}

// Call the function
gettingApi();
search.addEventListener('click', gettingApi)


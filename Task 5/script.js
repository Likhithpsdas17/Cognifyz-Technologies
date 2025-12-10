function fetchData() {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then(response => response.json())
        .then(data => {
            document.getElementById("dataContainer").innerHTML = 
            
            `<h2>${data.title}</h2>
            <p>${data.body}</p>
            `;
        });

}
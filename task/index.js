function loadData() {
    let arrayData = ''
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((json) => {
            json.map((val, index) => {
                console.log(val);
                arrayData += `<div class="card">
                <h1>${val.id}</h1>
                <h2>${val.title}</h2>
                <label>${val.body}</label>
                <h4>${val.userId}</h4>
            </div>`
            })

            // document.getElementById('card-content').innerHTML = arrayData
        })
        .catch((err) => console.log(err))
}

loadData();

function clickShortName() {
    const inputValue = document.getElementById('input1').value;

    let answer = ''
    switch (inputValue) {
        case 'intern':
            answer = "Intern Software Engineer";
            break;
        case 'ase':
            answer = "Assosiate Software Engineer";
            break;
        case 'se':
            answer = "Software Engineer";
            break;
        case 'sse':
            answer = "Senior Software Engineer";
            break;
        case 'atl':
            answer = "Assistant Tech Lead";
            break;
        case 'tl':
            answer = "Tech Lead";
            break;
        default:
            answer = "Error code ..!";
            break;
    }

    document.getElementById('display1').innerText = answer
}
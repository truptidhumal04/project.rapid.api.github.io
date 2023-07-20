const getData = async () => {


    const url = 'https://the-birthday-cake-db.p.rapidapi.com/';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6b6645dc33msh437db63b60cb7d1p170753jsn0af49fb57a61',
		'X-RapidAPI-Host': 'the-birthday-cake-db.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	

        result.map((cval) => {

            document.getElementById('cake').innerHTML += `
            
                <div class="col-md-2">
                
                    <div class="card">

                        <img src="${cval.image}" class="card-img" alt="" />

                        <div class="card-body">

                            <h5 class="card-title">${cval.title}</h5>
                            <p>id : ${cval.id}
                             title : ${cval.title}
                            difficulty:${cval.difficulty}</p>
                        </div>
                   
                    </div>
                
                </div>
            
            `
        })

    } catch (error) {
        console.error(error);
    }
}

getData();


let form = document.getElementById('form');

const handleSubmit = (event) => 

    event.preventDefault();

    let search = document.getElementById('search').value;
    // let size = document.getElementById('size').value;


    const getAnime = async () =>{


        const url = 'https://the-birthday-cake-db.p.rapidapi.com/5';
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '6b6645dc33msh437db63b60cb7d1p170753jsn0af49fb57a61',
                'X-RapidAPI-Host': 'the-birthday-cake-db.p.rapidapi.com'
            }
        };
        
    };
    // try {
    //     const response = await fetch(url, options);
    //     const result = await response.json();

    //     result.map((cval) => {

//             console.log(cval.name)
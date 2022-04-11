 const elementi = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];


let coso = ''; //Variabile usata per salvare il valore del menu a tendina
const selectElement = document.querySelector('.filterlist');
selectElement.addEventListener('change', (event) => {
  const result = document.querySelector('.risultato');
  coso = document.querySelector(".filterlist").value;
  console.log(coso);
  result.textContent = `Hai scelto : ${event.target.value}`;
  stampaElementi();
  
});

const teamContainer = document.querySelector('.container');

function stampaElementi(){
	const row = teamContainer.getElementsByClassName('.row mt-3');
    let item = '';
	
    for(let i = 0; i < elementi.length; i++ ){
		if (coso == elementi[i].type){
        item +=  ` 
        
              <div class="col-1">
                  <i class="fa-solid ${elementi[i].prefix}${elementi[i].name}" style="color:${elementi[i].color}"></i>
                    <p>${elementi[i].name}</p>
                </div>
        
			  `} 

		if (coso == 'All'){
        item +=  ` 
        
              <div class="col-1">
			  <i class="fa-solid ${elementi[i].prefix}${elementi[i].name}" style="color:${elementi[i].color}"></i>
                    <p>${elementi[i].name}</p>
                </div>
        
			  `} 		

			}
	//teamContainer.append(row); 
    teamContainer.innerHTML = item; 
}




/*

document.getElementById("filterlist").innerHTML = elementi.filter(sceltaElementi);

function sceltaElementi(elementi) {
  return elementi.animal;
}*/


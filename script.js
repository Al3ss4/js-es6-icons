console.log('JS OK!');



/*Milestone 1
Partendo dalla struttura dati fornita, visualizzare in pagina un box per ogni icona, in cui è presente il nome dell'icona e l'icona stessa.*/


//assegno una costante al mio array

const arrayIcons = [
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


//creiamo una costante per richiamare il nostro conttainer presente nel main
const iconGrid = document.getElementById('icone');

printIcons(arrayIcons);

function printIcons(array){


   	let allIcons ="";

	   //con la function forEach vado a ciclare tutto il mio array
    array.forEach((element) => {
        
	//destrutturizzo in modo da poter utilizzare family prefix e name senza element.
        const {color, name, prefix, family} = element;
    
    /*Milestone 2
	Ciascuna icona ha una proprietà "color": utilizzare questa proprietà per visualizzare le icone del colore corrispondente.*/
        const grid = 
        `
			
            <i class="${family} ${prefix}${name} icone" style="color:${color}"><i>
            <p>${name.toUpperCase()}</p>
        
        `;

        allIcons += grid;
		
    });

	iconGrid.innerHTML = allIcons;
	
}



/*Milestone 3
Aggiungere alla pagina una select in cui le options corrispondono ai vari tipi di icone (animal, vegetable, user).*/



const filter = ['animal' , 'vegetable', 'user'];
const select = document.querySelector('.filter select');


createOption(filter);
// Quando l'utente seleziona un tipo dalla select, visualizzare solamente le icone corrispondenti.


//usiamo la funzione per andare a modificare il nostro select
select.addEventListener('change', (event) =>{


	const selectedCategory = event.target.value;
	if(selectedCategory === 'all'){
		printIcons(arrayIcons);
	}else{
		printIcons(arrayIcons.filter((item)=> item.type === selectedCategory));
	}
});
//costruiamo una funzione che andrà ad inzerire delle "option" nel nostro select
function createOption(element){
let content = '<option value="all">All</option>';
	element.forEach((category)=>{
		content+=`
		<option value="${category}">${category}</option>
		`
	})
	select.innerHTML = content;
}
const info = {
    recipes: [
        {
            id: 1,
            name: "CHICKEN & VEGGIES",
            grams: 703,
            kcal: 1003
        },
        {
            id: 2,
            name: "BEEF & VEGGIES",
            grams: 646,
            kcal: 999
        },
        {
            id: 3,
            name: "MEAT DELIGHT",
            grams: 667,
            kcal: 1006
        }
    ],
    activity: [
        {
            id: 1,
            name: "Sedentario",
            mPercentage: 2.5,
            description: 'Poco O Sin Ejercicio',
            eq: x => (32.989 * x) + 77.168
        },
        {
            id: 2,
            name: "Activo Ligero",
            mPercentage: 2.5,
            description: 'Camina 1 A 3 Veces A La Semana',
            eq: x => (42 * x) + 98 
        },
        {
            id: 3,
            name: "Activo Moderado",
            mPercentage: 3,
            description: 'Camina O Corre Todos Los Dias',
            eq: x => (54 * x) + 126 
        },
        {
            id: 4,
            name: "Muy Activo",
            mPercentage: 3,
            description:  'Camina O Corre Todos Los Dias (Mañana y Tarde)',
            eq: x => (89.571 * x) + 216
        }
    ],
    breeds: [
        {
            category: "Giant Breeds"
        },
        {
            breed: "Blood Hound", 
            weight: "36 - 50"
        },
        {
            breed: "Bull Mastiff", 
            weight: "41 - 59"
        },
        {
            breed: "Deerhound", 
            weight: "33 - 50"
        },
        {
            breed: "Great Dane", 
            weight: "45 - 65"
        },
        {
            breed: "Irish Wolfhound", 
            weight: "45 - 65"
        },
        {
            breed: "Komondo", 
            weight: "34 - 68"
        },
        {
            breed: "Leonberger", 
            weight: "36 - 68"
        },
        {
            breed: "Mastiff", 
            weight: "78 - 86"
        },
        {
            breed: "Neopolitan Mastiff", 
            weight: "50 - 70"
        },
        {
            breed: "Newfoundland", 
            weight: "50 - 70"
        },
        {
            breed: "Otterhound", 
            weight: "30 - 55"
        },
        {
            breed: "Pyrenean Mountain Dog", 
            weight: "40 - 57"
        },
        {
            breed: "Saint Bernard", 
            weight: "50 - 90"
        },
        {
            category: "Large Breeds", 
        },
        {
            breed: "Afgan Hound", 
            weight: "22 - 28"
        },
        {
            breed: "Belgian Shepherd", 
            weight: "28 - 30"
        },
        {
            breed: "Bernese Mountain Dog", 
            weight: "38 - 46"
        },
        {
            breed: "Borzoi", 
            weight: "35 - 60"
        },
        {
            breed: "Bouvier des Flandres", 
            weight: "27 - 42"
        },
        {
            breed: "Boxer", 
            weight: "23 - 32"
        },
        {
            breed: "Briard", 
            weight: "30 - 39"
        },
        {
            breed: "Chesapeake Bay Retriever", 
            weight: "25 - 36"
        },
        {
            breed: "Clumber Spaniel", 
            weight: "25 - 38"
        },
        {
            breed: "Curley Coat Retriever", 
            weight: "31 - 36"
        },
        {
            breed: "Dalmatian", 
            weight: "23 - 27"
        },
        {
            breed: "Doberman", 
            weight: "30 - 40"
        },
        {
            breed: "Dogue de Bordeaux", 
            weight: "45 - 65"
        },
        {
            breed: "English Setter", 
            weight: "20 - 32"
        },
        {
            breed: "Flat-Coated Retriever", 
            weight: "25 - 36"
        },
        {
            breed: "German Shepherd Dog", 
            weight: "30 - 43"
        },
        {
            breed: "German Short Haired Pointer", 
            weight: "25 - 32"
        },
        {
            breed: "German Wire Haired Pointer", 
            weight: "20 - 34"
        },
        {
            breed: "Golden Retriever", 
            weight: "26 - 36"
        },
        {
            breed: "Gordon Setter", 
            weight: "20 - 36"
        },
        {
            breed: "Greyhound", 
            weight: "27 - 32"
        },
        {
            breed: "Hungarian Visla", 
            weight: "20 - 30"
        },
        {
            breed: "Irish Setter", 
            weight: "27 - 32"
        },
        {
            breed: "Irish Water Spaniel", 
            weight: "20 - 30"
        },
        {
            breed: "Italian Spinone", 
            weight: "28 - 39"
        },
        {
            breed: "Japanese Akita", 
            weight: "34 - 50"
        },
        {
            breed: "Labrador Retriever", 
            weight: "25 - 34"
        },
        {
            breed: "Old English Sheepdog", 
            weight: "28 - 40"
        },
        {
            breed: "Poodle (Standard)", 
            weight: "20 - 32"
        },
        {
            breed: "Rhodesian Ridgeback", 
            weight: "30 - 39"
        },
        {
            breed: "Rottweiler", 
            weight: "32 - 50"
        },
        {
            breed: "Saluki", 
            weight: "20 - 30"
        },
        {
            breed: "Samoyed", 
            weight: "23 - 30"
        },
        {
            breed: "Schnauzer (Giant)", 
            weight: "32 - 35"
        },
        {
            breed: "Weimaraner", 
            weight: "31 - 39"
        },
        {
            category: "Medium Breeds", 
        },
        {
            breed: "Airedale Terrier", 
            weight: "19 - 23"
        },
        {
            breed: "American Cocker Spaniel", 
            weight: "10 - 13"
        },
        {
            breed: "Basset Hound", 
            weight: "18 - 27"
        },
        {
            breed: "Bearded Collie", 
            weight: "18 - 28"
        },
        {
            breed: "Border Collie", 
            weight: "13 - 20"
        },
        {
            breed: "Bull Terrier", 
            weight: "23 - 30"
        },
        {
            breed: "Bulldog", 
            weight: "18 - 25"
        },
        {
            breed: "Chow Chow", 
            weight: "20 - 32"
        },
        {
            breed: "Cocker Spaniel", 
            weight: "12 - 15"
        },
        {
            breed: "Collie ( Rough and Smooth)", 
            weight: "18 - 34"
        },
        {
            breed: "Criollo Mediano", 
            weight: "16 - 21"
        },
        {
            breed: "Elkhound", 
            weight: "18 - 23"
        },
        {
            breed: "English Pointer", 
            weight: "20 - 30"
        },
        {
            breed: "English Springer Spaniel", 
            weight: "22 - 25"
        },
        {
            breed: "Field Spaniel", 
            weight: "15 - 25"
        },
        {
            breed: "Finnish Spitz", 
            weight: "11 - 16"
        },
        {
            breed: "Keeshond", 
            weight: "25 - 30"
        },
        {
            breed: "Kerry Blue", 
            weight: "15 - 17"
        },
        {
            breed: "Nova Scotia Duck Tolling Retriever", 
            weight: "16 - 23"
        },
        {
            breed: "Puli (Hungarian Puli)", 
            weight: "9 - 18"
        },
        {
            breed: "Schnauzer (Standard)", 
            weight: "14 - 20"
        },
        {
            breed: "Shar Pei", 
            weight: "16 - 25"
        },
        {
            breed: "Siberian Husky", 
            weight: "16 - 27"
        },
        {
            breed: "Soft Coated Wheaten Terrier", 
            weight: "16 - 21"
        },
        {
            breed: "Staffordshire Bull terrier", 
            weight: "10 - 17"
        },
        {
            breed: "Welsh Springer Spaniel", 
            weight: "15 - 20"
        },
        {
            category: "Small Breeds", 
        },
        {
            breed: "Basenji", 
            weight: "9 - 11"
        },
        {
            breed: "Beagle", 
            weight: "8 - 14"
        },
        {
            breed: "Bedlington Terrier", 
            weight: "8 - 11"
        },
        {
            breed: "Border Terrier", 
            weight: "5 - 9"
        },
        {
            breed: "Boston Terrier", 
            weight: "5 - 12"
        },
        {
            breed: "Cairn terrier", 
            weight: "6 - 8"
        },
        {
            breed: "Cavalier King Charles Spaniel", 
            weight: "5 - 9"
        },
        {
            breed: "Dachshund", 
            weight: "9 - 12"
        },
        {
            breed: "Dandie Dinmont", 
            weight: "8 - 11"
        },
        {
            breed: "Fox Terrier", 
            weight: "7 - 8"
        },
        {
            breed: "French Bulldog", 
            weight: "10 - 13"
        },
        {
            breed: "Jack Russell Terrier", 
            weight: "5 - 8"
        },
        {
            breed: "King Charles Spaniel", 
            weight: "4 - 6"
        },
        {
            breed: "Lhasa Apso", 
            weight: "6 - 8"
        },
        {
            breed: "Norfolk / Norwich Terrier", 
            weight: "5 - 7"
        },
        {
            breed: "Poodle (Minature)", 
            weight: "10 - 14"
        },
        {
            breed: "Pug", 
            weight: "6 - 8"
        },
        {
            breed: "Schnauzer (Minature)", 
            weight: "5.5 - 7.5"
        },
        {
            breed: "Schipperke", 
            weight: "5 - 9"
        },
        {
            breed: "Scottish Terrier", 
            weight: "8 - 11"
        },
        {
            breed: "Sealyham Terrier", 
            weight: "8 - 9"
        },
        {
            breed: "Shetland Sheepdog", 
            weight: "6 - 9"
        },
        {
            breed: "Shiba Inu", 
            weight: "9 - 14"
        },
        {
            breed: "Shih Tzu", 
            weight: "4 - 8"
        },
        {
            breed: "Skye Terrier", 
            weight: "8 - 11"
        },
        {
            breed: "Tibetan Spaniel", 
            weight: "4 - 7"
        },
        {
            breed: "Tibetan Terrier", 
            weight: "8 - 14"
        },
        {
            breed: "Welsh Corgi", 
            weight: "9 - 15"
        },
        {
            breed: "West Highland White Terrier", 
            weight: "7 - 10"
        },
        {
            breed: "Whippet", 
            weight: "10 - 13"
        },
        {
            category: "Toy Breeds", 
        },
        {
            breed: "Bichon Frise", 
            weight: "3 - 6"
        },
        {
            breed: "Chihuahua", 
            weight: "1 - 3"
        },
        {
            breed: "Chinese Crested", 
            weight: "2 - 5"
        },
        {
            breed: "Dachshund (Minature)", 
            weight: "4 - 5"
        },
        {
            breed: "Italian Greyhound", 
            weight: "3 - 5"
        },
        {
            breed: "Maltese", 
            weight: "2 - 3.5"
        },
        {
            breed: "Papillon", 
            weight: "2 - 5"
        },
        {
            breed: "Pekinese", 
            weight: "3 - 6"
        },
        {
            breed: "Pomeranian", 
            weight: "1.5 - 3"
        },
        {
            breed: "Poodle (Toy)", 
            weight: "2.5 - 7"
        },
        {
            breed: "Yorkshire Terrier", 
            weight: "2 - 3.5"
        },
        {
            breed: "American Pit Bull Terrier",
            weight: "16 - 30"
        }
    ]
};


const breeds = document.getElementById('breeds');
const recipes = document.getElementById('recipes');
const stdWeight = document.getElementById('stdWeight');
const weight = document.getElementById('weight');
const activity = document.getElementById('activity');
const description = document.getElementById('description');
const result = document.getElementById('result');
const roundTo50 = document.getElementById('roundTo50');

const updateWeight = (breedsList) => {
    const dogFound = breedsList.filter( dog => dog.breed === breeds.value);
    dogFound.length && (stdWeight.value = dogFound[0].weight + ' Kg');
}

const updateDescription = (element) => {
    const text = element.options[element.selectedIndex].text;
    const itemFound = info.activity.filter( item => item.name === text);
    itemFound.length && (description.value = itemFound[0].description);
}

const updateResult = () => {
    result.value = calculateActivity();
}

const handleBreedsChange = event => {
    updateWeight(info.breeds);
    updateResult();
}

const handleActivityChange = event => {
    updateDescription(event.target);
    updateResult();
}

const handleWeigthChange = event => {
    if (event.target.value <= 0) event.target.value = ""
    else{                
        updateResult();   
    } 
}

const handleWeigthKeypress = event => {
    if(event.keyCode === 13){
        console.log(event.keyCode)  
        weight.blur();
    }
}

const handleCheckChange = event => {
    updateResult();
}

const handleRecipesChange = event => {
    updateResult();
}

const loadSelect = (idSelect, key, list, value, category, ascendingOrder) => {
    list.map( item => {                
        if( item[category] && ascendingOrder ) return;

        const node = document.createElement('option');
        item[key] && (node.textContent = item[key]);
        item[value] && (node.value = item[value]);
        item[category] && (node.textContent = `# ${item[category]}`) && (node.disabled = true);
        idSelect.appendChild(node);
    });

    if( ascendingOrder && idSelect.length ) (idSelect = sortList(idSelect));
}

function sortList(idSelect) { 
    arr = new Array(); 
    for(i = 0; i < idSelect.length; i++) { 
        arr[i] = idSelect.options[i]; 
    } 

    arr.sort((a,b) => a.text.localeCompare(b.text)); 
    arr[0].selected = true; 

    const tmpSelect = document.createElement('select');

    while (idSelect.options.length > 0) {
        idSelect.options[0] = null;
    }

    for(i = 0; i < arr.length; i++) { 
        let node = new Option(arr[i].value, arr[i].value)
        idSelect.options[i] = node;
        console.log('Item ' + i, arr[i].value)
    }    

    return tmpSelect;
}

function roundValuesTo50s(value){
    value -= value % 50;
    if(value < 50 ) {value = 50;}
    return value;
}

function calculateMinDiet(){
    let result = activity.value * weight.value * 10;
    return Math.round(result);
}

function calculateMaxDiet(){
    const recipe = info.recipes.find( item => item.id === parseInt(recipes.value));
    const recipeResult = (recipe.grams/recipe.kcal);

    const text = activity.options[activity.selectedIndex].text;
    const itemFound = info.activity.find( item => item.name === text);
    const activityResult = itemFound.eq(weight.value);

    return Math.round(recipeResult * activityResult);
}

function calculateActivity(){
    if(weight.value<=0) return "";

    let minDiet = calculateMinDiet();
    let maxDiet = calculateMaxDiet();

    if(roundTo50.checked){
        minDiet = roundValuesTo50s(minDiet);
        maxDiet = roundValuesTo50s(maxDiet);
    }

    return(minDiet===maxDiet? minDiet : `${minDiet} a ${maxDiet}`) + ' gramos';
}

function injectFunctions(activity){
    const copy = [...activity];

    copy[0].eq = x => (32.989 * x) + 77.168;
    copy[1].eq = x => (42 * x) + 98;
    copy[2].eq = x => (54 * x) + 126;
    copy[3].eq = x => (89.571 * x) + 216;
    return copy;
}

// Load Dogs to list
loadSelect(breeds, "breed", info.breeds,null,"category",true);
loadSelect(recipes, "name", info.recipes, "id");
loadSelect(activity, "name", info.activity, "mPercentage");

updateWeight(info.breeds);
updateDescription(activity);

// Add Event Listeners
breeds.addEventListener("change", handleBreedsChange);
recipes.addEventListener("change", handleRecipesChange);
weight.addEventListener("change", handleWeigthChange);
weight.addEventListener("keypress", handleWeigthKeypress);
activity.addEventListener("change", handleActivityChange);
roundTo50.addEventListener("change", handleCheckChange);



//    fetch('http://127.0.0.1:5500/info.json')
//    .then(response => response.json())
//    .then( myjson => {
//         myjson.activity = injectFunctions(myjson.activity);
//         info = myjson;
//     })
//     .catch( error => console.log('Error obteniendo informacion'));

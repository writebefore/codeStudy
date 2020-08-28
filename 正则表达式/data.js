
let cinemas = /<span>(?<data>.*)<\/span>/g;
let price = /<span class="price">(?<price>.*)<\/span>/g;
let distance = /<div class="distance">(?<distance>.*)<\/div>/g;
let label = /<div class="label-block">(\n|.)*<\/div>(\n|.)*<\/div>/g;
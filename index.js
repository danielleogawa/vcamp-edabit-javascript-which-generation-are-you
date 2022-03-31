function generation(x, y) {
let genero = { "-3": ["great grandmother", "great grandfather"],
						 "-2": ["grandmother", "grandfather"],
						 "-1": ["mother", "father"],
						 "0": ["me!", "me!"],
						 "1": ["daughter", "son"],
						 "2": ["granddaughter", "grandson"],
						 "3": ["great granddaughter", "great grandson"]}
if (y=="f"){
	return genero[x][0]
} else {
	return genero[x][1]
  }
}

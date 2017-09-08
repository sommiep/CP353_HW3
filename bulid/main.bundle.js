'use strict';

function search() {
	var url = '';
	var list = document.getElementById('data');
	list.innerHTML = '';

	var text = document.getElementById('text').value;
	if (document.getElementById('name').checked) {
		var url = 'https://api.punkapi.com/v2/beers/?beer_name=' + text;
	} else {
		var url = 'https://api.punkapi.com/v2/beers/?food=' + text;
	}
	fetch(url).then(function (r) {
		return r.json();
	}).then(function (data) {
		for (var i = 0; i < data.length; i++) {
			var div = document.createElement('div');
			div.setAttribute('class', 'item');
			
			var ul = document.createElement('li');
			ul.setAttribute('style', 'clear:both; padding:10px;');
			var img = document.createElement('img');
			img.setAttribute('src', data[i].image_url);
			img.setAttribute('height', '160px');
			img.setAttribute('width', '40px');
			img.setAttribute('style', 'float:left');

			var name = document.createElement('h4');
			var beerName = document.createTextNode('Name : ' + data[i].name);
			name.appendChild(beerName);

			var food = document.createElement('li');
			var beerFood = document.createTextNode('Food Pairing : ' + data[i].food_pairing);
			food.appendChild(beerFood);
			food.style.fontSize = "small";

			var des = document.createElement('li');
			var beerDes = document.createTextNode('Description : ' + data[i].description);
			des.appendChild(beerDes);
			des.style.fontSize = "small";

			ul.appendChild(img);
			ul.appendChild(name);
			ul.appendChild(food);
			ul.appendChild(des);
			
			div.appendChild(ul);

			list.appendChild(div);
		}
	});
}

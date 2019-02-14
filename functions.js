//Функция выводит на экран объект
function showGoods(item){
	var newDiv = '<div class="block">' +
		'<h2>' + item.name + '</h2>' +
		'<img src="' + item.img + '"/>' + '<br>' + '<p>' + item.dicription + '</p>' +
		'<div>' + item.price + '$</div>' + '<br>' +
		'<span>' + item.presence + '</span>' + '<br>' +
		'<button class="btn btn-outline-success btn-sm btns" ddd = "'+item.name+'">' + item.add + '</button>'
	data.innerHTML += newDiv
}

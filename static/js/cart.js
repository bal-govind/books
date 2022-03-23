var updateBtns = document.getElementsByClassName('update-cart')


for(var i = 0; i < updateBtns.length; i++){
	updateBtns[i].addEventListener('click', function(){
		var productId = this.dataset.product
		var action = this.dataset.action
		console.log('productId: ',productId, 'action: ', action) 


		console.log('User: ', user)
		if(user == 'AnnonymousUser'){
			console.log('Not loggedin')
		}
		else{
			updateUserOrder(productId, action)
		}
	})
}




function updateUserOrder(productId, action){
	console.log('logged in')

	var url = '/update_item/'

	fetch(url, {
		method: 'POST',
		hedders:{
			'Content-Type':'application/json',
			'x-CSRFToken': csrftoken,
		},
		body: JSON.stringify({'productId':productId, 'action': action})
	})

	.then((response)=>{
		return response.json()
	})

	.then((data)=>{
		console.log('data:', data)
		location.reload()
	})
}
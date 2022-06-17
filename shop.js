let goods = [{
  id: '11g2233',
  name: 'Boots of Skywalking',
  description: 'These boots were made for walking, and thats what youll do',
  img: 'assets/img/boots.png',
  quantity: 3,
  price: 15
}, {
  id: '112244',
  name: 'Bone Bow',
  description: 'Ranged attacks, Stay safe use a pointed stick from afar',
  img: 'assets/img/bow.png',
  quantity: 2,
  price: 4
}, {
  id: '112255',
  name: 'Eagles Talon',
  description: 'Fly through your enemies with this feathered edge.',
  img: 'assets/img/dagger.png',
  quantity: 1,
  price: 2
}, {
  id: '112266',
  name: 'Horned Helm',
  description: 'A nice horned helm be careful with the color red when wearing',
  img: 'assets/img/helm.png',
  quantity: 4,
  price: 9
}, {
  id: '112277',
  name: 'Rations',
  description: 'Yum Yum, You are going to need to eat on your adventure. Take this!',
  img: 'assets/img/ration.png',
  quantity: 1,
  price: 2
}, {
  id: '112288',
  name: 'Mysterious Ring',
  description: 'There is probably some left over magic in this ring purchase it to identify',
  img: 'assets/img/ring.png',
  quantity: 1,
  price: 500
}, {
  id: '112299',
  name: 'Rope',
  description: 'No adventurer is complete without a bundle of sturdy rope',
  img: 'assets/img/rope.png',
  quantity: 4,
  price: 20
}, {
  id: '1',
  name: 'Bag of Holding',
  description: 'Where are you going to keep all of your things without a bag such as this',
  img: 'assets/img/bag.png',
  quantity: 0,
  price: 50000
}, {
  id: '11g23234233',
  name: 'Boots of Lava Walking',
  description: 'These boots were made for hot stuff, good luck',
  img: 'assets/img/boots.png',
  quantity: 3,
  price: 9999
}]


let cart = []


function drawItem(item) {
  let goodsElem = document.getElementById('goods')

  goodsElem.innerHTML += `
  <div class="good ${item.quantity === 0 ? 'out-of-stock': ''}  ">
    <img src="${item.img}" alt="">
    <h4>${item.name}</h4>
    <p>${item.description}</p>
    <p>${item.price} GP </p>
    <p>Quantity: ${item.quantity}</p>
    <button onclick="clickTest('${item.id}')">Add to Satchel</button>
  </div>
  `
}

for (let i = 0; i < goods.length; i++) {
  drawItem(goods[i])
}


function clickTest(goodId) {
  console.log('did it click?', goodId)
  let good = goods.find(g => g.id === goodId)
  console.log('you clikced on ', good)

// TODO if already in the list dont do itdo soemtihg else
  cart.push(good)


  drawCart()
}



function drawCart() {
  let cartElem = document.getElementById('cart')
  cartElem.innerHTML = ''

  cart.forEach(item => {
    cartElem.innerHTML += `
    <div class="cart-item rounded bg-parchment my-2 shadow">
      <div class="card-body d-flex align-items-center justify-content-around">
        <img src="${item.img}" alt="" height="125" class="me-3">
        <div>
          <h4 class="card-title">${item.name} - ${item.price}gp</h4>
          <div class="d-flex justify-content-between"><small>Quantity</small><span>1</span></div>
        </div>
      </div>
    </div>
    `
  })
  calculateCartTotal()


}

function calculateCartTotal(){
  let total = 0
  cart.forEach(good => total += good.price)

  document.getElementById('total').innerText = total + ' GP'

}

function clearCart(){
  cart = []
  drawCart()
}


/******************** add class card-pick ********************/
$(".card-pick").on("click", function(){
	let cardList = $(".card-pick")
	for (let index = 0; index < cardList.length; index++) {
		$(cardList[index]).removeClass("clicked");
	}
	$(this).addClass("clicked");
});
/********************* add class card-optional ******************/
$('.card-optional').find('input:checkbox').change(function(){
	let cardOptional = $(this).parents().eq(2);
	let cardList = $(".card-optional");
	for (let j = 0; j < cardList.length; j++) {
		$(cardList[j]).removeClass("clicked");
	}
	let inputList = $('.card-optional').find('input:checkbox');
	for (let index = 0; index < inputList.length ; index++) {
		if(inputList[index] != this)
			$(inputList[index]).prop("checked", false);
	}
    if($(this).is(":checked")) {
		$(cardOptional).addClass("clicked");
    }
	else {
		$(cardOptional).removeClass("clicked");
	}
})

/********************* add class card-van ******************/
$('.card-van').find('input:checkbox').change(function(){

	let cardVan = $(this).parents().eq(2);
	let cardList = $(".card-van");
	for (let j = 0; j < cardList.length; j++) {
		$(cardList[j]).removeClass("clicked");
	}
	let inputList = $('.card-van').find('input:checkbox');
	for (let index = 0; index < inputList.length ; index++) {
		if(inputList[index] != this)
			$(inputList[index]).prop("checked", false);
	}
    if($(this).is(":checked")) {
		$(cardVan).addClass("clicked");
    }
	else {
		$(cardVan).removeClass("clicked");
	}
});

/*****************************  Quantity handle ***************************/
function quantityAdd() {
	var quantity = parseInt($('#quantity1').val());
	$('#quantity1').val(quantity + 1);
	if (quantity > 0 && $('.quantity-minus').hasClass("disabled")) {
		$('.quantity-minus').removeClass("disabled");
		$('.btn-disabled').css('background', "#0f0a4d");
	}

}

function quantityMinus() {
	var quantity = parseInt($('#quantity1').val());
	if (quantity > 1)
		$('#quantity1').val(quantity - 1);
	if (quantity == 2 && !$('.quantity-minus').hasClass("disabled")) {
		$('.quantity-minus').addClass("disabled");
		$('.btn-disabled').css('background', "#575482");
	}
}
function quantityAdd2() {
	var quantity = parseInt($('#quantity2').val());
	$('#quantity2').val(quantity + 1);
	if (quantity > 0 && $('.quantity-minus').hasClass("disabled")) {
		$('.quantity-minus').removeClass("disabled");
		$('.btn-disabled2').css('background', "#0f0a4d");
	}
}

function quantityMinus2() {
	var quantity = parseInt($('#quantity2').val());
	if (quantity > 1)
		$('#quantity2').val(quantity - 1);
	if (quantity == 2 && !$('.quantity-minus').hasClass("disabled")) {
		$('.quantity-minus').addClass("disabled");
		$('.btn-disabled2').css('background', "#575482");
	}
}

// ADD ITEM

var cardShipment =` <div class="card-shipment">
	<div class="ship-header">
      	<div class="pack-suit">
			<img src="./assets/img/icons/Package.svg" alt="package" />
			<h5>Package or Suitcase</h5>
       </div>
      <img src="./assets/img/icons/trash.svg" alt="trash" />
    </div>
	<div class="ship-content">
		<div class="quantity">
			<button type="button" class="quantity-minus disabled" onclick="quantityMinus()">
				<div class="btn-disabled qt">
					<img src="./assets/img/icons/minus.svg" alt="minus" />
				</div>
			</button>
			<div class="qt-input">
				<label class="label1"  for="quantity1"> Quantity </label>
				<input type="text" id="quantity1" class="form-control" value="1" min="1" />
			</div>
			<button type="button" onclick="quantityAdd()" >
				<div class="btn-active qt">
					<img src="./assets/img/icons/add.svg" alt="add" />
				</div>
			</button>
		</div>

		<div class="type-of-items">
			<label class="label1"  > Type of items </label>
			<input type="text" class="form-control"  placeholder="Package or suitcase" />
		</div>

		<div class="weight-ship">
			<label class="label1" > Weight </label>
			<input type="text" class="form-control"  placeholder="Up to 2Kg" />
		</div>

		<div class="length-ship">
			<label class="label1" > Length </label>
			<input type="text" class="form-control"  placeholder="cm" />
		</div>

		<div class="width-ship">
			<label class="label1"  > Width </label>
			<input type="text" class="form-control" placeholder="cm" />
		</div>

		<div class="height-ship">
			<label class="label1" > Height </label>
			<input type="text" class="form-control"  placeholder="cm" />
		</div>

		<img src="./assets/img/icons/copy.svg" alt="copy" class="copy" />

		<div class="content-ship">
			<label class="label1"  > Content </label>
			<input type="text" class="form-control"  placeholder="/" />
		</div>

		<div class="value-ship">
			<label class="label1"> Value </label>
			<input type="text" class="form-control"  placeholder="£" />
		</div>
	</div>
</div>`



$(".add-item").click(function(){
    $(".cards-shipments").append(cardShipment);
});

$('#textSearch').on('keyup', function(e){
      let string = e.target.value.toLowerCase();
      let query = string.charAt(0).toUpperCase() + string.slice(1);

      if (query === "") {
        render_data({prop: query});
      } else {
        //filter data
        let searchResults = [];
        for (var i = 0; i < newShoeData.length; i++) {
          if (newShoeData[i].brand.includes(query)) {
            //display filtered data
            searchResults.push(newShoeData[i]);
          }
        }
        list.innerHTML = shoeTemplate({shoes: searchResults});
    }
});

  $('.searchOptions').on('click', function(e) {
      let brand = this.children.brand.value;
      let size = this.children.size.value;
      //search logic
      if (brand !== 'all' && size == 'all') {
        search_brand(brand, url, list, shoeTemplate);
      } else if (size !== 'all' && brand == 'all'){
        search_size(size, url, list, shoeTemplate);
      } else if (brand !== 'all' && size !== 'all') {
        search_brand_size(url, brand, size, list, shoeTemplate);
      } else{
        render_data({prop: ""});
      };
  });

  $('.updateForm').on('change', function(e) {
      let query = e.target;
    if(query.name === 'search_id') {
      let search_id = Number(query.value);
      let search_data = [];

      function search(data) {
        return data.id == search_id;
      }

      let result = newShoeData.find(search);
      search_data.push(result);
        if (search_data[0] === undefined) {
          log('shoe not found');
        } else {
          populate_form(search_data, 0);
        }
    } else if (query.name === 'in_stock') {
      let get_element = e.target.parentElement.parentElement.parentElement.children[0];
          updated_id = Number(get_element.children[1].children[0].children[1].value);
          new_stock = Number(e.target.value);
    }
  });

  $('#updateModal').on('click', function(e) {
      let pos = e.target.name;
      if (pos === 'next') {
        let count = Number(localStorage.count);
        if (count === newShoeData.length - 1) {
          count = newShoeData.length - 1;
        } else {
          count += 1;
        }
        populate_form(newShoeData, count);
        localStorage.setItem('count', count);
      } else if (pos === 'prev') {
        let count = Number(localStorage.count);
        if (count <= 0) {
          count = 0;
        } else {
          count -= 1;
        }
        populate_form(newShoeData, count);
        localStorage.setItem('count', count);
      } else if (pos === 'update_stock') {
        log(new_stock + " - " + updated_id);
        update_stock(url, new_stock, updated_id);
         render_data({prop: 'show all'});
      }
  });

  $('.add_form').on('change', function(e){
      let result  = add_shoe_validations(e);
      let shoe_img = $('#image_url').val();
      let shoe_id = $('#id').val();
      let brand_name = $('#brand').val();
      let shoe_color = $('#color').val();
      let shoe_size = $('#size').val();
      let shoe_price = $('#price').val();
      let shoe_stock = $('#in_stock').val();

        shoe_obj = {
          id : parseInt(shoe_id),
          image: shoe_img,
          brand: brand_name,
          color: shoe_color,
          size: parseInt(shoe_size),
          price: parseFloat(shoe_price),
          in_stock: parseInt(shoe_stock)
        }
  });

  $('#add_stock').on('click', function(){
      let result = add_shoe(shoe_obj);
      render_data({prop: 'show all'});

      let shoe_url = $("#image_url").val("");
      let shoe_id = $('#id').val("");
      let brand_name = $('#brand').val("");
      let shoe_color = $('#color').val("");
      let shoe_size = $('#size').val("");
      let shoe_price = $('#price').val("");
      let shoe_stock = $('#in_stock').val("");
  });

var shoe_found = {};
$("#shoeList").on('click', function(e) {
      //let shoe = {};
      if (e.target.id === 'purchase') {
        let form = e.target.parentElement.children;
        let unique_id = Number(form[2].value);
        let shoe = newShoeData.find(function(data){
            if (data.id === unique_id){
              return data;
            }
        });
        shoe_found = shoe;
        log(shoe);
        populate_purchase_form(shoe, 0);
      };
});

$(".purchaseForm").on('click', function(e){
  //  let buy_btn = this.children[0].children[0].lastElementChild[1];
    let pos = e.target.name;
    let qty = 1;
    let form;
    let price = 0;

    if (pos === 'no_stock'){
      form = e.target.parentElement.parentElement.children[0];
      price = form.children[4].children[1].value;
      e.target.addEventListener('change', function(e){
        qty = Number(this.value);
        if (!qty) {
          log('Enter a number value and must be bigget than 0');
        } else {
          let total = calculate_total(price, qty);
           populate_purchase_form(shoe_found, total, qty);
        }
      });
  }

  if (pos === 'process_purchase') {
    form = e.target.parentElement.parentElement.children[1];
    get_qty = form.children[0].children[1].children[1].value;

    qty = Number(get_qty);
    let shoe_id = Number(shoe_found.id);
    update_qty_stock(url, qty, shoe_id);
  }
});

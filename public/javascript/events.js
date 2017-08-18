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

  var img = document.getElementById("image_file");
  $('.add_form').on('change', function(e){
      let result  = add_shoe_validations(e);
      let shoe_img = $('#image_url').val() || $('#image_file').val();
      let shoe_id = $('#id').val();
      let brand_name = $('#brand').val();
      let shoe_color = $('#color').val();
      let shoe_size = $('#size').val();
      let shoe_price = $('#price').val();
      let shoe_stock = $('#in_stock').val();

 // var fReader = new FileReader();
 // log(img.files[0])
 // fReader.readAsDataURL(img.files[0]);
 // fReader.onloadend = function(event) {
 //   var image = event.target.result;
 // }
// log(image)
        shoe_obj = {
          image: shoe_img,
          id : parseInt(shoe_id),
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

      let shoe_id = $('#id').val("");
      let brand_name = $('#brand').val("");
      let shoe_color = $('#color').val("");
      let shoe_size = $('#size').val("");
      let shoe_price = $('#price').val("");
      let shoe_stock = $('#in_stock').val("");
  });

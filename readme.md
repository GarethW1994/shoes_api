# SHOES CATALOGUE API
### Usage

* This is a Shoe Catalogue that lists various types of shoes.
    * You can filter through the list of shoes by using the dropdown boxes. You can filter by size and by Brand Name:
    * You can use the search box in the menu to also search for particular shoes by Brand Name.
    * You can add a new shoe by clicking on the add shoe in the menu bar.
    * You can update the stock of a particular shoe.
    * You can purchase a shoe.
---
### Adding A New Shoe:
- Upon clicking on the Adding Shoe Button. A form should pop up where you need to fill in the following:

1. Image Adress - ***Note:*** This can be obtained by copying any image address on the internet and pasting it in the textbox.
2. Shoe ID - ***Note:*** This value has to a number value.
3. Brand Name.
4. Shoe Color.
5. Shoe Size - This value can be selected from the drowndown box given with the list of different shoe sizes.
6. Shoe Price - ***Note:*** This value has to be a number or decimal number seperated with a period (.) instead of a comma (,).
7. Shoe Stock - ***Note:*** This value has to be a non-decimal number.
---
### Updating The Stock:
1. Upon clicking on the Updating Stock Button. A form should pop up where you need to fill in the following:

  - Number of Stock.

2. You can navigate to the particular shoe that you want by clicking on the next or previous buttons.
  - Alternatively you can also search for a particular shoe by ID.
---
### Purchasing A Shoe:
1. When viewing the shoes you should see a Purchase button at the bottom of each shoe card. Upon clicking on the purchase button a form should pop up where you need to fill in the following:
  - Number Of Quantity.
---
# Routes: Developers
- On the Front-end JQuery and Ajax is being used to make calls to the API.

### GET ROUTES
- To see all the shoes in the database the call will look like this:
```
/api/shoes
```
- To see all the shoes for a particular brand:
```
/api/shoes/brand/:brandname
```
- To see all the shoes for a particular size:
```
/api/shoes/size/:size

```
---
### POST ROUTES
- To update the stock of a particular shoe:
```
/api/shoes/update/:id
```
- To purchase a particular shoe:
```
/api/shoes/sold/:id
```
- To see all the shoes for a given brand and size:
```
/api/shoes/brand/:brandname/size/:size
```
---
#### Live Demo
* A demo of this app can be found on heroku at: <a href="https://shoes-catalogue-api.herokuapp.com/">Shoe Catalogue API</a>

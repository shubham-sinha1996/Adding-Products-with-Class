// Write your code here...
import Book from './Book';
import Phone from './Phone';
import RenderProduct from './RenderProduct';

const products = document.querySelector('.products');
const nameInp = document.querySelector('input[name=name]');
const costInp = document.querySelector('input[name=cost]');
const acceptingOrdersInp = document.querySelector('select[name=acceptingOrders]');
const quantityInp = document.querySelector('input[name=quantity]');
const descriptionInp = document.querySelector('textarea[name=description]');
const addBtn = document.querySelector('#addBtn');
const bookFormBtn = document.querySelector('#book-form-btn');
const phoneFormBtn = document.querySelector('#phone-form-btn');
const bookFields = document.querySelector('#book-fields');
const phoneFields = document.querySelector('#phone-fields');
const formTitle = document.querySelector('#form-title');
// Book fields
const author = document.querySelector('input[name=author]');
const isbn = document.querySelector('input[name=isbn]');
const genre = document.querySelector('select[name=genre]');
// Phone fields
const os = document.querySelector('select[name=os]');
const ram = document.querySelector('input[name=ram]');
const storage = document.querySelector('input[name=storage]');
const color = document.querySelector('input[name=color]');

let productType = 'book';

bookFormBtn.addEventListener('click', () => {
  bookFields.style.display = 'block';
  phoneFields.style.display = 'none';
  productType = 'book';
  formTitle.innerText = 'Add a Book';
});

phoneFormBtn.addEventListener('click', () => {
  bookFields.style.display = 'none';
  phoneFields.style.display = 'block';
  productType = 'phone';
  formTitle.innerText = 'Add a Phone';
});

const getFormContents = () => {
  const productFieldsValidation = nameInp.value !== '' && costInp.value > 0 && quantityInp.value > 0 && descriptionInp.value !== '';
  const extraFieldsValidation =
    productType === 'book' ? author.value !== '' && isbn.value !== '' : ram.value !== '' && storage.value !== '' && color.value !== '';
  const extraFieldsVal = productType === 'book' ? [author.value, isbn.value, genre.value] : [os.value, ram.value, storage.value, color.value];
  if (productFieldsValidation && extraFieldsValidation) {
    return [nameInp.value, costInp.value, acceptingOrdersInp.value, quantityInp.value, descriptionInp.value, ...extraFieldsVal];
  } else {
    return false;
  }
};

const clearForm = () => {
  nameInp.value = descriptionInp.value = '';
  acceptingOrdersInp.value = 'Yes';
  costInp.value = quantityInp.value = 0;
  productType === 'book' ? ((author.value = ''), (isbn.value = '')) : (ram.value = ''), (storage.value = ''), (color.value = '');
};

addBtn.addEventListener('click', function () {
  const getProduct = getFormContents();
  if (getProduct) {
    const newProduct = productType === 'book' ? new Book(...getProduct) : new Phone(...getProduct);
    products.append(RenderProduct(newProduct));
  }

  clearForm();
});

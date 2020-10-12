const initialCards =[
  {
   name: 'Москва',
   link: './images/moscow.jpg'
  },
  {
    name: 'Дубаи',
    link: './images/dubai.jpg'
  },
  {
    name: 'Лондон',
    link: './images/london.jpg'
  },
  {
    name: 'Нью-Йорк',
    link: './images/new-york.jpg'
  },
  {
    name: 'Сингапур',
    link: './images/singapore.jpg'
  },
  {
    name: 'Токио',
    link: './images/tokio.jpg'
  }
];
const elements=document.querySelector('.elements');

const templateElement=document.querySelector('.template__element');

let editBtn=document.querySelector('.profile__edit-btn');
let popup=document.querySelector('.popup-edit');
let popupCloseBtn=document.querySelector('.popup-edit__btn-close');
let popupFormEdit=document.querySelector('.popup-edit__form');

let name=document.querySelector('.profile__name');
let job=document.querySelector('.profile__job');
let nameInput=document.querySelector('.popup-edit__filed_name');
let jobInput=document.querySelector('.popup-edit__field_job');

// рисуем 6 из массива
const renderElements=()=>{
  const items=initialCards.map(element=>getElements(element));
  elements.append(...items);
}

// генерим 1 для того, чтобы его поставить куда нить.
const getElements=(data)=>{
  const element=templateElement.content.cloneNode(true);
  element.querySelector('.element__img').setAttribute('alt', data.name);
  element.querySelector('.element__img').setAttribute('src', data.link);
  element.querySelector('.element__title').innerText=data.name;
  return element;
}






let onClickEditBtn=()=> {
  nameInput.value=name.innerText;
  jobInput.value=job.innerText;
  popup.classList.add('popup-edit_is-open');
}

let onClickCloseBtn=()=> {
  popup.classList.remove('popup-edit_is-open');
}

let onClickPopupBackground=(event)=> {
  if(event.target===event.currentTarget) {
    popup.classList.remove('popup-edit_is-open');
  }
}

let popupFormSubmit=(event)=> {
  event.preventDefault();
  name.innerText=nameInput.value;
  job.innerText=jobInput.value;
  onClickCloseBtn();
}


editBtn.addEventListener('click', onClickEditBtn);
popupCloseBtn.addEventListener('click', onClickCloseBtn);
popupFormEdit.addEventListener('submit', popupFormSubmit);
popup.addEventListener('click', onClickPopupBackground);


renderElements();


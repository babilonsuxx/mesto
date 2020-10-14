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

const editBtn=document.querySelector('.profile__edit-btn');
const popupEdit=document.querySelector('.popup-edit');
const popupEditCloseBtn=document.querySelector('.popup-edit__btn-close');
const popupEditForm=document.querySelector('.popup-edit__form')
const name=document.querySelector('.profile__name');
const job=document.querySelector('.profile__job');
const nameInput=document.querySelector('.popup-edit__filed_name');
const jobInput=document.querySelector('.popup-edit__field_job');

const addBtn=document.querySelector('.profile__add-btn');
const popupAdd=document.querySelector('.popup-add');
const popupAddCloseBtn=document.querySelector('.popup-add__btn-close');
const popupAddForm=document.querySelector('.popup-add__form');

const popupPicture=document.querySelector('.popup-picture');
const popupPictureCloseBtn=document.querySelector('.popup-picture__btn-close');
const popupPictureImg=document.querySelector('.popup-picture__img');
const popupPictureDescription=document.querySelector('.popup-picture__description');




// рисуем 6 из массива
const renderElements=()=>{
  const items=initialCards.map(element=>getElement(element));
  elements.append(...items);
}

// генерим 1 для того, чтобы его поставить куда нить.
const getElement=(data)=>{
  const element=templateElement.content.cloneNode(true);
  element.querySelector('.element__img').setAttribute('alt', data.name);
  element.querySelector('.element__img').setAttribute('src', data.link);
  element.querySelector('.element__title').innerText=data.name

  element.querySelector('.element__like-btn').addEventListener('click',(event)=>{
    event.target.classList.toggle('element__like-btn_liked');
  })

  element.querySelector('.element__delete-btn').addEventListener('click',(event)=>{
    event.target.closest('.element').remove();
  })

  element.querySelector('.element__img').addEventListener('click', (event)=>{
    popupPictureImg.setAttribute('src',event.target.getAttribute('src'))
    popupPictureDescription.innerHTML=event.target.getAttribute('alt');
    openPopup(popupPicture);
  })
  return element;
}


//открываем и закрываем любой попап
const openPopup=(popup)=> {
  popup.classList.add('popup_is-open');
}

const closePopup=(popup)=> {
  popup.classList.remove('popup_is-open');
}

const onClickPopupBackground=(event)=> {
  if(event.target===event.currentTarget) {
    console.log(event.target);
    event.target.classList.remove('popup_is-open');
  }
}

//редактируем
const onClickEditBtn=()=> {
  nameInput.value=name.innerText;
  jobInput.value=job.innerText;
  openPopup(popupEdit);
}

const popupFormSubmit=(event)=> {
  event.preventDefault();
  name.innerText=nameInput.value;
  job.innerText=jobInput.value;
  closePopup(popupEdit);
}

//добавляем
const popupAddSubmit=(event)=>{
  event.preventDefault();
  const data={
    name: document.querySelector('.popup-add__filed_name').value,
    link: document.querySelector('.popup-add__field_link').value
  }
  document.querySelector('.popup-add__filed_name').value='';
  document.querySelector('.popup-add__field_link').value='';
  const item=getElement(data);
  elements.prepend(item);
  closePopup(popupAdd);
}


//----------СЛУШАТЕЛИ

//редактируем
editBtn.addEventListener('click', onClickEditBtn);
popupEditCloseBtn.addEventListener('click', closePopup.bind(this, popupEdit));
popupEditForm.addEventListener('submit', popupFormSubmit);
popupEdit.addEventListener('click', onClickPopupBackground);

//добавляем
addBtn.addEventListener('click', openPopup.bind(this, popupAdd));
popupAddCloseBtn.addEventListener('click', closePopup.bind(this, popupAdd));
popupAddForm.addEventListener('submit', popupAddSubmit);
popupAdd.addEventListener('click', onClickPopupBackground);

//показываем полное изображение
popupPicture.addEventListener('click', onClickPopupBackground);
popupPictureCloseBtn.addEventListener('click', closePopup.bind(this, popupPicture));

renderElements();


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

// генерим 1 для того, чтобы его потом поставить.
const getElement=(data)=>{
  const element=templateElement.content.cloneNode(true);

  const img=element.querySelector('.element__img')
  const title =element.querySelector('.element__title');
  const deleteBtn=element.querySelector('.element__delete-btn');
  const likeBtn= element.querySelector('.element__like-btn');

  img.setAttribute('alt', data.name);
  img.setAttribute('src', data.link)
  title.textContent=data.name

  likeBtn.addEventListener('click',(event)=>{
    event.target.classList.toggle('element__like-btn_liked');
  })

  deleteBtn.addEventListener('click',(event)=>{
    event.target.closest('.element').remove();
  })

  img.addEventListener('click', (event)=>{
    popupPictureImg.setAttribute('src',event.target.getAttribute('src'))
    popupPictureDescription.textContent=event.target.getAttribute('alt');
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

const clickPopupBackground=(event)=> {
  if(event.target===event.currentTarget) {
    event.target.classList.remove('popup_is-open');
  }
}

//редактируем
const clickEditBtn=()=> {
  nameInput.value=name.innerText;
  jobInput.value=job.innerText;
  openPopup(popupEdit);
}

const submitPopupForm=(event)=> {
  event.preventDefault();
  name.innerText=nameInput.value;
  job.innerText=jobInput.value;
  closePopup(popupEdit);
}

//добавляем
const submitAddForm=(event)=>{
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
editBtn.addEventListener('click', clickEditBtn);
popupEditCloseBtn.addEventListener('click', closePopup.bind(this, popupEdit));
popupEditForm.addEventListener('submit', submitPopupForm);
popupEdit.addEventListener('click', clickPopupBackground);

//добавляем
addBtn.addEventListener('click', openPopup.bind(this, popupAdd));
popupAddCloseBtn.addEventListener('click', closePopup.bind(this, popupAdd));
popupAddForm.addEventListener('submit', submitAddForm);
popupAdd.addEventListener('click', clickPopupBackground);

//показываем полное изображение
popupPicture.addEventListener('click', clickPopupBackground);
popupPictureCloseBtn.addEventListener('click', closePopup.bind(this, popupPicture));

renderElements();


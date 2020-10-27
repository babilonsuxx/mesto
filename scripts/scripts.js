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
const nameFormEdit=document.querySelector('.popup-edit__filed_name');
const jobFormEdit=document.querySelector('.popup-edit__field_job');

const addBtn=document.querySelector('.profile__add-btn');
const popupAdd=document.querySelector('.popup-add');
const popupAddCloseBtn=document.querySelector('.popup-add__btn-close');
const popupAddForm=document.querySelector('.popup-add__form');
const nameFormAdd=document.querySelector('.popup-add__filed_name');
const linkFormAdd=document.querySelector('.popup-add__field_link');

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
  document.addEventListener('keyup', closePopupOnEsc);
}

const closePopup=(popup)=> {
  popup.classList.remove('popup_is-open');
  document.removeEventListener('keyup', closePopupOnEsc);
}

const clickPopupBackground=(event)=> {
  if(event.target===event.currentTarget) {
    const currentPopup=event.target;
    closePopup(currentPopup);
  }
}

const closePopupOnEsc=(event)=>{
  const currentPopup= document.querySelector('.popup_is-open');
  if (event.key==='Escape') {
    closePopup(currentPopup);
  }
}

//редактируем
const clickEditBtn=()=> {
  nameFormEdit.value=name.innerText;
  jobFormEdit.value=job.innerText;
  openPopup(popupEdit);
}

const submitPopupForm=(event)=> {
  event.preventDefault();
  name.innerText=nameFormEdit.value;
  job.innerText=jobFormEdit.value;
  closePopup(popupEdit);
}

//добавляем
const submitAddForm=(event)=>{
  event.preventDefault();
  const data={
    name: nameFormAdd.value,
    link: linkFormAdd.value
  }
  nameFormAdd.value='';
  linkFormAdd.value='';
  const item=getElement(data);
  elements.prepend(item);
  closePopup(popupAdd);
}


//----------СЛУШАТЕЛИ

//редактируем
editBtn.addEventListener('click', clickEditBtn);
popupEditCloseBtn.addEventListener('click', ()=>closePopup(popupEdit));
popupEditForm.addEventListener('submit', submitPopupForm);
popupEdit.addEventListener('click', clickPopupBackground);

//добавляем
addBtn.addEventListener('click', ()=>openPopup(popupAdd));
popupAddCloseBtn.addEventListener('click', ()=>closePopup(popupAdd));
popupAddForm.addEventListener('submit', submitAddForm);
popupAdd.addEventListener('click', clickPopupBackground);

//показываем полное изображение
popupPicture.addEventListener('click', clickPopupBackground);
popupPictureCloseBtn.addEventListener('click', ()=>closePopup(popupPicture))


renderElements();


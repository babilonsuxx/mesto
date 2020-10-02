
let editBtn=document.querySelector('.profile__edit-btn');
let popup=document.querySelector('.popup');
let popupCloseBtn=document.querySelector('.popup__btn-close');
let popupFormEdit=document.querySelector('.popup__form');

let name=document.querySelector('.profile__name');
let job=document.querySelector('.profile__job');
let nameInput=document.querySelector('.popup__filed_name');
let jobInput=document.querySelector('.popup__field_job');



let onClickEditBtn=()=> {
  nameInput.value=name.innerText;
  jobInput.value=job.innerText;
  popup.classList.add('popup_is-open');
}

let onClickCloseBtn=()=> {
  popup.classList.remove('popup_is-open');
}

let onClickPopupBackground=(event)=> {
  if(event.target===event.currentTarget) {
    popup.classList.remove('popup_is-open');
  }
}

let popupFormSubmit=(event)=> {
  event.preventDefault();
  name.innerText=nameInput.value;
  job.innerText=jobInput.value;
  popup.classList.remove('popup_is-open');
}


editBtn.addEventListener('click', onClickEditBtn);
popupCloseBtn.addEventListener('click', onClickCloseBtn);
popupFormEdit.addEventListener('submit', popupFormSubmit);
popup.addEventListener('click', onClickPopupBackground);





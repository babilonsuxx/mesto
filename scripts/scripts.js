
let editBtn=document.querySelector('.profile__edit-btn');
let popup=document.querySelector('.popup');
let popupCloseBtn=document.querySelector('.popup__btn-close');
let popupFormEdit=document.querySelector('.popup__form');

let name=document.querySelector('.profile__name');
let job=document.querySelector('.profile__job');
let nameInput=document.querySelector('.popup__filed-name');
let jobInput=document.querySelector('.popup__field-job');

let popupToggle=() => {
  popup.classList.toggle('popup_is-open');
}

let onClickEditBtn=()=> {
  nameInput.value=name.innerText;
  jobInput.value=job.innerText;
  popupToggle();
}


let onClickPopupBackground=(event)=> {
  if(event.target===event.currentTarget) {
    popupToggle();
  }
}

let popupFormSubmit=(event)=> {
  event.preventDefault();
  name.innerText=nameInput.value;
  job.innerText=jobInput.value;
  popupToggle();
}


editBtn.addEventListener('click', onClickEditBtn);
popupCloseBtn.addEventListener('click', popupToggle);
popupFormEdit.addEventListener('submit', popupFormSubmit);
popup.addEventListener('click', onClickPopupBackground);





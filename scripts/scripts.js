
let editBtn=document.querySelector('.profile__edit-btn');
let popup=document.querySelector('.popup-edit');
let popupCloseBtn=document.querySelector('.popup-edit__btn-close');
let popupFormEdit=document.querySelector('.popup-edit__form');

let name=document.querySelector('.profile__name');
let job=document.querySelector('.profile__job');
let nameInput=document.querySelector('.popup-edit__filed_name');
let jobInput=document.querySelector('.popup-edit__field_job');



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





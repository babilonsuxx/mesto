class Card {
  constructor(cardData, templateSelector,clickToPopup) {
    this.name=cardData.name;
    this.link=cardData.link;
    this.template=document.querySelector(templateSelector);
    this.clickToPopup=clickToPopup;
  }

  render() {
    const card=this.template.content.cloneNode(true);
    this.img=card.querySelector('.element__img');
    const title = card.querySelector(".element__title");
    const deleteBtn = card.querySelector(".element__delete-btn");
    const likeBtn = card.querySelector(".element__like-btn");

    this.img.setAttribute("alt", this.name);
    this.img.setAttribute("src", this.link);
    title.textContent = this.name;

    this._likeEvent(likeBtn);
    this._deleteEvent(deleteBtn);
    this._clickOnImg(this.img);

    return card;
  }
  _deleteEvent(deleteBtn) {
    deleteBtn.addEventListener("click", (event) => {
      event.target.closest(".element").remove();
    });
  }

  _likeEvent(likeBtn) {
    likeBtn.addEventListener("click", (event) => {
      event.target.classList.toggle("element__like-btn_liked");
    });
  }

  _clickOnImg(img) {
    img.addEventListener("click", this.clickToPopup);
  }
}

export {Card}

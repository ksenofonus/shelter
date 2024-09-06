
import { createModal } from '/assets/js/createModal.js';
import { petCards } from '/assets/js/slider.js';
import { createBack } from '/assets/js/back.js';



export const showModal = () => {
  petCards.forEach((item) => {
    item.addEventListener('click', () => {
      const id = item.getAttribute("data-id");
      createModal(id);
      createBack();
    })
  })
}






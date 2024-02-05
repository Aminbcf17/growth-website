// FAQ part
document.addEventListener('DOMContentLoaded',()=>{
    const faqContainer=document.querySelector('.faq__content');
    faqContainer.addEventListener("click",(e)=>{
        const groupHeader=e.target.closest('.faq__group__header');
        if(!groupHeader) return;
        const group=groupHeader.parentElement;
        const groupBody=group.querySelector('.faq__group__body');
        const icon=groupHeader.querySelector('i');
        // toggle icon
        icon.classList.toggle('fa-plus');
        icon.classList.toggle('fa-minus');
        console.log(groupHeader);
        // toggle visibile of the answer or the body
        //when we click on the header is shows the answer
        groupBody.classList.toggle('open');
         // Close other open FAQ bodies
    const otherGroups = faqContainer.querySelectorAll('.faq__group');

    otherGroups.forEach((otherGroup) => {
      if (otherGroup !== group) {
        const otherGroupBody = otherGroup.querySelector('.faq__group__body');
        const otherIcon = otherGroup.querySelector('.faq__group__header i');

        otherGroupBody.classList.remove('open');
        otherIcon.classList.remove('fa-minus');
        otherIcon.classList.add('fa-plus');
      }
    });
  });
    });
    // mobile menu
document.addEventListener('DOMContentLoaded',()=>{
    const hamburgerButton=document.querySelector('#humburger-button');
    const mobileMenu=document.querySelector('.mobile-menu');
    hamburgerButton.addEventListener('click',()=>{
        mobileMenu.classList.toggle('active');
    })
})
const app = new Vue({
  el: '#app',
  data: {
    mobileMenuIsOpen: false
  },
  methods: {
    toggleMobileMenu() {
      const burger = document.querySelector('.burger');
      const mobileMenu = document.querySelector('.mobile-menu');

      if (this.mobileMenuIsOpen) {
        this.mobileMenuIsOpen = false;
        burger.classList.add('open');
        mobileMenu.classList.add('open');
      } else {
        this.mobileMenuIsOpen = true;
        burger.classList.remove('open');
        mobileMenu.classList.remove('open');
      }
    }
  }
});

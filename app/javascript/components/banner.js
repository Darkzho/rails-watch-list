import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["Classic", "Terror", "Marvel", "Drama"],
    typeSpeed: 80,
    loop: true
  });
}

export { loadDynamicBannerText }

// 애니메이션이다, 처음 '/', './' 꼭 넣어야 됨. 
import anime from "https://cdn.jsdelivr.net/npm/animejs/lib/anime.es.js";

anime({
  targets: '.ui-content-grid',
  translateX: [80, 0],
  duration: 800,
  opacity: [0, 1],
  rotate: [0, 0],
  delay: '300',
  easing: 'easeOutExpo'
}); 
anime({
  targets: '.ui-content-inbox',
  duration: 10,
  opacity: [0, 1],
  rotate: [0, 0],
  delay: anime.stagger(220, {easing: 'easeOutQuad'}),
}); 
anime({
  targets: 'h1',
  translateX: [50, 0],
  opacity: [0, 1],
  delay: '10ms',
  duration: 800,
  easing: 'easeOutExpo'
}); 
anime({
  targets: '.dec',
  translateX: [30, 0],
  opacity: [0, 1],
  delay: '180ms',
  duration: 800,
  easing: 'easeOutExpo'
}); 
anime({
  targets: '.ui-gnb',
  translateY: [-40, 0],
  opacity: [0, 1],
  duration: 500,
  easing: 'easeOutExpo',
  delay: '900ms',
}); 

anime({
  targets: '.hr-a',
  opacity: [0, 1],
  duration: 800,
  easing: 'easeOutExpo',
  delay: '1200ms',
}); 

anime({
  targets: 'h2',
  opacity: [0, 1],
  translateX: [40, 0],
  duration: 800,
  easing: 'easeOutExpo',
  delay: '240ms',
}); 

anime({
  targets: '.bottom-text-0',
  opacity: [0, 1],
  translateY: [40, 0],
  duration: 800,
  easing: 'easeOutExpo',
  delay: '2000ms',
}); 
anime({
  targets: '.ui-gnb-list',
  opacity: [0, 1],
  duration: 500,
  translateY: [28, 0],
  easing: 'easeOutExpo',
  delay: '940ms',
}); 
anime({
  targets: '.inpage-nav',
  opacity: [0, 1],
  duration: 500,
  translateY: [30, 0],
  translateX: [5, 0],
  easing: 'easeOutExpo',
  delay: '800ms',
}); 
anime({
  targets: 'audio',
  opacity: [0, 1],
  duration: 800,
  translateX: [40, 0],
  delay: anime.stagger(250, {easing: 'easeOutExpo'}),
}); 
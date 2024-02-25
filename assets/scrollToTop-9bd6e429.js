const s=()=>{const o=window.scrollY;o>0&&(window.requestAnimationFrame(s),window.scrollTo(0,o-o/8))};export{s};

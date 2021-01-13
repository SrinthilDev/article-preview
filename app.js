let toogle = document.getElementById('toggle-tooltip');
let footer = document.querySelector('.footer');
let viewport = window.innerWidth;


if(viewport < 640) {
  document.addEventListener('click', (e)=> {
     let isClick = toogle.contains(e.target);

    if (isClick) {
      footer.classList.add('is-mobile-share');
    } else {
      footer.classList.remove('is-mobile-share');
    }
  });

} else if(viewport > 640) {
  document.addEventListener('click', (e)=> {
    let isClick = toogle.contains(e.target);

 if (isClick) {
   tooltip.classList.add('is-visible');
   toogle.classList.add('is-active');
 } else {
   tooltip.classList.remove('is-visible');
   toogle.classList.remove('is-active');
 }
 });
  console.log('footer toggle');
 
}


// document.addEventListener('click', function(e) {
//   let isClick = toogle.contains(e.target);

//   if (isClick) {
//     tooltip.classList.add('is-visible');
//     toogle.classList.add('is-active');
//   } else {
//     tooltip.classList.remove('is-visible');
//     toogle.classList.remove('is-active');
//   }
// });



// if viewport width > 640px maka menggunakan function1
// jika viewport width < 640px maka menggunakan function2

// jika viewport width dibawah 640px maka jalankan kondisi SATU
// jika viewport width diatas 640px maka jalankan kondisi DUA
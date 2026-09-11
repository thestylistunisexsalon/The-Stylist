document.addEventListener('DOMContentLoaded',()=>{
  const imageMap={
    'https://www.brijhairartist.com/services/service-book.jpg':'assets/hero-salon.svg',
    'https://imgmediagumlet.lbb.in/media/2024/11/6735af73ce87bc4aebc0d11e_1731571571217.jpg':'assets/service-hair.svg',
    'https://images.rawpixel.com/image_social_square/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI1LTA0L3NyLWltYWdlLTA0MDQyMDI1LXRobTE0LXMtNTk2XzIuanBn.jpg':'assets/service-skin.svg',
    'https://imgmediagumlet.lbb.in/media/2023/07/64b777e1ce8b9a3eb2629f4f_1689745377209.jpg':'assets/service-beauty.svg',
    'https://files.idyllic.app/files/static/2043276?optimizer=image&width=1200':'assets/service-grooming.svg'
  };
  document.querySelectorAll('img').forEach(img=>{if(imageMap[img.src])img.src=imageMap[img.src]});
  document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{const target=document.querySelector(a.getAttribute('href'));if(target){e.preventDefault();target.scrollIntoView({behavior:'smooth',block:'start'})}}));
});
<script>
	import { onMount } from "svelte";

  export let age = 0, location = '', email = '', cv = '';


  let card, glow, bounds = {x: 0, y: 0, width: 0, height: 0};
  onMount(()=>{
    function rotateToMouse({clientX, clientY}) {
      const leftX = clientX - bounds.x;
      const topY = clientY - bounds.y;
      const center = {
        x: leftX - bounds.width / 2,
        y: topY - bounds.height / 2
      }
      const distance = Math.sqrt(center.x**2 + center.y**2);
      
      card.style.transform = `
        scale3d(1.07, 1.07, 1.07)
        rotate3d(
          ${center.y / 100},
          ${-center.x / 100},
          0,
          ${Math.log(distance)* 2}deg
        )
      `;
      
      glow.style.backgroundImage = `
        radial-gradient(
          circle at
          ${center.x * 2 + bounds.width/2}px
          ${center.y * 2 + bounds.height/2}px,
          #ffffff55,
          #0000000f
        )
      `;
    }
  
    card.addEventListener('mouseenter', () => {
      bounds = card.getBoundingClientRect();  
      document.addEventListener('mousemove', rotateToMouse);
    });
    
    card.addEventListener('mouseleave', () => {
      document.removeEventListener('mousemove', rotateToMouse);
      card.style.transform = '';
      card.style.background = '';
    });
  })
</script>
<style>
  .card {
    display: grid;
    width: auto;
    height: 200px;
    background-color: #f0f0f0;
    border: 1px solid #e0e0e0;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    grid-template-columns: 200px 1fr;
    grid-template-rows: auto 1fr auto;
    overflow: hidden;
    position: relative;
    transition-duration: 300ms;
    transition-property: transform, box-shadow;
    transition-timing-function: ease-out;
    transform: rotate3d(0);
    
    &:hover {
      transition-duration: 150ms;
      box-shadow: 0 5px 20px 5px #00000044;
    }
    a {
      position: relative;
      z-index: 2;
    }
  }
  .content {
    padding: 1.5rem;
  }
  .glow {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background-image: radial-gradient(circle at 50% -20%, #ffffff22, #0000000f);
  }
</style>

<div class="card" bind:this={card}>
  <div class="image">
    <picture >
      <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0350d259-6f4c-48dd-a420-c663c2894074/d7aekgi-1f9983a0-cabf-4890-8305-3468f71c66e2.png/v1/fill/w_250,h_250,q_80,strp/nier_gestalt_avatar___emil_by_hgnwolf_d7aekgi-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MjUwIiwicGF0aCI6IlwvZlwvMDM1MGQyNTktNmY0Yy00OGRkLWE0MjAtYzY2M2MyODk0MDc0XC9kN2Fla2dpLTFmOTk4M2EwLWNhYmYtNDg5MC04MzA1LTM0NjhmNzFjNjZlMi5wbmciLCJ3aWR0aCI6Ijw9MjUwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.20UQBKAKrD88V6Ue7C-nPaAIFX-0c6R7Wv-nShpZLac" alt="Flowers" style="width:auto;">
    </picture>
  </div>
  <div class="content">
    <div class="header">Hi there! I'm Alessandro Bonanno</div>
    Age: {age}<br />
    Location: {location}<br />
    Email: <a href={'mailto:' + email} >mail</a><br />
    CV: {cv}<br />
  </div>
  <div class="glow" bind:this={glow} />
</div>
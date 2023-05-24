function generateStars(parent, count, size) {
    for (let i = 0; i < count; i++) {
      const star = document.createElement("div");
      star.style.width = size + "px";
      star.style.height = size + "px";
      star.style.background = "#000000";
      star.style.position = "absolute";
      star.style.borderRadius = "100%";
      star.style.top = Math.random() * window.innerHeight + "px";
      star.style.left = Math.random() * window.innerWidth + "px";
      parent.appendChild(star);
    }
  }
  
  const starsContainer = document.getElementById("stars");
  generateStars(starsContainer, 700, 1);
  
  const starsContainer2 = document.getElementById("stars2");
  generateStars(starsContainer2, 200, 2);
  
  const starsContainer3 = document.getElementById("stars3");
generateStars(starsContainer3, 100, 3);

  
let app = new Vue({
  el: '#app',
  data: { 
      currentIndex: 0,
      figures: [ 
          { 
            key: 1, 
            name: "Jedi", 
            image: "img/jedi.jpg", 
            description: "Guerrier philosophe doté de super-pouvoirs", 
            style: {
              backgroundColor: "lightgrey",
              color: "black"
            }
          }, 
          { key: 2, 
            name: "Wookiee", 
            image: "img/wookiee.jpg", 
            description: "Grand être humanoïde possédant une épaisse fourrure", 
            style: {
              backgroundColor: "#56b0f0",
              color: "white"
            }
          }, 
          { key: 3, 
            name: "Droide", 
            image: "img/droide.jpg", 
            description: "Robot capable d'exécuter des tâches complexes",
            style: {
              backgroundColor: "#fcc75b",
              color: "white"
            }
          }
      ]
  },
  methods: { 

      /* Fonction appelée lorsqu'on survole une zone */
      mouseover(index) {
          
          /* Affichage de l'index dans la console */
          console.log(index)

          /* Mise en évidence de la zone sélectionnée => obsolete => voir CSS
          event.target.style.backgroundColor = 'red'; */

          /* Changement d'index, afin que l'image change */
          this.currentIndex = index;
    }
  }
})

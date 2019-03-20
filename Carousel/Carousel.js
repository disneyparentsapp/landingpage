class Carousel {
    constructor(item) {

        this.item = item;
        this.rightBtn = item.querySelector(".right-button");
        this.leftBtn = item.querySelector(".left-button");

        this.images = Array.from(item.querySelectorAll("img"));

        this.currentIndex = 0;
        this.defaultImage = this.images[this.currentIndex];
        this.defaultImage.style.display = "block";
        
        //Events on Button
        this.rightBtn.addEventListener("click", () => this.showNextImg());
        this.leftBtn.addEventListener("click", () => this.showBeforeImg());

        }
    

        showNextImg() {
            let allImages = document.querySelectorAll(".carousel img");

            allImages.forEach(function (img) {
                img.style.display = "none";
            });

            this.currentIndex += 1;

            if (this.currentIndex > allImages.length - 1) {
                this.currentIndex = 0;
            }

            allImages[this.currentIndex].style.display = "block";
            }
        

        showBeforeImg() {
            let allImages = document.querySelectorAll(".carousel img");

            allImages.forEach(function (img) {
                img.style.display = "none";
            });

            this.currentIndex -=1;

            if (this.currentIndex < 0) {
                this.currentIndex = 5;
            }
            
            allImages[this.currentIndex].style.display = "block";
            }
        }
    
/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

let carousel = new Carousel (document.querySelector(".carousel"));
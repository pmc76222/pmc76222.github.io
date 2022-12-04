


const images = ['ekf4.jpg',
                'ekf8.jpg',
                'ekf11.jpg'                
            ];

const chosenImage = images[Math.floor(Math.random() * images.length)];

document.body.style.backgroundImage = `url(images/${chosenImage})`;


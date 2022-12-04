


const images = ['https://blogfiles.pstatic.net/20130419_287/frenchaffair_1366353419579ONPPi_JPEG/ekf11.jpg'
                ,'https://blogfiles.pstatic.net/20130419_181/frenchaffair_1366353419280iLaVq_JPEG/ekf8.jpg'
                
            ];

const chosenImage = images[Math.floor(Math.random() * images.length)];

document.body.style.backgroundImage = `url(${chosenImage})`;


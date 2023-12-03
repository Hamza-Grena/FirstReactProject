import React, { useState, useEffect } from 'react';

const Home = () => {
  const images = [
    'https://media.istockphoto.com/id/1303316790/photo/gamer-work-space-concept-top-view-a-gaming-gear-mouse-keyboard-joystick-and-headset.jpg?s=612x612&w=0&k=20&c=eBKpKUY-v05r0R2ACrcltTsCVjpG-BqabMSlhCSqMCo=',
    'https://media.istockphoto.com/id/1248388791/photo/ready-for-a-virtual-party-at-home.jpg?s=612x612&w=0&k=20&c=NY7npvTPtNG1rY_jbSscUWuwq7zOnF6SAeWa-CzdLzM=',
    'https://media.istockphoto.com/id/1025665780/photo/gadgets-in-the-desk.jpg?s=612x612&w=0&k=20&c=7cTKlNrNcNYy3Qf9YxpT9TjEAdaKpsixUp_cECDT1b0=',
    'https://media.istockphoto.com/id/1302047440/photo/gamer-work-space-concept-top-view-a-gaming-gear.jpg?s=612x612&w=0&k=20&c=jZyVIoCNlq5gc7TWxacXZsZfcWX9PkihLpdXmOA7gJA=',
    'https://media.istockphoto.com/id/635790376/photo/computer-peripherals-laptop-accessories-composition-on-stone.jpg?s=612x612&w=0&k=20&c=EIu4Pmadacbq6Kk2iSezHUZFiCeLEGP5BhYjajTCSBU=',
    'https://media.istockphoto.com/id/635790310/photo/laptop-with-connected-portable-optical-drive.jpg?s=612x612&w=0&k=20&c=ePn4CNGS0GiRH9-Uge9Hm05LYQd-wKt92UJRxc29ebQ=',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Update the index to display the next image in the array
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); 
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
  
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ flex: '1', paddingRight: '20px' }}>
          <p style={{textIndent:'1.5cm',fontFamily:'verdana',fontWeight:'bold'}}> 
            Découvrez l'univers passionnant de la technologie sur notre site ! Chez nous,<br/>
            vous trouverez une vaste sélection de PC haute performance, d'ordinateurs portables ultramodernes et d'accessoires dernier cri pour répondre à tous vos besoins informatiques. <br/>
            Que vous soyez un joueur passionné à la recherche de la configuration ultime, un professionnel exigeant en quête d'efficacité, ou simplement à la recherche d'accessoires innovants, nous avons tout ce qu'il vous faut. <br/>
            Explorez notre catalogue pour trouver les outils qui propulseront votre expérience informatique vers de nouveaux sommets
          </p>
        </div>
        <div style={{ flex: '1', paddingLeft: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img src={images[currentImageIndex]} alt={`${currentImageIndex + 1}`} style={{ maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 'auto', marginTop:'3cm' }} />
        </div>
      </div>
    </>
  );
};

export default Home;

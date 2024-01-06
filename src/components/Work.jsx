import React from 'react';

import Bisento from '../assets/bisento.png';
import particle from '../assets/particle.gif';
import brokenSword from '../assets/broken-sword.jpg';
import scripting from '../assets/scripting.gif';
import greatSword from '../assets/great-sword.jpg';
import katana from '../assets/katana.png';
import speedtrack from '../assets/speedtrack.png';
import magicsim from '../assets/magicsim.png';
import barrel from '../assets/barrel.png';
import lightsaber from '../assets/lightsaber.jpg';

const Work = () => {
  return (
    <div name='work' className='w-full h-[800x] text-gray-200 bg-[#0a192f]'>
      <div className='max-w-6xl mx-auto p-3'>
        <div className='text-center pb-8'>
          <h1 className='text-4xl font-bold inline-block border-b-4 border-pink-600'>
            Work
          </h1>
          <p className='text-2xl font-bold'>
            Check out some of my creations!
          </p>
        </div>

        <div className='grid grid-cols-2 md:grid-cols-3 gap-3'>
          <ImageCard
            image={barrel}
            onClick={() =>
              window.open('https://media.discordapp.net/attachments/1190096731375927349/1190097617120661665/image.png?ex=65a9ca46&is=65975546&hm=cabfcf2f6a33fe5221f810a0928d6d00a581161da1010e64d9e3cee2ed67b1c4&=&format=webp&quality=lossless&width=576&height=675')
            }
            title='Stylized Barrel'
          />
          <ImageCard
            image={brokenSword}
            onClick={() =>
              window.open('https://gyazo.com/8f083193bdc3b26f3239cf79fbd5e25f')
            }
            title='Broken Sword'
          />
          <ImageCard
            image={greatSword}
            onClick={() =>
              window.open(
                'https://i.gyazo.com/thumb/1200/8db34a39ea3416b8393c5207c734f643-png.jpg'
              )
            }
            title='Great Sword'
          />
          <ImageCard
            image={scripting}
            onClick={() =>
              window.open('https://imgur.com/a/Mi8AIQd')
            }
            title='Star Wars Jedi Fallen Order'
          />
          <ImageCard
            image={Bisento}
            onClick={() =>
              window.open(
                'https://cdn.discordapp.com/attachments/924066432092868611/963423853902696538/unknown.png'
              )
            }
            title="Whitebeard's Bisento"
          />
          <ImageCard
            image={katana}
            onClick={() =>
              window.open('https://gyazo.com/b0c9cd1d6b72cd46d616b6815d1d965a')
            }
            title='Katana'
          />
          <ImageCard
            image={speedtrack}
            onClick={() =>
              window.open('https://www.roblox.com/games/15396372437/Speed-Track-Simulator-RELEASE?AssetId=15396372437')
            }
            title='Speed Track Simulator'
          />

            <ImageCard
                    image={magicsim}
                    onClick={() =>
                    window.open('https://streamable.com/ew6ws3')
                    }
                    title='Magic Simulator'
            />

            <ImageCard
                image={lightsaber}
                onClick={() =>
                window.open('https://cdn.discordapp.com/attachments/1190096731375927349/1190098302998417468/94091058f863efd8738b8c045f8ed6b7-png.webp?ex=65a9caea&is=659755ea&hm=03008a9edae2a57f9cee1995d8ce91d3977e3138cdf40c0044fa7d60043764c5&')
                }
                title='Light Saber'
            />
        </div>
      </div>
    </div>
  );
};

const ImageCard = ({ image, onClick, title }) => {
    return (
      <div
        style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', height: '150px' }}
        className='shadow-lg group container rounded-md flex justify-center items-center content-div hover:scale-90 duration-200 cursor-pointer'
        onClick={onClick}
      >
        <p className='font-bold'>{title}</p>
      </div>
    );
  };

export default Work;

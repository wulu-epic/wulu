import React from "react";

import Bisento from "../assets/bisento.png";
import particle from "../assets/particle.gif";
import brokenSword from "../assets/broken-sword.jpg";
import scripting from "../assets/scripting.gif";
import stylizedSword from "../assets/stylized_sword.jpg";
import katana from "../assets/katana.png";
import speedtrack from "../assets/speedtrack.png";
import magicsim from "../assets/magicsim.png";
import barrel from "../assets/barrel.png";
import lightsaber from "../assets/lightsaber.jpg";
import chest from "../assets/chest.png";
import lightfruit from "../assets/light_fruit.png";
import sylized_tree from "../assets/stylized_tree.png";

const Work = () => {
  return (
    <div name="work" className="w-full h-[800x] text-gray-200 bg-[#0a192f]">
      <div className="max-w-6xl mx-auto p-3">
        <div className="text-center pb-8">
          <h1 className="text-4xl font-bold inline-block border-b-4 border-pink-600">
            Work
          </h1>
          <p className="text-2xl font-bold">Check out some of my creations!</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          <ImageCard
            image={chest}
            onClick={() =>
              window.open(
                "https://media.discordapp.net/attachments/1190096731375927349/1201335844292796456/image.png?ex=65c97231&is=65b6fd31&hm=cd1923677f57c2324a3a99498f868906c96b17337db6037104ef0cfb9143b0e0&=&format=webp&quality=lossless&width=984&height=675"
              )
            }
            title="Stylized Chest"
          />
          <ImageCard
            image={brokenSword}
            onClick={() =>
              window.open("https://gyazo.com/8f083193bdc3b26f3239cf79fbd5e25f")
            }
            title="Broken Sword"
          />
          <ImageCard
            image={stylizedSword}
            onClick={() =>
              window.open(
                "https://cdn.discordapp.com/attachments/1190096731375927349/1202040345551196160/image.png?ex=65cc024f&is=65b98d4f&hm=a4bc782fdf2a62f4c028e08fbf9110fb91c218bf59e53ea8bec84b7bf156b2e7&"
              )
            }
            title="Stylized Sword"
            zoom={22}
            offset={-175}
          />
          <ImageCard
            image={scripting}
            onClick={() => window.open("https://imgur.com/a/Mi8AIQd")}
            title="Star Wars Jedi Fallen Order"
          />
          <ImageCard
            image={Bisento}
            onClick={() =>
              window.open(
                "https://cdn.discordapp.com/attachments/924066432092868611/963423853902696538/unknown.png"
              )
            }
            title="Whitebeard's Bisento"
            offset={-192}
            zoom={14}
          />
          <ImageCard
            image={katana}
            onClick={() =>
              window.open("https://gyazo.com/b0c9cd1d6b72cd46d616b6815d1d965a")
            }
            title="Katana"
          />
          <ImageCard
            image={speedtrack}
            onClick={() =>
              window.open(
                "https://www.roblox.com/games/15396372437/Speed-Track-Simulator-RELEASE?AssetId=15396372437"
              )
            }
            title="Speed Track Simulator"
          />

          <ImageCard
            image={magicsim}
            onClick={() => window.open("https://streamable.com/ew6ws3")}
            title="Magic Simulator"
            offset={-100}
            zoom={100}
          />

          <ImageCard
            image={lightsaber}
            onClick={() =>
              window.open(
                "https://cdn.discordapp.com/attachments/1190096731375927349/1190098302998417468/94091058f863efd8738b8c045f8ed6b7-png.webp?ex=65a9caea&is=659755ea&hm=03008a9edae2a57f9cee1995d8ce91d3977e3138cdf40c0044fa7d60043764c5&"
              )
            }
            title="Light Saber"
            offset={30}
            zoom={100}
          />

          <ImageCard
            image={lightfruit}
            onClick={() =>
              window.open(
                "https://www.roblox.com/games/15986364659/Testing-Place"
              )
            }
            title="Light Fruit"
          />

          <ImageCard
            image={barrel}
            onClick={() =>
              window.open(
                "https://media.discordapp.net/attachments/1190096731375927349/1201336640732413992/image.png?ex=65c972ee&is=65b6fdee&hm=4e5fdf9a402b262ae1cd8654e2e76438201aa60fc3bbb948d55f20054a74dea2&=&format=webp&quality=lossless&width=604&height=675"
              )
            }
            title="Stylized Barrel"
            offset={-75}
            zoom={65}
          />
          <ImageCard
            image={sylized_tree}
            onClick={() =>
              window.open(
                "https://media.discordapp.net/attachments/1190096731375927349/1201336692871807016/image.png?ex=65c972fb&is=65b6fdfb&hm=d6ab904e9b6576d267619aa806be7cc04eb18d97c65b7673db5737e5b43bf5d6&=&format=webp&quality=lossless&width=744&height=675"
              )
            }
            title="Stylized Tree"
            offset={-65}
            zoom={75}
          />
        </div>
      </div>
    </div>
  );
};

const ImageCard = ({ image, onClick, title, offset = 0, zoom = 100 }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: `${zoom}% auto`, 
        backgroundPosition: `center top ${offset}px`, 
        height: "150px",
      }}
      className="shadow-lg group container rounded-md flex justify-center items-center content-div hover:scale-90 duration-200 cursor-pointer"
      onClick={onClick}
    >
      <p className="font-bold">{title}</p>
    </div>
  );
};
export default Work;

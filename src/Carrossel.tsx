/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "./Carrossel.css";
import { useParams } from "react-router-dom";
import charmanderImage from "./assets/charmander.jpg";
import bulbasaurImage from "./assets/bulbasaur.png";
import squirtleImage from "./assets/squirtle.jpg";

interface Pokemon {
  id: number;
  name: string;
  altura: number;
  peso: number;
  evolucoes: string[];
  ataques: string[];
  image: string;
}

interface CarrosselProps {
  data?: Pokemon[];
  selectedPokemonId?: number;
}

const charmander: Pokemon = {
  name: "Charmander",
  id: 3,
  altura: 0.6,
  peso: 8.5,
  evolucoes: ["Charmeleon", "Charizard"],
  ataques: ["Scratch", "Ember", "Dragon Rage"],
  image: charmanderImage,
};

const bulbasaur: Pokemon = {
  name: "Bulbasaur",
  id: 1,
  altura: 0.7,
  peso: 6.9,
  evolucoes: ["Ivysaur", "Venusaur"],
  ataques: ["Tackle", "Vine Whip", "Solar Beam"],
  image: bulbasaurImage,
};

const squirtle: Pokemon = {
  name: "Squirtle",
  id: 2,
  altura: 0.5,
  peso: 9.0,
  evolucoes: ["Wartortle", "Blastoise"],
  ataques: ["Tackle", "Water Gun", "Hydro Pump"],
  image: squirtleImage,
};

const Carossel: FC<CarrosselProps> = () => {
  const { id: selectedPokemonId } = useParams<{ id: string }>();

  const pokemons: Pokemon[] = [bulbasaur, squirtle, charmander];

  console.log(selectedPokemonId);

  return (
    <Swiper
      effect="coverflow"
      centeredSlides
      slidesPerView="auto"
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      initialSlide={Number(selectedPokemonId) - 1}
      pagination={{ clickable: true }}
      modules={[EffectCoverflow, Pagination]}
      className="mySwiper"
    >
      {pokemons?.map((pokemon) => (
        <SwiperSlide key={pokemon.id}>
          <div className="pokemon-details">
            <div className="image-container">
              <img src={pokemon.image} alt={pokemon.name} className="imagemCarrossel" />
              <div className="text-overlay">
                <h2>{pokemon.name}</h2>
                <p>Altura: {pokemon.altura} m</p>
                <p>Peso: {pokemon.peso} kg</p>
                <p>Evoluções: {pokemon.evolucoes.join(", ")}</p>
                <p>Ataques: {pokemon.ataques.join(", ")}</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carossel;

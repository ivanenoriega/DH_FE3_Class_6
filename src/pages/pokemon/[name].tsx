import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { GetStaticPropsContext } from 'next'
import { getPokemonByName } from '@/helpers/api/pokemon'
import { isString } from 'util'
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })

export default function Home({ pokemon }: { pokemon: Pokemon }) {
  const getRandomPokemon = async () => {
    const randomIndex = Math.floor(Math.random() * 1000)
    const response = await fetch(`/api/pokemon/${randomIndex}`)
    const pokemon = await response.json()
    console.log(pokemon)
  }
  return (
    <>
      <Head>
        <title>Clase 6: API Routes</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <h1>Pokemon: {pokemon.name} ({pokemon.id})</h1>
        <button onClick={getRandomPokemon}>Get a random Pokemon</button>
        <Image src={pokemon.image} alt={pokemon.name} width={200} height={200} />
      </main>
    </>
  )
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const { params } = context
  const name = params?.name
  const pokemonName = isString(name) ? name : ''
  const pokemon = await getPokemonByName(pokemonName)

  return {
    props: {
      pokemon
    }
  }
}

export async function getStaticPaths() {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
  const { results } = await response.json()

  const paths = results.map((result: any) => {
    const { name } = result
    return {
      params: {
        name
      }
    }
  })

  return {
    paths,
    fallback: 'blocking'
  }
}

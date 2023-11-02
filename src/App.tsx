import { useState, useEffect } from 'react'
import LogoFafa from './assets/logoFafa.png'
import { stripe } from './lib/stripe'
import Stripe from 'stripe'
import { useKeenSlider } from 'keen-slider/react'
type GalleyProps = {
  id: string
  name: string
  imageUrl: string
  price: string
}
export function App() {
  const [data, setData] = useState<GalleyProps[]>([])
  useEffect(() => {
    const fetchBolsas = async () => {
      const response = await stripe.products.list({
        expand: ['data.default_price'],
      })
      const products = response.data.map((product) => {
        const price = product.default_price as Stripe.Price
        return {
          id: product.id,
          name: product.name,
          imageUrl: product.images[0],
          price: new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(price.unit_amount! / 100),
        }
      })
      setData(products)
    }
    fetchBolsas()
  }, [])
  const [sliderRef] = useKeenSlider({
    initial: 0,
    loop: true,
    breakpoints: {
      '(max-width:640px)': {
        slides: {
          perView: 1,
        },
      },
    },
    slides: {
      perView: 3,
    },
  })
  return (
    <div className="flex flex-col items-start justify-center  min-h-screen ">
      <header className="py-8 w-full max-w-[1180px] center">
        <img
          src={LogoFafa}
          alt="desenho de botões, agulha de croche e um texto fafa croche"
          className="w-48 h-48"
        />
      </header>
      <main
        className="flex max-w-template  overflow-hidden w-full ml-auto keen-slider"
        ref={sliderRef}
      >
        {data.map((product) => (
          <div
            key={product.id}
            className="rounded-lg p-1 cursor-pointer relative flex items-center justify-center
          overflow-hidden group keen-slider__slide"
          >
            <img
              src={product.imageUrl}
              className=" w-[350px] h-[350px]"
              alt="bolsa"
            />
            <footer
              className="
            sm:translate-y-8
            sm:opacity-0 
            sm:group-hover:translate-y-0 
            sm:group-hover:opacity-100
            sm:transition duration-500 ease-in-out
            absolute p-8 bottom-1 left-1 right-1
            rounded-lg flex items-center justify-between bg-black/30
            "
            >
              <strong className="text-2xl text-zinc-300">{product.name}</strong>
              <span className="font-sans text-lg font-bold text-green-500">
                {product.price}
              </span>
            </footer>
          </div>
        ))}
      </main>
    </div>
  )
}

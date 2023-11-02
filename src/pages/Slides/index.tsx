/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import '../../style.css'
import { stripe } from '../../lib/stripe'
import Stripe from 'stripe'

type GalleyProps = {
  id: string,
  name: string
  imageUrl: string
  price: string
}
export function Slides() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
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
          }).format(price?.unit_amount / 100),
        }
      })
      setData(products)
    }
    fetchBolsas()
  }, [])
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slides: {
      perView: 3
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  })
  function Arrow(props: {
    disabled: boolean
    left?: boolean
    onClick: (e: any) => void
  }) {
    const disabeld = props.disabled ? ' arrow--disabled' : ''
    return (
      <>
        <svg onClick={props.onClick}
          className={`arrow ${props.left ? 'arrow--left' : 'arrow--right'
            } ${disabeld}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          {props.left && (
            <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
          )}
          {!props.left && (
            <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
          )}
        </svg>
      </>
    )
  }

  return (

    <div ref={sliderRef} className="keen-slider rounded-lg p-1 cursor-pointer relative flex items-center justify-center overflow-hidden group">
      {
        data.map(slide => (
          <div key={slide.id} className="keen-slider__slide ">
            <div className='flex flex-col w-full px-3 gap-4  justify-between sm:w-1/2'>
              <div className='flex w-full h-2/3 justify-center items-center'>
                <img className="object-cover sm:h-72 sm:w-72" src={slide.imageUrl} alt="bolsa fafa" />
              </div>

            </div>
          </div>
        ))}
    </div>

  )
}

/*  {loaded && instanceRef.current && (
        <>
          <Arrow
            left
            onClick={(e: any) =>
              e.stopPropagation() || instanceRef.current?.prev()
            }
            disabled={currentSlide === 0}
          />

          <Arrow
            onClick={(e: any) =>
              e.stopPropagation() || instanceRef.current?.next()
            }
            disabled={
              currentSlide >= 1
            }
          />
        </>
      )} */

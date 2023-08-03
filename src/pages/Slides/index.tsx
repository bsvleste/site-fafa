/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import '../../style.css'
import img1 from '../../assets/img1.png'
import img2 from '../../assets/img2.png'
import img3 from '../../assets/img3.png'
type GalleyProps = {
  id: number,
  src: string
}
const imagens = [
  { id: 1, src: img1 },
  { id: 2, src: img2 },
  { id: 3, src: img3 }
]
export function Slides() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [imagem, setImagem] = useState({ id: 1, src: img1 });
  const [imagemCard, setImagemCard] = useState<GalleyProps[]>([])
  const slides = [1, 2, 3]
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  })
  function trocaImagem(id: number, src: string) {
    setImagem({ id, src })
    const cardImagend = imagens.filter(img => img.id !== imagem.id)
    setImagemCard(cardImagend)
  }
  function Arrow(props: {
    disabled: boolean
    left?: boolean
    onClick: (e: any) => void
  }) {
    const disabeld = props.disabled ? ' arrow--disabled' : ''
    return (
      <svg
        onClick={props.onClick}
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
    )
  }
  useEffect(() => {
    const cardImagend = imagens.filter(img => img.id !== imagem.id)
    setImagemCard(cardImagend)

  }, [imagem.id])
  return (
    <div className="bg-gray-200 mb-4 rounded-lg">
      <div className="navigation-wrapper">
        <div ref={sliderRef} className="keen-slider rounded-lg">
          {
            slides.map(slide => (
              <div key={slide} className="keen-slider__slide number-slide1">
                <div className='flex flex-col w-full px-3 gap-4  justify-between sm:w-1/2'>
                  <div className='flex w-full h-2/3 justify-center items-center'>
                    <img className="object-cover sm:h-72 sm:w-72" src={imagem.src} alt="bolsa fafa" />
                  </div>
                  <div className='flex justify-between w-full gap-2 '>
                    {imagemCard.map(img => (
                      <div className='w-2/4 sm:h-40' key={img.id}>
                        <div className='flex justify-center items-center' onClick={() => trocaImagem(img.id, img.src)}>
                          <img className="object-cover sm:h-52 sm:w-52" src={img.src} alt="bolsa fafa" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
        </div>
        {loaded && instanceRef.current && (
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
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </>
        )}
      </div>
    </div>
  )
}


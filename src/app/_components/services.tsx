"use client"

import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight, Scissors, Syringe, CarTaxiFront, Hotel, Clock } from "lucide-react"
import { WhatsappLogoIcon} from "@phosphor-icons/react/dist/ssr"

const services = [
  {
    title: "Banho e Tosa",
    description: "Higiene completa com profissionais especializados para deixar seu pet limpo e cheiroso.",
    duration: "45 minutos",
    price: "€25",
    icon: <Scissors/>,
    linkText: "Ver opções de banho"
  },
  {
    title: "Consulta Veterinária",
    description: "Avaliação clínica com veterinários experientes para garantir a saúde do seu pet.",
    duration: "30 minutos",
    price: "€40",
    icon: <Syringe/>,
    linkText: "Agendar consulta"
  },
  {
    title: "Táxi Pet",
    description: "Mobilidade prática com motoristas treinados e veículos adaptados para pets.",
    duration: "Variável",
    price: "€20+",
    icon: <CarTaxiFront/>,
    linkText: "Chamar táxi pet"
  },
  {
    title: "Hospedagem Pet",
    description: "Ambiente acolhedor e supervisionado para seu pet enquanto você viaja.",
    duration: "Diária",
    price: "€35/dia",
    icon: <Hotel/>,
    linkText: "Ver opções de hospedagem"
  }
];


export function Services() {

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    slidesToScroll: 1,
    breakpoints: {
      "(min-width: 768px)": {
        slidesToScroll: 3,
      },

    }
    
   
  })

  function scrollPrev() {
    if (emblaApi) emblaApi.scrollPrev()
  }
  
  function scrollNext() {
    if (emblaApi) emblaApi.scrollNext()
  }



  
  return (
    <section className="bg-white py-16" >

      <div className="container mx-auto px-4">
        
          <h2 className="text-4xl font-bold mb-12">Serviços</h2> 

          <div className="relative">

            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">

                {services.map((item, index)=>(
                  <div key={index} className="flex-[0_0_100%] min-w0-0 md:flex-[0_0_calc(100%/3)] px-5">
                   
                    <article className="bg-[#1E293B] text-white rounded-2xl p-6 space-y-4 h-full flex flex-col">
                      <div className="flex-1 flex itens-start justify-between">
                 
                        <div className="flex gap-3">
                          <span className="text-3xl">{item.icon}</span>

                          <div>
                            <h3 className="font-bold text-xl my-1">{item.title}</h3>
                            <p className="text-gray-400 text-sm select-none ">
                              {item.description}
                            </p>
                          </div>
                        </div>

                      </div>

                      <div className="border-t border-gray-700 pt-4 flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm">
                          
                          <Clock className="w-5 h-5"/>
                          <span>{item.duration}</span>

                        </div>

                        <a href="#"
                        className="flex items-center justify-center gap-2 hover:bg-green-500 px-4 py-1 rounded-md duration-300"
                        >
                          <WhatsappLogoIcon className="w-5 h-5"/>
                          Entrar em contato
                        </a>

                      </div>

                    </article>


                  </div>

                ))}

                
              </div>
            </div>  

            <button 
              className=" bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 
              absolute top-1/2 left-0 -translate-y-1/2 z-10"
              onClick={scrollPrev}
            >
              <ChevronLeft className="w-6 h-6 text-gray-600"
              />
            </button>

            <button 
              className=" bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 
              absolute top-1/2 right-0 -translate-y-1/2 z-10"
              onClick={scrollNext}
            >
              <ChevronRight className="w-6 h-6 text-gray-600"
              />
            </button>         
            
          
          </div>    

      </div>
      
    </section>
  )
}
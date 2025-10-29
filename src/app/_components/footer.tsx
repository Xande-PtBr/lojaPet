import golden from '../../../public/golden.png'
import royal from '../../../public/royal.png'
import primier from '../../../public/primier.png'
import whiskas from '../../../public/whiskas.png'
import natural from '../../../public/natural.png'
import {WhatsappLogoIcon} from "@phosphor-icons/react/dist/ssr";
import Image from 'next/image'
import { FacebookLogoIcon, InstagramLogoIcon, YoutubeLogoIcon } from '@phosphor-icons/react/dist/ssr'

const brands = [
  { name: "Royal Canin", logo: royal },
  { name: "Golden", logo: golden },
  { name: "Primier", logo: primier },
  { name: "Formula Natural", logo: natural },
  { name: "Whiskas", logo: whiskas },
  { name: "Golden", logo: golden },
]


export function Footer() {
  return (
    <section className="bg-[#E84c3d] py-16 text-white">
      <div className="container mx-auto px-4">

        <div className="border-b border-white/20 pb-8">
          <h4 className='text-3xl font-semibold mb-8 text-center'>Marcas que trabalhamos</h4>

          <div className='grid grid-cols-2 lg:grid-cols-6 gap-8'>
            {brands.map((item, index) => (
              <div key={index} className='bg-white p-4 rounded-lg flex items-center justify-center'> 
                <Image
                  src={item.logo}
                  alt={item.name}
                  width={100}
                  height={50}
                  quality={100}
                  style={{
                    width: 'auto',
                    height: 'auto',
                  }}
                  className='object-contain'
                />
              </div>  
            ))}
          
          </div>
        </div>

        <footer className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb:12 mt-5' >
          <div className="">
            <h3 className='text-2xl font-semibold mb-2'>Pet Shop Dev</h3>
            <p className='mb-4'>Cuidando do seu, melhor amigo com amor e dedicação.</p>
            <a 
              data-aos="fade-up"
              data-aos-delay="300"
              target="_blank"
              href="https://wa-me/351934231231?text=Olá, vim pelo site e gostaria de saber mais informações."
              className="bg-green-500 px-5 py-2 rounded-md font-semibold flex
              items-center justify-center w-fit gap-2"><WhatsappLogoIcon className="w-5 h-5"/> Contato via whatsApp</a>
          </div>

          <div className="">
            <h3 className='text-2xl font-semibold mb-2'>Contatos</h3>
            <p className='mb-4'>Email: exemple@exemple.com </p>
            <p className='mb-4'>Telefone (xxx) 999999999 </p>
            <p className='mb-4'>Rua XXX, Centro - SP CEP XXXXX-XXX</p>

          </div>

          <div className="">
            <h3 className='text-2xl font-semibold mb-2'>Redes Sociais</h3>
            <div className='flex gap-4 mb-4 ml-5'>
              <a href="#"
                 target='_blank'
              >
              <FacebookLogoIcon className='w8 h-8' size={28} /></a>
              <a href="#"
                 target='_blank'
              >
              <InstagramLogoIcon className='w8 h-8' size={28}/></a>
              <a href="#"
                 target='_blank'
              >
              <YoutubeLogoIcon className='w8 h-8' size={28}/></a>
            </div>

          </div>
        

        </footer>



      </div>

      
    </section>
  )
}
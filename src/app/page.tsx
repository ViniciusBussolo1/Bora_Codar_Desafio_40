import Image from 'next/image'
import Arrow from '../../public/arrow.svg'
import { Item } from '@/components/Item/Item'

import { Items } from '@/data/Items'

export default function Home() {
  return (
    <div className="w-screen h-screen bg-black bg-[url('../../public/ImageBackground.svg')] bg-no-repeat bg-right bg-contain flex justify-center items-center px-4">
      <div className="max-w-[76rem] w-full space-y-[10rem]">
        <div className="max-w-[30.125rem] w-full space-y-8">
          <div className="w-full space-y-4">
            <span className="text-base font-medium tracking-widest uppercase bg-gradient-purple-linear bg-clip-text text-transparent">
              newsletter exclusiva
            </span>
            <h1 className="text-white text-5xl font-bold leading-[3rem]">
              Workspace inspiration
            </h1>
          </div>
          <p className="max-w-[27.813rem] w-full text-xl text-gray-200">
            Assine nossa newsletter e transforme seu espaço de trabalho em um
            oásis de produtividade!
          </p>
          <div className="max-w-[29.25rem] w-full flex gap-2">
            <input
              type="text"
              placeholder="Digite seu e-mail"
              className="text-base leading-[1.6rem] bg-gray-800 text-gray-200 placeholder:text-gray-200 px-3 py-4 rounded-[0.313rem] flex-1"
            />
            <button className="bg-gradient-purple-linear p-4 rounded text-sm leading-normal font-bold text-black uppercase flex justify-center items-center gap-2 ">
              quero receber <Image src={Arrow} alt="Icon Arrow" />
            </button>
          </div>
        </div>

        <div className="max-w-[76rem] w-full flex justify-between items-center">
          {Items.map((item, index) => {
            return (
              <Item
                key={index}
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

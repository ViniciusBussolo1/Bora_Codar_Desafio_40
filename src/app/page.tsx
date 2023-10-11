export default function Home() {
  return (
    <div className="w-screen h-screen bg-black bg-[url('../../public/ImageBackground.svg')] bg-no-repeat bg-right bg-contain flex justify-center items-center px-4">
      <div className="max-w-[76rem] w-full ">
        <div className="max-w-[30.125rem] w-full">
          <div className="w-full space-y-4">
            <span className="text-base font-medium tracking-widest uppercase bg-gradient-purple-linear bg-clip-text text-transparent">
              newsletter exclusiva
            </span>
            <h1 className="text-white text-5xl font-bold leading-[3rem]">
              Workspace inspiration
            </h1>
          </div>
        </div>
      </div>
    </div>
  )
}

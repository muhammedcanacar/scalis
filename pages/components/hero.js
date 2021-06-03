import Link from 'next/link'

function Hero() {

    return (
        <div className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                <img src="/hero-image.svg" className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="come soon hero image"/>
                <div className="text-center lg:w-2/3 w-full">
                    <h1 className="title-font sm:text-4xl text-3xl tracking-wide mb-4 font-semibold text-gray-800">
                        Scalis Coming Soon! ⚡
                    </h1>
                    <p className="mb-8 leading-relaxed tracking-widest">
                    ARE YOU READY?
                    </p>
                    <div className="flex justify-center">
                        <Link href="/subscribe">
                        <button className="inline-flex text-gray-200 bg-gray-900 hover:bg-gray-800 border-0 py-3 px-6 focus:outline-none rounded text-lg capitalize">let me know when it comes</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
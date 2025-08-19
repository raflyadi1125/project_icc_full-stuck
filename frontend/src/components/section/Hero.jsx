import React from 'react'

const Hero = () => {
  return (
    <section className='min-h-screen bg-gray-800 text-white flex items-center'>
        <div className='mx-auto max-w-7xl px-6 w-full'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>

                {/* Kiri teks  */}
                    <div>
                        <h1 className='text-4xl md:text-5xl font-bold leading-tight'>
                            Temukan <span className='text-cyan-400'>Talenta terbaik</span>
                            </h1>
                        <p className='mt-4 text-gray-300 max-w-lg'>
                            Posting lowongan kerja anda hari ini dan dapatkan 
                            kandidat berkualitas hanya dalam hitungan hari. mudah, cepat, dan efisien
                        </p>

                        <div className='mt-6 flex flex-wrap gap-4'>
                            <button className='bg-blue-400 hover:bg-blue-300 text-black font-semibold px-6 py-3 rounded-lg'>
                                Post a job
                            </button>
                            <button className='border border-gray-700 bg-gray-800/70 hover:bg-gray-800 
                            px-6 py-3 rounded-lg font-semibold text-gray-200 transition'>
                                Browse Talent
                            </button>
                        </div>
                    </div>

                {/* Kanan - gambar */}
                <div>
                    <img src="gambar.jpg" alt='gambar' width="3000"/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero
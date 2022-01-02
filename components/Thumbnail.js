import Image from 'next/image'
import Results from './Results'
import { ThumbUpIcon } from '@heroicons/react/outline'
const Thumbnail = ({ result }) => {
  // console.log('2021-09-17'.slice(0, 4))

  const Baseurl = 'https://image.tmdb.org/t/p/original'
  console.log(`${Baseurl} + ${result.backdrop_path || result.poster_path}`)
  return (
    <div className="relative group cursor-pointer transition duration-200  ease-in transform sm:hover:scale-105 hover:z-50 p-2">
      <Image
        layout="responsive"
        src={
          `${Baseurl}${result.backdrop_path || result.poster_path} ` ||
          `${Baseurl} ${result.poster_path}`
        }
        alt="Adipisicing dolor reprehenderit ipsum in nostrud officia esse proident consectetur ipsum nulla laboris id officia."
        height={1080}
        className="rounded-[12px]"
        width={1920}
      />
      <div className="p-2 ">
        <p className="truncate max-w-m  d font-Source-Sans-Pro">
          {result.overview}
        </p>
        <h2 className="absolute bottom-3  top-[150px] mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold font-Bebas-Neue">
          {result.title || result.original_name}
        </h2>

        {/* <h2>{result.first_air_date || release_date || 'Not found'.slice(0, 4)}</h2> */}
      </div>
    </div>
  )
}

export default Thumbnail

import Image from 'next/image'

import mibrMap from '@/public/images/maps/mibr.jpg'
import monsterMap from '@/public/images/maps/monster.jpg'
import itauMap from '@/public/images/maps/itau.jpg'
import niveaMap from '@/public/images/maps/nivea.jpg'
import egMap from '@/public/images/maps/eg.jpg'
import intelMap from '@/public/images/maps/intel.jpg'

export default function Showcases() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">what we already done</div>
            <h2 className="h2 mb-4">previous</h2>
            <p className="text-xl text-gray-400">we already worked for big companies like: Made In Brazil (MIBR), Evil Geniuses (EG), Gamers Club, Nivea, Amazon Prime Video, DreamWorks, Itaú Bank, Monster Energy Drink, Intel, Netflix and more...</p>
          </div>

          <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none">

            <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <Image className="rounded-mid" src={mibrMap} alt="mibr" width={332} max-height={96} />
                </div>
              </div>
              <blockquote className="text-lg text-gray-400 grow">1v1/2v2. fully customized map with surf ramp, toten for health regen, custom soccer rounds and ambient sound.</blockquote>
              <div className="flex text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic mr-1">MIBR</cite> - <a className="flex items-center ml-1 text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="https://steamcommunity.com/sharedfiles/filedetails/?id=2410765042" target='_blank'>workshop
                  <svg className="ml-1 fill-current" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 128 128">
                    <path d="M 84 11 C 82.3 11 81 12.3 81 14 C 81 15.7 82.3 17 84 17 L 106.80078 17 L 60.400391 63.400391 C 59.200391 64.600391 59.200391 66.499609 60.400391 67.599609 C 61.000391 68.199609 61.8 68.5 62.5 68.5 C 63.2 68.5 63.999609 68.199609 64.599609 67.599609 L 111 21.199219 L 111 44 C 111 45.7 112.3 47 114 47 C 115.7 47 117 45.7 117 44 L 117 14 C 117 12.3 115.7 11 114 11 L 84 11 z M 24 31 C 16.8 31 11 36.8 11 44 L 11 104 C 11 111.2 16.8 117 24 117 L 84 117 C 91.2 117 97 111.2 97 104 L 97 59 C 97 57.3 95.7 56 94 56 C 92.3 56 91 57.3 91 59 L 91 104 C 91 107.9 87.9 111 84 111 L 24 111 C 20.1 111 17 107.9 17 104 L 17 44 C 17 40.1 20.1 37 24 37 L 69 37 C 70.7 37 72 35.7 72 34 C 72 32.3 70.7 31 69 31 L 24 31 z" />
                  </svg>
                  </a>
              </div>
            </div>

            <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up" data-aos-delay="200">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <Image className="rounded-mid" src={monsterMap} alt="monster" width={332} max-height={96} />

                </div>
              </div>
              <blockquote className="text-lg text-gray-400 grow">1v1/2v2. map for Monster Fight Night ambiented in las vegas.</blockquote>
              <div className="flex text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic mr-1">Monster Energy</cite> - <a className="flex items-center ml-1 text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="https://steamcommunity.com/sharedfiles/filedetails/?id=2838763750" target='_blank'>workshop
                  <svg className="ml-1 fill-current" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 128 128">
                    <path d="M 84 11 C 82.3 11 81 12.3 81 14 C 81 15.7 82.3 17 84 17 L 106.80078 17 L 60.400391 63.400391 C 59.200391 64.600391 59.200391 66.499609 60.400391 67.599609 C 61.000391 68.199609 61.8 68.5 62.5 68.5 C 63.2 68.5 63.999609 68.199609 64.599609 67.599609 L 111 21.199219 L 111 44 C 111 45.7 112.3 47 114 47 C 115.7 47 117 45.7 117 44 L 117 14 C 117 12.3 115.7 11 114 11 L 84 11 z M 24 31 C 16.8 31 11 36.8 11 44 L 11 104 C 11 111.2 16.8 117 24 117 L 84 117 C 91.2 117 97 111.2 97 104 L 97 59 C 97 57.3 95.7 56 94 56 C 92.3 56 91 57.3 91 59 L 91 104 C 91 107.9 87.9 111 84 111 L 24 111 C 20.1 111 17 107.9 17 104 L 17 44 C 17 40.1 20.1 37 24 37 L 69 37 C 70.7 37 72 35.7 72 34 C 72 32.3 70.7 31 69 31 L 24 31 z" />
                  </svg>
                  </a>
              </div>
            </div>

            <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up" data-aos-delay="400">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <Image className="rounded-mid" src={itauMap} alt="itau" width={332} max-height={96} />

                </div>
              </div>
              <blockquote className="text-lg text-gray-400 grow">1v1/2v2. futuristic arena with awesome combats.</blockquote>
              <div className="flex text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic mr-1">Itaú Bank</cite> - <a className="flex items-center ml-1 text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="https://steamcommunity.com/sharedfiles/filedetails/?id=2787067123" target='_blank'>workshop
                  <svg className="ml-1 fill-current" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 128 128">
                    <path d="M 84 11 C 82.3 11 81 12.3 81 14 C 81 15.7 82.3 17 84 17 L 106.80078 17 L 60.400391 63.400391 C 59.200391 64.600391 59.200391 66.499609 60.400391 67.599609 C 61.000391 68.199609 61.8 68.5 62.5 68.5 C 63.2 68.5 63.999609 68.199609 64.599609 67.599609 L 111 21.199219 L 111 44 C 111 45.7 112.3 47 114 47 C 115.7 47 117 45.7 117 44 L 117 14 C 117 12.3 115.7 11 114 11 L 84 11 z M 24 31 C 16.8 31 11 36.8 11 44 L 11 104 C 11 111.2 16.8 117 24 117 L 84 117 C 91.2 117 97 111.2 97 104 L 97 59 C 97 57.3 95.7 56 94 56 C 92.3 56 91 57.3 91 59 L 91 104 C 91 107.9 87.9 111 84 111 L 24 111 C 20.1 111 17 107.9 17 104 L 17 44 C 17 40.1 20.1 37 24 37 L 69 37 C 70.7 37 72 35.7 72 34 C 72 32.3 70.7 31 69 31 L 24 31 z" />
                  </svg>
                  </a>
              </div>
            </div>

          </div>
          <br />
          <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none">

            <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <Image className="rounded-mid" src={niveaMap} alt="nivea" width={332} max-height={96} />

                </div>
              </div>
              <blockquote className="text-lg text-gray-400 grow">1v1/2v2. map with custom perks (extra life, helmet) maded for Nivea in collab with tribo gaules.</blockquote>
              <div className="flex text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic mr-1">Nivea</cite> - <a className="flex items-center ml-1 text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="https://steamcommunity.com/sharedfiles/filedetails/?id=2889453748" target='_blank'>workshop
                  <svg className="ml-1 fill-current" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 128 128">
                    <path d="M 84 11 C 82.3 11 81 12.3 81 14 C 81 15.7 82.3 17 84 17 L 106.80078 17 L 60.400391 63.400391 C 59.200391 64.600391 59.200391 66.499609 60.400391 67.599609 C 61.000391 68.199609 61.8 68.5 62.5 68.5 C 63.2 68.5 63.999609 68.199609 64.599609 67.599609 L 111 21.199219 L 111 44 C 111 45.7 112.3 47 114 47 C 115.7 47 117 45.7 117 44 L 117 14 C 117 12.3 115.7 11 114 11 L 84 11 z M 24 31 C 16.8 31 11 36.8 11 44 L 11 104 C 11 111.2 16.8 117 24 117 L 84 117 C 91.2 117 97 111.2 97 104 L 97 59 C 97 57.3 95.7 56 94 56 C 92.3 56 91 57.3 91 59 L 91 104 C 91 107.9 87.9 111 84 111 L 24 111 C 20.1 111 17 107.9 17 104 L 17 44 C 17 40.1 20.1 37 24 37 L 69 37 C 70.7 37 72 35.7 72 34 C 72 32.3 70.7 31 69 31 L 24 31 z" />
                  </svg>
                  </a>
              </div>
            </div>

            <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up" data-aos-delay="200">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <Image className="rounded-mid" src={egMap} alt="eg" width={332} max-height={96} />

                </div>
              </div>
              <blockquote className="text-lg text-gray-400 grow">Time trial. finish the map with the lowest time and win. 7 differents zones, with bonus coins between them.</blockquote>
              <div className="flex text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic mr-1">Evil Geniuses</cite> - <a className="flex items-center ml-1 text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="https://steamcommunity.com/sharedfiles/filedetails/?id=2601972945" target='_blank'>workshop
                  <svg className="ml-1 fill-current" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 128 128">
                    <path d="M 84 11 C 82.3 11 81 12.3 81 14 C 81 15.7 82.3 17 84 17 L 106.80078 17 L 60.400391 63.400391 C 59.200391 64.600391 59.200391 66.499609 60.400391 67.599609 C 61.000391 68.199609 61.8 68.5 62.5 68.5 C 63.2 68.5 63.999609 68.199609 64.599609 67.599609 L 111 21.199219 L 111 44 C 111 45.7 112.3 47 114 47 C 115.7 47 117 45.7 117 44 L 117 14 C 117 12.3 115.7 11 114 11 L 84 11 z M 24 31 C 16.8 31 11 36.8 11 44 L 11 104 C 11 111.2 16.8 117 24 117 L 84 117 C 91.2 117 97 111.2 97 104 L 97 59 C 97 57.3 95.7 56 94 56 C 92.3 56 91 57.3 91 59 L 91 104 C 91 107.9 87.9 111 84 111 L 24 111 C 20.1 111 17 107.9 17 104 L 17 44 C 17 40.1 20.1 37 24 37 L 69 37 C 70.7 37 72 35.7 72 34 C 72 32.3 70.7 31 69 31 L 24 31 z" />
                  </svg>
                  </a>
              </div>
            </div>

            <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up" data-aos-delay="400">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <Image className="rounded-mid" src={intelMap} alt="intel" width={332} max-height={96} />
                  
                </div>
              </div>
              <blockquote className="text-lg text-gray-400 grow">1v1/2v2. brazilian black friday in partnership with Intel and dealers.</blockquote>
              <div className="flex text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic mr-1">Intel</cite> - <a className="flex items-center ml-1 text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="https://steamcommunity.com/sharedfiles/filedetails/?id=3082368512" target='_blank'>workshop
                  <svg className="ml-1 fill-current" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 128 128">
                    <path d="M 84 11 C 82.3 11 81 12.3 81 14 C 81 15.7 82.3 17 84 17 L 106.80078 17 L 60.400391 63.400391 C 59.200391 64.600391 59.200391 66.499609 60.400391 67.599609 C 61.000391 68.199609 61.8 68.5 62.5 68.5 C 63.2 68.5 63.999609 68.199609 64.599609 67.599609 L 111 21.199219 L 111 44 C 111 45.7 112.3 47 114 47 C 115.7 47 117 45.7 117 44 L 117 14 C 117 12.3 115.7 11 114 11 L 84 11 z M 24 31 C 16.8 31 11 36.8 11 44 L 11 104 C 11 111.2 16.8 117 24 117 L 84 117 C 91.2 117 97 111.2 97 104 L 97 59 C 97 57.3 95.7 56 94 56 C 92.3 56 91 57.3 91 59 L 91 104 C 91 107.9 87.9 111 84 111 L 24 111 C 20.1 111 17 107.9 17 104 L 17 44 C 17 40.1 20.1 37 24 37 L 69 37 C 70.7 37 72 35.7 72 34 C 72 32.3 70.7 31 69 31 L 24 31 z" />
                  </svg>
                  </a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}

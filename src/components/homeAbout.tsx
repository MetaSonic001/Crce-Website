'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Building, CircleCheck } from 'lucide-react'

const HomeAbout = () => {
  return (
    <section className="relative overflow-hidden px-4 bg-white py-16">
      <div className="container mx-auto">
        <div className="flex md:flex-col flex-col-reverse  gap-12 lg:grid lg:grid-cols-2 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              About Fr. CRCE
            </h2>
            <p className="mb-6 text-lg leading-relaxed text-gray-600">
              Established in 1984, Fr. CRCE is a premier engineering institution
              located in the heart of Mumbai. Known for its excellence in
              engineering education, we offer comprehensive programs in various
              engineering disciplines with a focus on practical learning and
              innovation.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                  <CircleCheck className="h-6 w-6 text-blue-600" />
                </div>
                <span className="text-gray-700">
                  NAAC Accredited with Grade 'A'
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                  <Building className="h-6 w-6 text-blue-600" />
                </div>
                <span className="text-gray-700">NBA Accredited Programs</span>
              </div>
            </div>
            <Link
              href="/about/about-crce"
              className="group mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-blue-700"
            >
              Learn More
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative mx-auto w-full overflow-hidden rounded-2xl lg:w-fit"
          >
            <Image
              src="/crce-building.png"
              alt="Fr. CRCE Campus"
              width={800}
              height={500}
              priority
              className="h-[300px] w-full object-cover lg:h-[500px] lg:w-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HomeAbout
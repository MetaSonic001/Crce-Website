'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  CheckCircle, 
  ArrowRight, 
  Lightbulb, 
  Users, 
  Wallet,
  ExternalLink 
} from 'lucide-react'

export default function InnovationPolicy() {
  return (
    <section className="py-16 px-4 bg-gradient-to-b">
      <div className="container mx-auto ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-2xl bg-white p-8  ring-1 ring-gray-100"
        >
          {/* Modern Header */}
          <div className="mb-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
                Innovation and Startup Policy
              </h2>
              <p className="mt-3 text-lg text-gray-600">
                Empowering Future Entrepreneurs
              </p>
              <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-blue-600" />
            </motion.div>
          </div>

          {/* Content with Modern Typography */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-12"
          >
            <p className="text-center text-lg leading-relaxed text-gray-600">
              Our comprehensive framework fosters innovation and entrepreneurship, 
              providing cutting-edge resources and support for transforming ideas 
              into successful ventures.
            </p>
          </motion.div>
          
          {/* Key Features with Hover Effects */}
          <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                icon: <Lightbulb className="h-6 w-6" />,
                title: "Resource Access",
                description: "State-of-the-art labs and workspaces for prototype development"
              },
              {
                icon: <Users className="h-6 w-6" />,
                title: "Mentorship Network",
                description: "Connect with industry leaders and successful entrepreneurs"
              },
              {
                icon: <Wallet className="h-6 w-6" />,
                title: "Funding Support",
                description: "Access to seed funding and investor networks"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="group relative overflow-hidden rounded-xl bg-gradient-to-b from-blue-50 to-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-blue-500/0 opacity-0 transition-opacity duration-300 group-hover:opacity-5" />
                <div className="mb-4 inline-block rounded-lg bg-blue-100/80 p-3 text-blue-600">
                  {feature.icon}
                </div>
                <h4 className="mb-2 text-lg font-semibold text-gray-900">
                  {feature.title}
                </h4>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
          
          {/* Benefits with Modern List Style */}
          
          
          {/* Modern CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex justify-center"
          >
            <Link 
              href="/innovation-policy" 
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-3 text-white transition-all duration-300 hover:from-blue-700 hover:to-blue-800"
            >
              Click Here to Explore
              <ExternalLink className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
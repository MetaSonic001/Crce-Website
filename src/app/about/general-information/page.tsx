'use client'
import React, { useState } from 'react'
import { Zilla_Slab } from 'next/font/google'
import Image from 'next/image'
import { BookOpenText } from 'lucide-react'
import Link from 'next/link'
import { tabs } from './data'
import Sidebar from '@/components/QuicklinksSidebar'
import AICETExt from './AICET-Ext/AICETExt'
import AICETSub from './AICET-Sub/AICETSub'
import CodeOfConduct from './code-of-conduct/CodeOfConduct'
import CoreValues from './core-values/CoreValues'
import CommonInfrastructure from './common-infrastructure/CommonInfrastructure'
import TelephoneDirectory from './telephone-directory/TelephoneDirectory'

const zilla = Zilla_Slab({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})
export default function Page() {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id || 'overview')

  const renderContent = () => {
    switch (activeTab) {
      case 'aicteextension':
        return <AICETExt />
      case 'aicetsubsquent':
        return <AICETSub />
      case 'corevalues':
        return <CoreValues />
      case 'codeofconduct':
        return <CodeOfConduct />
      case 'telephonedirectory':
        return <TelephoneDirectory />
      case 'commoninfrastructure':
        return <CommonInfrastructure />
      default:
        return null
    }
  }

  return (
    <main className="flex h-fit w-full flex-col items-center justify-center mt-52">
     
      <div className="flex h-fit w-full flex-col justify-center bg-linear-to-b from-white to-[#E5F0FF] py-4 md:flex-row">
        <div className="mx-2 min-w-max">
          <Sidebar
            tabs={tabs}
            activeTab={activeTab}
            onTabChange={(tabId) => setActiveTab(tabId)} AccordionContent={undefined}          />
        </div>
        <div id={activeTab} className="container">
          {renderContent()}
        </div>
      </div>
    </main>
  )
}

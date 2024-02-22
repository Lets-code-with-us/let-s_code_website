import React from 'react'
import { CheckCircle, X } from 'lucide-react'
import Link from "next/link"

export function SuccessBanner() {
    const [state,setState] = React.useState('z-100 flex items-center justify-between space-x-4')
    const [statebg,setStateBg] = React.useState('z-100 rounded-md border-l-4 border-green-500 bg-green-100 p-4')
    function display(){
        setState('invisible')
        setStateBg('invisible mt-[-100px]')
    

    }
  return (
    <>
      <div className={`${statebg}`}>
        <div className={`${state}`}>
          <div>
            <CheckCircle className="h-6 w-6 text-green-600" />
          </div>
          <div>
            <p className="text-sm font-medium text-green-600">
              This is some informational text that you can use to show some success content.<Link href="/update">Click here</Link>
            </p>
          </div>
          <div onClick={display}>
            <X className="h-6 w-6 cursor-pointer text-green-600" />
          </div>
        </div>
      </div>
    </>
  )
}

import React, { MouseEventHandler } from 'react'
import { CiCircleChevDown, CiCircleChevUp } from 'react-icons/ci'

class Props {
  className?: string
  onClick: MouseEventHandler
  direction: boolean
}

const CricleChevProps = {
  size: '2x',
  color: '#ffffff',
  strokeWidth: 0.75
}

export default function Arrow(props: Props) {
  if (props.direction)
    return (
      <div
        className={
          props.className +
          ' transition-all w-screen h-40 flex justify-center fixed -top-24 hover:translate-y-24'
        }
      >
        <button className=" h-10 w-10 ">
          <CiCircleChevUp {...CricleChevProps}></CiCircleChevUp>
        </button>
      </div>
    )
  else
    return (
      <div
        className={
          props.className +
          ' transition-all w-screen h-40 flex flex-col items-center justify-end fixed -bottom-24 hover:-translate-y-24'
        }
      >
        <button className=" bottom-1/2 inline-block h-10 w-10 shrink">
          <CiCircleChevDown {...CricleChevProps}></CiCircleChevDown>
        </button>
      </div>
    )
}

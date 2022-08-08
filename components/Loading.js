import React from 'react'

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

// this should be more dynamic

export default function Loading({ lineCount, }) {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Skeleton style={{
        borderRadius: '10px',
        display: 'block',
        width: 120,
        height: 150,
        margin: "0px auto"
      }} count={1} />
      <Skeleton style={{
        display: 'block',
        width: 200,
        height: 20,
        margin: "0px 12px"
      }} count={4} />
    </div>
  )
}
import React from 'react'

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import skeletonStyles from '../styles/Skeleton.module.css'


export default function Loading({ lineCount, numberOfCards }) {

  const cards = [...Array(numberOfCards)].map(item => {
    return <><div className={skeletonStyles.skeleton_container}>
      <Skeleton className={skeletonStyles.skeleton_image} />
      <Skeleton className={skeletonStyles.skeleton_lines} count={lineCount} />
    </div>
    </>
  })

  return (<>
    {cards}
  </>)
}
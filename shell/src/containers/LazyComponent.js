import React from 'react'
import { loadComponent, useDynamicScript } from '../utils/rendering'

const LazyComponent = ({system}) => {
  const { ready, failed } = useDynamicScript({
    url: system && system.url,
  });

  if (!system) {
    return <h2>Not system specified</h2>;
  }

  if (!ready) {
    return <h2>Loading dynamic script: {system.url}</h2>;
  }

  if (failed) {
    return <h2>Failed to load dynamic script: {system.url}</h2>;
  }

  const Component = React.lazy(
    loadComponent(system.scope, system.module)
  )

  return (
    <React.Suspense fallback="Loading Component...">
      <Component />
    </React.Suspense>
  )
}

export default LazyComponent

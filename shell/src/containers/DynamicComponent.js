import React from 'react'
import { loadComponent, useDynamicScript } from '../utils/rendering'
import Loading from '../components/Loading'

const DynamicComponent = ({system}) => {
  const { ready, failed } = useDynamicScript({
    url: system && system.url,
  });

  if (!system) {
    return <h2>Not system specified</h2>;
  }

  if (!ready) {
    return <Loading />;
  }

  if (failed) {
    return <h2>Failed to load dynamic script: {system.url}</h2>;
  }

  const Component = React.lazy(
    loadComponent(system.scope, system.module)
  )

  return (
    <React.Suspense fallback={<Loading />}>
      <Component />
    </React.Suspense>
  )
}

export default DynamicComponent

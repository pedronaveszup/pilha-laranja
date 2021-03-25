import React from 'react'
import { loadComponent, useDynamicScript } from '../../utils/rendering'
import Loading from '../../components/Loading'
import WebComponent from '../WebComponent'

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

  if(!customElements.get(system.component)) {
    loadComponent(system.scope, system.module)
  }
  

  return (
    <React.Suspense fallback={<Loading />}>
      <WebComponent component={system.component} />
    </React.Suspense>
  )
}

export default DynamicComponent

import { app } from '@inertiajs/inertia-react'
import React from 'react'
import { render } from 'react-dom'
import { InertiaProgress } from '@inertiajs/progress'

InertiaProgress.init()

const el = document.getElementById('app')

render(
  <app
    initialPage={JSON.parse(el.dataset.page)}
    resolveComponent={name => import(`./Pages/${name}`).then(module => module.default)}
  />,
  el
)

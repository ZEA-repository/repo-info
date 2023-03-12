import { observer } from 'mobx-react-lite'
import MainLayout from '@/layouts/Main'
import { Routes, Route } from 'react-router-dom'
import { HomePage } from '@/pages'
import { MobxExamplePage } from '@/pages/store-example'
import { RepositoryPage } from '@/pages/repository'
import { BrowserRouter } from 'react-router-dom'
import './App.styles.css'

const App = observer(() => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path='store-example' element={<MobxExamplePage />} />
          <Route path='repository/:owner/:name' element={<RepositoryPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
})

export default App

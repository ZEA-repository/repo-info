import { observer } from 'mobx-react-lite'
import MainLayout from '@/layouts/Main'
import { Routes, Route } from 'react-router-dom'
import { HomePage } from '@/pages'
import { StoreExamplePage } from '@/pages/store-example'
import { RepositoryPage } from '@/pages/repository'
import { NothingFoundBackground } from '@/pages/404'
import { BrowserRouter } from 'react-router-dom'
import './App.styles.css'

const App = observer(() => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path='store-example' element={<StoreExamplePage />} />
          <Route path='repository/:owner/:name' element={<RepositoryPage />} />
          <Route path='*' element={<NothingFoundBackground />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
})

export default App

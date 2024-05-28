import './App.css'
import { Table } from './components/Table'
import { Form } from './components/Form'
import { useIpsData } from './hooks/useIpsData'

function App() {
  const { ips, addIp, removeIp, loading } = useIpsData()

  return (
    <main className="flex min-h-screen flex-col items-center pb-24">
      <div className='max-w-screen-xl w-full px-4 pt-24'>
        <h1 className="text-6xl font-bold mb-24 text-center">IP Geolocator</h1>
        <div className='w-full text-center'>
          <Form addIp={addIp} />
        </div>
        <p className={`w-full py-3 text-lg text-center font-semibold text-black ${loading ? '' : 'text-opacity-0'}`}>Searching...</p>
        <div className='w-full'>
          <Table ips={ips} removeIp={removeIp}/>
        </div>
      </div>
      <footer className='fixed w-full text-center py-4 bottom-0 shadow bg-slate-100'>
        <small>
          This APP consumes the following <a className='text-sky-600' href='https://ip-api.com' target='_blank'>API</a>
        </small>
      </footer>
    </main>
  )
}

export default App

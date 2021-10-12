import './App.css'
import React from 'react'
import { motion } from 'framer-motion'
const links = [
  { name: 'Home', to: '#', id: 1 },
  { name: 'About', to: '#', id: 2 },
  { name: 'Blog', to: '#', id: 3 },
  { name: 'Contact', to: '#', id: 4 },
]
export default function App() {
  const itemVariants = {
    closed: {
      opacity: 0,
    },
    open: { opacity: 1 },
  }

  const sideVariants = {
    closed: {
      transition: {
        staggerChildren: 0.2,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        staggerChildren: 0.2,
        staggerDirection: 1,
      },
    },
  }

  return (
    <main>
      <motion.aside initial={{ width: 0 }} animate={{ width: 300 }}>
        <div className='container'>
          {links.map(({ name, to, id }) => (
            <a key={id} href={to}>
              {name}
            </a>
          ))}
        </div>
      </motion.aside>
      <div className='btn-container'>
        <button>Close</button>
      </div>
    </main>
  )
}

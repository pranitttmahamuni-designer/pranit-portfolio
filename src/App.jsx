import { motion } from 'motion/react'

export default function App() {
  return (
    <main className="min-h-screen grid place-items-center bg-stone-50">
      <motion.h1
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-medium tracking-tight text-stone-900"
      >
        Pranit — portfolio in progress
      </motion.h1>
    </main>
  )
}

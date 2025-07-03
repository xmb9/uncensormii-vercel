import './index.css'
import { useEffect, useState } from 'preact/hooks'
import { OOBERenderer } from './setup/oobeStageHANDLER.jsx'
import { Menu } from './menu/main.jsx'
import { TestingMenu } from './testing.jsx'

export function App() {
    const [testingVisible, setTestingVisible] = useState(false)
    const [typed, setTyped] = useState('')
    const oobeCompleted = localStorage.getItem('oobeCompleted') === 'true'

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key.length === 1) {
                setTyped(prev => (prev + e.key).slice(-10))
            } else if (e.key === 'Backspace') {
                setTyped(prev => prev.slice(0, -1))
            } else if (e.key === 'Escape') {
                setTestingVisible(false)
                setTyped('')
            }
        }

        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [])

    useEffect(() => {
        if (typed.toLowerCase().includes('admin')) {
            setTestingVisible(true)
        }
    }, [typed])

    return (
        <div className="w-screen h-screen text-primary">
            <div className="biggerScreenNOW w-screen h-screen bg-black text-white">
                your screen is too small, or you're on a phone. please use a desktop to use UncensorMii
            </div>
            {oobeCompleted ? <Menu /> : <OOBERenderer />}
            {/* only enable our testing menu when running 'pnpm dev' */}
            {import.meta.env.DEV && (
                <TestingMenu visible={testingVisible} onClose={() => setTestingVisible(false)} />
            )}
        </div>
    )
}

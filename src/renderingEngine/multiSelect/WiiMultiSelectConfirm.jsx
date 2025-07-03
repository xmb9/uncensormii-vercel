import { useMultiSelect } from './WiiMultiSelectContext'
import { WiiButton } from '../button'

export function WiiMultiSelectConfirm({ onConfirm, children }) {
    const {
        mode,
        options,
        selectedIndex,
        selectedIndices
    } = useMultiSelect()

    const unwrap = (opt) => {
        if (
            opt &&
            typeof opt === 'object' &&
            opt.props &&
            opt.props.children
        ) {
            const kids = opt.props.children
            return Array.isArray(kids) ? kids[0] : kids
        }
        return opt
    }

    const handleConfirm = () => {
        if (mode === 'multiple') {
            const selections = selectedIndices.map(i => unwrap(options[i]))
            if (onConfirm) onConfirm(selections)
        } else {
            const selectedOption = selectedIndex !== null ? unwrap(options[selectedIndex]) : null
            if (onConfirm) onConfirm(selectedOption)
        }
    }

    return (
        <WiiButton
            rounded
            onClick={handleConfirm}
            class="mt-12 px-6 py-3 text-white bg-green-600 hover:bg-green-700 rounded-xl text-xl"
        >
            {children || 'Confirm'}
        </WiiButton>
    )
}
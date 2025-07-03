import { useMultiSelect } from './WiiMultiSelectContext'
import { WiiButtonMultiSelection } from '../button'

export function WiiMultiSelectList() {
    const {
        options,
        mode,
        selectedIndex,
        setSelectedIndex,
        selectedIndices,
        setSelectedIndices
    } = useMultiSelect()

    const toggleMultiple = (i) => {
        if (selectedIndices.includes(i)) {
            setSelectedIndices(selectedIndices.filter(idx => idx !== i))
        } else {
            setSelectedIndices([...selectedIndices, i])
        }
    }

    return (
        <div class="flex flex-col items-center space-y-8">
            {options.map((label, i) => {
                const selected = mode === 'multiple'
                    ? selectedIndices.includes(i)
                    : selectedIndex === i

                const onClick = () => {
                    if (mode === 'multiple') {
                        toggleMultiple(i)
                    } else {
                        setSelectedIndex(i)
                    }
                }

                return (
                    <WiiButtonMultiSelection
                        key={i}
                        selected={selected}
                        onClick={onClick}
                    >
                        {label}
                    </WiiButtonMultiSelection>
                )
            })}
        </div>
    )
}
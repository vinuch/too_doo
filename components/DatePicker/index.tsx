import { DatePicker } from '@ark-ui/react/date-picker'
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'
import { DayView } from './day-view'

export const Example = () => (
    <DatePicker.Root open startOfWeek={1} selectionMode="range" numOfMonths={2}>
        <DatePicker.Content>
            <DatePicker.Context>
                {(datePicker) => (
                    <div>
                        <div>
                            <DatePicker.YearSelect />
                            <DatePicker.MonthSelect />
                            <button type="button" onClick={() => datePicker.selectToday()}>
                                Today
                            </button>
                        </div>
                        <div>
                            <DatePicker.PrevTrigger>
                                <ChevronLeftIcon />
                            </DatePicker.PrevTrigger>
                            <span>{datePicker.visibleRangeText.start}</span>
                            <DatePicker.NextTrigger>
                                <ChevronRightIcon />
                            </DatePicker.NextTrigger>
                            <span>{datePicker.visibleRangeText.end}</span>
                        </div>
                        <div>
                            <DayView monthOffset={0} />
                            <DayView monthOffset={1} />
                        </div>
                        <DatePicker.Control>
                            <DatePicker.Input index={0} />
                            <span>-</span>
                            <DatePicker.Input index={1} />
                            <DatePicker.ClearTrigger>Clear</DatePicker.ClearTrigger>
                        </DatePicker.Control>
                        <div>
                            {presets.map((preset) => (
                                <DatePicker.PresetTrigger key={preset.value} value={preset.value}>
                                    {preset.label}
                                </DatePicker.PresetTrigger>
                            ))}
                        </div>
                    </div>
                )}
            </DatePicker.Context>
        </DatePicker.Content>
    </DatePicker.Root>
)

const presets = [
    { label: 'Last 3 days', value: 'last3Days' },
    { label: 'Last 7 days', value: 'last7Days' },
    { label: 'Last 14 days', value: 'last14Days' },
    { label: 'Last 30 days', value: 'last30Days' },
    { label: 'Last 90 days', value: 'last90Days' },
] as const

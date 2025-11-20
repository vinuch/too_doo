import { DatePicker, useDatePickerContext } from '@ark-ui/react/date-picker'

interface Props {
    /** The number of months to add or subtract. */
    monthOffset: number
}

export const DayView = (props: Props) => {
    const { monthOffset } = props
    const datePicker = useDatePickerContext()
    const offset = datePicker.getOffset({ months: monthOffset })

    return (
        <DatePicker.Table>
            <DatePicker.TableHead>
                <DatePicker.TableRow>
                    {datePicker.weekDays.map((weekDay, id) => (
                        <DatePicker.TableHeader key={id}>{weekDay.short}</DatePicker.TableHeader>
                    ))}
                </DatePicker.TableRow>
            </DatePicker.TableHead>
            <DatePicker.TableBody>
                {offset.weeks.map((week, id) => (
                    <DatePicker.TableRow key={id}>
                        {week.map((day, id) => (
                            <DatePicker.TableCell key={id} value={day} visibleRange={offset.visibleRange}>
                                <DatePicker.TableCellTrigger>{day.day}</DatePicker.TableCellTrigger>
                            </DatePicker.TableCell>
                        ))}
                    </DatePicker.TableRow>
                ))}
            </DatePicker.TableBody>
        </DatePicker.Table>
    )
}

"use client";

import { DatePicker } from "@ark-ui/react/date-picker";
// import { DatePicker } from "@chakra-ui/react";



export default function TestDatePicker() {
    return (
        <DatePicker.Root>
            <DatePicker.Control>
                <DatePicker.Input />
                <DatePicker.Trigger>📅</DatePicker.Trigger>
            </DatePicker.Control>

            <DatePicker.Positioner>
                <DatePicker.Content>
                    <DatePicker.View view="day">
                        <DatePicker.Context>
                            {(api) => (
                                <DatePicker.Table>
                                    <DatePicker.TableBody>
                                        {api.weeks.map((week, i) => (
                                            <DatePicker.TableRow key={i}>
                                                {week.map((day, j) => (
                                                    <DatePicker.TableCell key={j} value={day}>
                                                        <DatePicker.TableCellTrigger>
                                                            {day.day}
                                                        </DatePicker.TableCellTrigger>
                                                    </DatePicker.TableCell>
                                                ))}
                                            </DatePicker.TableRow>
                                        ))}
                                    </DatePicker.TableBody>
                                </DatePicker.Table>
                            )}
                        </DatePicker.Context>
                    </DatePicker.View>
                </DatePicker.Content>
            </DatePicker.Positioner>
        </DatePicker.Root>
    );
}

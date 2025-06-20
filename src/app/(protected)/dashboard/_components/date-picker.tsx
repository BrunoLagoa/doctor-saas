"use client";

import { addMonths } from "date-fns";
import { ptBR } from "date-fns/locale/pt-BR";
import dayjs from "dayjs";
import { CalendarIcon } from "lucide-react";
import { parseAsIsoDate, useQueryState } from "nuqs";
import * as React from "react";
import { type DateRange } from "react-day-picker";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

export default function DatePicker({
  className,
}: React.HTMLAttributes<HTMLDivElement>) {
  const [from, setFrom] = useQueryState(
    "from",
    parseAsIsoDate.withDefault(new Date()),
  );

  const [to, setTo] = useQueryState(
    "to",
    parseAsIsoDate.withDefault(addMonths(new Date(), 1)),
  );

  const date = {
    from: from && dayjs(from).isValid() ? from : undefined,
    to: to && dayjs(to).isValid() ? to : undefined,
  };

  const handleDateChange = (date: DateRange | undefined) => {
    if (date?.from) {
      setFrom(date.from, { shallow: false });
    }

    if (date?.to) {
      setTo(date.to, { shallow: false });
    }
  };

  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant="outline"
            className={cn(
              "w-[250px] justify-start text-left font-normal",
              !date && "text-muted-foreground",
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date?.from ? (
              date.to ? (
                <>
                  {from && dayjs(from).isValid()
                    ? dayjs(from).format("DD/MM/YYYY")
                    : ""}{" "}
                  -{" "}
                  {to && dayjs(to).isValid()
                    ? dayjs(to).format("DD/MM/YYYY")
                    : ""}
                </>
              ) : from && dayjs(from).isValid() ? (
                dayjs(from).format("DD/MM/YYYY")
              ) : (
                ""
              )
            ) : (
              <span>Selecione uma data</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-4" align="start">
          <Calendar
            autoFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={handleDateChange}
            numberOfMonths={2}
            locale={ptBR}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}

"use client";

import { useState } from "react";
import Calendar from "react-calendar";
import TimePicker from "react-time-picker";

import "react-calendar/dist/Calendar.css";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function Home() {
  const [valueDate, onChangeDate] = useState<Value>(new Date());
  const [valueTime, onChangeTime] = useState<string | null>("10:00"); // Updated type to string | null

  const handleTimeChange = (newValue: string | null) => {
    // Ensure null is handled properly
    if (newValue !== null) {
      onChangeTime(newValue);
    }
  };

  return (
    <main className="flex flex-col items-center bg-[#FDF0E6]">
      <nav className="flex flex-col justify-center items-center h-[130px] font-bold font-header text-[30px]">
        <h1>SNIPSNAP</h1>
        <h4>Appointment Form:</h4>
      </nav>
      <section className="flex flex-col gap-5 max-w-[400px] w-[100%] text-center">
        <div className="flex flex-col gap-1">
          <div>
            <label
              htmlFor="location"
              className="font-header font-bold text-[20px]"
            >
              Select Service:
            </label>
          </div>
          <div>
            <select className="w-[100%] max-w-[200px] text-center">
              <option>- Select Service -</option>
              <option>Haircut</option>
              <option>Hair Color</option>
              <option>Hair Treatment</option>
              <option>Others</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <div>
            <label htmlFor="date" className="font-header font-bold text-[20px]">
              Date:
            </label>
          </div>
          <div className="flex justify-center">
            <Calendar onChange={onChangeDate} value={valueDate} />
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <div>
            <label htmlFor="time" className="font-header font-bold text-[20px]">
              Time:
            </label>
          </div>
          <div>
            <TimePicker onChange={handleTimeChange} value={valueTime} />
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <div>
            <label
              htmlFor="location"
              className="font-header font-bold text-[20px]"
            >
              Location:
            </label>
          </div>
          <div>
            <input id="location" name="location" type="text" placeholder="Enter Location" className="text-center w-[100%] max-w-[200px]"/>
          </div>
        </div>
        <div className="mt-[20px]">
          <a href="/search-results" className="border-none w-[100px] h-[40px] text-white font-paragraph font-bold text-[18px] bg-[#F08E80] hover:bg-[#FF8E80] no-underline px-8 py-3">Submit</a>
        </div>
      </section>
    </main>
  );
}

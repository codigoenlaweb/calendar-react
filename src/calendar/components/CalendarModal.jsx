import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import DatePicker from "react-datepicker";
import { differenceInSeconds } from "date-fns";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "react-datepicker/dist/react-datepicker.css";
import "sweetalert2/src/sweetalert2.scss";
import "./CalendaModal.css";
import { useCalendarStore, useUiStore } from "../../hooks";
import { ButtonBlueOutline } from "../../components/buttons/ButtonBLueOutline";
import { useForm } from "../../hooks/useForm";

Modal.setAppElement("#root");

export const CalendarModal = () => {
  const { activeEvent, startSavingEvent } = useCalendarStore();
  const [first, setfirst] = useState({
    id: null,
    title: "",
    note: "",
    start: NaN,
    end: NaN,
  });
  const { id, title, note, start, end, onInputChange, validationErrors, setValidationErrors } =
    useForm(first);
  const { isDateModalOpen, closeDateModal } = useUiStore();

  useEffect(() => {
    if (activeEvent !== null) {
      setfirst({
        id: activeEvent.id || null,
        title: activeEvent.title,
        note: activeEvent.note,
        start: activeEvent.start,
        end: activeEvent.end,
      });
    }
    setValidationErrors({})
  }, [activeEvent]);

  useEffect(() => {
    const diference = differenceInSeconds(end, start);
    diference <= 0 && onInputChange({ target: { name: "start", value: NaN } });
  }, [start, end]);

  const onSubmit = async (e) => {
    e.preventDefault();
    await startSavingEvent({ title, note, start, end, id });
  };

  function onCloseModal() {
    closeDateModal();
  }

  return (
    <Modal
      isOpen={isDateModalOpen}
      onRequestClose={onCloseModal}
      className="modal"
      overlayClassName="modal-fondo"
      closeTimeoutMS={200}
    >
      <h1 className="text-2xl font-medium">Nuevo evento</h1>
      <hr />
      <form onSubmit={onSubmit} className="p-2 grid grid-cols-1 gap-4">
        {/* date start */}
        <div>
          <label className="block">Fecha y hora inicio</label>
          <DatePicker
            placeholderText="Fecha inicio"
            minDate={Date.now()}
            maxDate={end}
            selected={start}
            onChange={(value) =>
              onInputChange({ target: { name: "start", value } })
            }
            value={start}
            name="start"
            id="start"
            dateFormat="Pp"
            showTimeSelect
            className="input is-valid"
          />

          {validationErrors !== undefined &&
            validationErrors.start !== undefined && (
              <p className=" w-full px-2 py-2 mt-1 bg-red-100 border border-solid border-red-600 text-red-600 rounded">
                {validationErrors.start}
              </p>
            )}
        </div>
        {/* date end */}
        <div>
          <label className="block">Fecha y hora fin</label>
          <DatePicker
            minDate={Date.now() && start}
            placeholderText="Fecha fin"
            selected={end}
            onChange={(value) =>
              onInputChange({ target: { name: "end", value } })
            }
            value={end}
            name="end"
            id="end"
            dateFormat="Pp"
            showTimeSelect
            className="input is-valid"
          />

          {validationErrors !== undefined &&
            validationErrors.end !== undefined && (
              <p className=" w-full px-2 py-2 mt-1 bg-red-100 border border-solid border-red-600 text-red-600 rounded">
                {validationErrors.end}
              </p>
            )}
        </div>
        <hr />

        {/* title */}
        <div>
          <label className="block">Titulo y notas</label>
          <input
            type="text"
            placeholder="Una descripción corta"
            onChange={onInputChange}
            value={title}
            name="title"
            id="title"
            className={`input is-valid`}
          />

          {validationErrors !== undefined &&
            validationErrors.title !== undefined && (
              <p className=" w-full px-2 py-2 mt-1 bg-red-100 border border-solid border-red-600 text-red-600 rounded">
                {validationErrors.title}
              </p>
            )}
        </div>

        {/* note */}
        <div>
          <label className="block">Información adicional</label>
          <textarea
            placeholder="Your message..."
            rows="3"
            onChange={onInputChange}
            value={note}
            name="note"
            id="note"
            className="input is-valid"
          ></textarea>

          {validationErrors !== undefined &&
            validationErrors.note !== undefined && (
              <p className=" w-full px-2 py-2 mt-1 bg-red-100 border border-solid border-red-600 text-red-600 rounded">
                {validationErrors.note}
              </p>
            )}
        </div>

        <div className="mx-auto w-full max-w-[240px]">
          <ButtonBlueOutline
            type="submit"
            buttonText="Save"
            action={() => {}}
          />
        </div>
      </form>
    </Modal>
  );
};

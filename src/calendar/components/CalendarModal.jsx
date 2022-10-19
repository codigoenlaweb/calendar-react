import React, { useEffect, useMemo, useState } from "react";
import Modal from "react-modal";
import DatePicker from "react-datepicker";
import { differenceInSeconds } from "date-fns";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "react-datepicker/dist/react-datepicker.css";
import "sweetalert2/src/sweetalert2.scss";
import "./CalendaModal.css";
import { useCalendarStore, useUiStore } from "../../hooks";
import { ButtonBlueOutline } from "../../components/buttons/ButtonBLueOutline";

Modal.setAppElement("#root");

export const CalendarModal = () => {
  const [formSubmit, setFormSubmit] = useState(false);
  const [formValues, setFormValues] = useState({
    title: "",
    notes: "",
    start: NaN,
    end: NaN,
  });

  const { isDateModalOpen, closeDateModal } = useUiStore();
  const { activeEvent, startSavingEvent } = useCalendarStore();

  const titleClass = useMemo(() => {
    if (!formSubmit) return "is-valid";

    return formValues.title.length > 0 ? "is-valid" : "is-invalid";
  }, [formValues.title, formSubmit]);

  useEffect(() => {
    if (activeEvent !== null) {
      setFormValues({...activeEvent})
    }
  }, [activeEvent])


  useEffect(() => {
    const diference = differenceInSeconds(formValues.end, formValues.start);
    diference <= 0 && setFormValues({ ...formValues, start: NaN });
  }, [formValues.start, formValues.end]);

  const onSubmit = async (e) => {
    e.preventDefault();
    setFormSubmit(true);
    const diference = differenceInSeconds(formValues.end, formValues.start);

    // validation
    if (isNaN(diference) || diference <= 0) {
      Swal.fire({
        title: "Wrong dates!",
        text: "Check the dates entered",
        icon: "error",
        confirmButtonText: "Ok",
      });
      return;
    }

    if (formValues.title.length === 0) {
      Swal.fire({
        title: "Wrong title!",
        text: "Check the title entered",
        icon: "error",
        confirmButtonText: "Ok",
      });
      return;
    }

    // success
    await startSavingEvent(formValues)
    closeDateModal()
    Swal.fire({
      title: "Note event success!",
      text: "To be created a new note event",
      icon: "success",
      confirmButtonText: "Ok",
    });
    setFormSubmit(false);
    return;
  };

  const onDateChange = ({ name, value }) => {
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const onInputChange = ({ target }) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value,
    });
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
            maxDate={formValues.end}
            selected={formValues.start}
            onChange={(value) => onDateChange({ name: "start", value })}
            value={formValues.start}
            name="start"
            id="start"
            dateFormat="Pp"
            showTimeSelect
            className="input is-valid"
          />
        </div>
        {/* date end */}
        <div>
          <label className="block">Fecha y hora fin</label>
          <DatePicker
            minDate={Date.now() && formValues.start}
            placeholderText="Fecha fin"
            selected={formValues.end}
            onChange={(value) => onDateChange({ name: "end", value })}
            value={formValues.end}
            name="end"
            id="end"
            dateFormat="Pp"
            showTimeSelect
            className="input is-valid"
          />
        </div>
        <hr />

        {/* title */}
        <div>
          <label className="block">Titulo y notas</label>
          <input
            type="text"
            placeholder="Una descripción corta"
            onChange={onInputChange}
            value={formValues.title}
            name="title"
            id="title"
            className={`input ${titleClass}`}
          />
        </div>

        {/* notes */}
        <div>
          <label className="block">Información adicional</label>
          <textarea
            placeholder="Your message..."
            rows="3"
            onChange={onInputChange}
            value={formValues.notes}
            name="notes"
            id="notes"
            className="input is-valid"
          ></textarea>
        </div>

        <div className="mx-auto w-full max-w-[240px]">
          <ButtonBlueOutline type="submit" buttonText="Save"/>
        </div>
      </form>
    </Modal>
  );
};

import { useSelector, useDispatch } from 'react-redux'
import { onCloseDateModal, onOpenDateModal } from '../../store';

export const useUiStore = () => {
    // propiedades
    const {isDateModalOpen} = useSelector((state) => state.ui)

    // hooks
    const dispatch = useDispatch()

    // metodos
    const openDateModal = () => {
        dispatch(onOpenDateModal());
    };

    const closeDateModal = () => {
        dispatch(onCloseDateModal());
    };


    return {
        // propiedades
        isDateModalOpen,
        // metodos
        openDateModal,
        closeDateModal,
    }
}

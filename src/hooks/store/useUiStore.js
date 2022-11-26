import { useSelector, useDispatch } from 'react-redux'
import { onClearErrorMessage, onCloseDateModal, onOpenDateModal } from '../../store';
import { useAuthStore } from './useAuthStore';

export const useUiStore = () => {
    // propiedades
    const {isDateModalOpen} = useSelector((state) => state.ui)
    const { clearErrorMessage } = useAuthStore()
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

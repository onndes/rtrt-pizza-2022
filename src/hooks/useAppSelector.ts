import {
    useSelector as useReduxSelector,
    TypedUseSelectorHook,
} from 'react-redux'
import { RootState } from '../redux/store'

export const useAppSelector: TypedUseSelectorHook<RootState> = useReduxSelector

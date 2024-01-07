import { useDispatch, useSelector } from 'react-redux';
import CartContainer from './Components/CartContainer';
import Navbar from './Components/Navbar';
import { useEffect } from 'react';
import { calculateTotals } from './Redux/Slices/CartSlice';
import Modal from './Components/Modal';

function App() {
    const { cartItems } = useSelector((state) => state.cart);
    const { isOpen } = useSelector((state) => state.modal);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(calculateTotals());
    }, [cartItems]);

    return (
        <main>
            {isOpen && <Modal />}
            <Navbar />
            <CartContainer />
        </main>
    );
}
export default App;

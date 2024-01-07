import { useDispatch, useSelector } from 'react-redux';
import CartContainer from './Components/CartContainer';
import Navbar from './Components/Navbar';
import { useEffect } from 'react';
import { calculateTotals } from './Redux/Slices/CartSlice';

function App() {
    const { cartItems } = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(calculateTotals());
    }, [cartItems]);
    return (
        <main>
            <Navbar />
            <CartContainer />
        </main>
    );
}
export default App;

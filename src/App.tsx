import "./App.css";
import { useAppSelector, useAppDispatch } from "./app/hooks";
import { increment } from "./features/counter/counterSlice";

function App() {
	const count = useAppSelector((state) => state.counter.value);
	const dispatch = useAppDispatch();

	const handleCount = () => {
		dispatch(increment());
	};

	return (
		<div className="App">
			<p>Bookworm The E-commerce Bookstore</p>
			<button className="bg-blue-500 py-2 px-4 rounded" onClick={handleCount}>
				Count is {count}
			</button>
		</div>
	);
}

export default App;

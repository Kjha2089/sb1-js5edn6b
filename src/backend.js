import { useRef, useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
	const formRef = useRef(null);
	const scriptUrl =
		'https://script.google.com/macros/s/AKfycbxY5l8Icy5zMgQ8nbEYo6wcNSnRviDuGfvjeiYbejupPCnbbhF2qS_0r3g6V_aSeFTuzQ/exec';

	const [isloading, setIsLoading] = useState(false);

	function handleSubmit(e) {
		e.preventDefault();

		setIsLoading(true);

		fetch(scriptUrl, {
			method: 'POST',
			body: new FormData(formRef.current),
		})
			.then((res) => {
				console.log('succesfully submitted');
			})
			.catch((err) => console.log(err));

		setIsLoading(false);

		formRef.current.reset();
	}

	return (
		<div className="md:w-1/2">
			<form
				className="bg-[#dad7cd] p-8 rounded-lg shadow-md"
				ref={formRef}
				method="post"
				name="google-sheet"
				onSubmit={handleSubmit}
			>
				<div className="mb-6">
					<label
						htmlFor="name"
						className="block text-gray-700 font-medium mb-2"
					>
						Full Name
					</label>
					<input
						type="text"
						name="name"
						className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#588157]"
						placeholder="Your Name"
						required
					/>
				</div>

				<div className="mb-6">
					<label
						htmlFor="email"
						className="block text-gray-700 font-medium mb-2"
					>
						Email Address
					</label>
					<input
						type="email"
						name="email"
						className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#588157]"
						placeholder="abc@gmail.com"
					/>
				</div>

				<div className="mb-6">
					<label
						htmlFor="phone"
						className="block text-gray-700 font-medium mb-2"
					>
						Phone Number
					</label>
					<input
						type="tel"
						name="phone"
						className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#588157]"
						placeholder="Your Number"
						pattern="[0-9]{10}"
						required
					/>
				</div>

				<div className="mb-6">
					<label
						htmlFor="service"
						className="block text-gray-700 font-medium mb-2"
					>
						Service Needed
					</label>
					<select
						name="service"
						className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#588157]"
						required
					>
						<option value="">Select a service</option>
						<option value="corporate">Corporate Law</option>
						<option value="family">Matrimonial Cases</option>
						<option value="estate">Criminal Cases</option>
						<option value="ip">Intellectual Property</option>
						<option value="litigation">Civil Cases</option>
						<option value="realestate">Cheque Bounce Cases</option>
						<option value="mact">M.A.C.T Cases </option>
					</select>
				</div>

				<div className="mb-6">
					<label
						htmlFor="message"
						className="block text-gray-700 font-medium mb-2"
					>
						Your Message
					</label>
					<textarea
						name="message"
						rows={4}
						className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#588157]"
						placeholder="Please describe your legal needs..."
					></textarea>
				</div>

				{isloading ? (
					<p>Loading...</p>
				) : (
					<button type="submit" className="btn btn-primary">
						Submit Inquiry
					</button>
				)}
			</form>
		</div>
	);
}

export default App;

import { useState } from 'react';

function ContactForm() {
	const [user, setUser] = useState({
		name: '',
		email: '',
	});

	const inputHandler = (event) => {
		const { name, value } = event.target;
		if (name === 'name') {
			user.name = value;
		}
		if (name === 'email') {
			user.email = value;
		}
	};

	const onSubmit = (event) => {
		event.preventDefault();
		console.log(user.name);
		console.log(user.email);
	};

	return (
		<>
			<div className="container form mt-5">
				<header className="form-header">
					<h2 className="text-info">Add New Contact</h2>
				</header>
				<div className="row">
					<div className="col-sm-6 col-md-4 col-lg-3 mx-auto">
						<form action="contact-form" onSubmit={onSubmit}>
							<div className="mb-2">
								<label htmlFor="name" className="form-label">
									Full Name
								</label>
								<input
									onChange={inputHandler}
									type="text"
									className="form-control bg-dark text-light border-secondary"
									name="name"
								/>
							</div>
							<div className="mb-2">
								<label htmlFor="email" className="form-label">
									Email
								</label>
								<input
									onChange={inputHandler}
									type="email"
									className="form-control bg-dark text-light border-secondary"
									name="email"
								/>
							</div>
							<div className="d-grid pt-2">
								<button type="submit" className="btn btn-info btn-sm add-new">
									<i className="fa fa-plus"></i> Add New
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
}

export default ContactForm;

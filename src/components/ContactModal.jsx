function ContactModal({ userEdit }) {
	let user = userEdit[0];
	return (
		<>
			<div
				className="modal fade"
				id="reactModal"
				data-bs-backdrop="static"
				aria-labelledby="reactModalLabel"
				aria-hidden="true"
			>
				<div className="modal-dialog modal-dialog-centered">
					<div className="modal-content bg-dark text-light border-info">
						<div className="modal-header border-dark">
							<h5 className="modal-title text-info" id="reactModalLabel">
								Edit Contact
							</h5>
							<button
								type="button"
								className="btn-close bg-danger py-1 px-1"
								data-bs-dismiss="modal"
								aria-label="Close"
							></button>
						</div>
						<div className="modal-body">
							<div className="container form">
								<h4>name {user.name}</h4>
								<div className="row">
									<div className="col-12">
										<form action="contact-form">
											<div className="mb-2">
												<label htmlFor="name" className="form-label">
													Full Name
												</label>
												<input
													type="text"
													className="form-control bg-dark text-light border-secondary"
													name="name"
													value={user.name}
												/>
											</div>
											<div className="mb-2">
												<label htmlFor="name" className="form-label">
													Phone
												</label>
												<input
													type="text"
													className="form-control bg-dark text-light border-secondary"
													name="phone"
													value={user.phone}
												/>
											</div>
											<div className="mb-2">
												<label htmlFor="email" className="form-label">
													Email
												</label>
												<input
													type="email"
													className="form-control bg-dark text-light border-secondary"
													name="email"
													value={user.email}
												/>
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
						<div className="modal-footer border-dark">
							<button type="button" className="btn btn-danger btn-sm text-dark" data-bs-dismiss="modal">
								<i className="fa fa-close"></i> Close
							</button>
							<button type="button" className="btn btn-info btn-sm">
								<i className="fa fa-save"></i> Save
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default ContactModal;

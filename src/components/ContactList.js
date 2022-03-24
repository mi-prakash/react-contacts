function ContactList() {
	return (
		<>
			<div className="container contact mt-5">
				<header className="contact-header">
					<h2 className="text-info">Contact List</h2>
				</header>
				<div className="row">
					<div className="col-sm-10 col-md-8 col-lg-6 mx-auto">
						<table className="table table-striped table-sm table-dark">
							<thead className="table-info">
								<tr>
									<th>#</th>
									<th>Full Name</th>
									<th>Email</th>
									<th></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>1</td>
									<td>Test Name</td>
									<td>test@example.com</td>
									<td>
										<button className="btn btn-danger btn-sm px-1 py-0">
											<i className="fa fa-trash"></i>
										</button>
									</td>
								</tr>
								<tr>
									<td>2</td>
									<td>Test Name 2</td>
									<td>test2@example.com</td>
									<td>
										<button className="btn btn-danger btn-sm px-1 py-0">
											<i className="fa fa-trash"></i>
										</button>
									</td>
								</tr>
								<tr>
									<td>3</td>
									<td>Test Name 3</td>
									<td>test3@example.com</td>
									<td>
										<button className="btn btn-danger btn-sm px-1 py-0">
											<i className="fa fa-trash"></i>
										</button>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</>
	);
}

export default ContactList;

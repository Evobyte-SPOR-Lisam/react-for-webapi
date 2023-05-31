import { useEffect, useState } from "react";
import { Person } from "../../models/Person";
import DetailsPerson from "./details-person";

export function ShowAllPersons() {
	const [persons, setPersons] = useState([]);
	const [personDetails, setPersonDetails] = useState<Person | null>(null);

	useEffect(() => {
		fetch("http://localhost:5283/api/people")
			.then((response) => response.json())
			.then((data) => setPersons(data));
	}, []);

	return (
		<>
			{personDetails !== null && <DetailsPerson person={personDetails} />}

			<h1>Persons</h1>
			<p>Here is a list of all persons</p>
			<table>
				<thead>
					<tr>
						<th>#</th>
						<th>Name</th>
						<th>Operations</th>
					</tr>
				</thead>
				<tbody>
					{persons.map((person: Person, i: number) => (
						<tr key={person.id}>
							<td>{i + 1}</td>
							<td>{person.name}</td>
							<td>
								<button onClick={() => setPersonDetails(person)}>Details</button> |{" "}
								<button>Edit</button> | <button>Delete</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</>
	);
}
